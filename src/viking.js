// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
    if (this.health !== 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
    if (this.health !== 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  
  vikingAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    const result = this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].strength
    );

    for (let i = 0; i < this.saxonArmy.length; i++) {
      if (this.saxonArmy[i].health < 1) {
        this.saxonArmy.splice(i, 1);
      }
    }

    return result;
  }

  saxonAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    const result = this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].strength
    );

    for (let i = 0; i < this.vikingArmy.length; i++) {
      if (this.vikingArmy[i].health < 1) {
        this.vikingArmy.splice(i, 1);
      }
    }
    return result;
  }

  //////BONUS//////

  genericAttack(attacker) {
    let attackerArmy;
    let defenderArmy;
    let result;

    if (attacker === "saxon"){
      attackerArmy = this.saxonArmy;
      defenderArmy = this.vikingArmy;
    } else if (attacker === "viking"){
      attackerArmy = this.vikingArmy;
      defenderArmy = this.saxonArmy;
    }

    let randomAttacker = Math.floor(Math.random() * attackerArmy.length);
    let randomDefender = Math.floor(Math.random() * defenderArmy.length);
   
    result = defenderArmy[randomDefender].receiveDamage(attackerArmy[randomAttacker].strength);

    for (let i = 0; i < defenderArmy.length; i++) {
      if(defenderArmy[i].health < 1){
        defenderArmy.splice(i, 1);
      }
    }

    return result

// The first iteration of bonus
    // let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    // let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    // if (attacker === "saxon") {
    //   result = this.vikingArmy[randomViking].receiveDamage(
    //     this.saxonArmy[randomSaxon].strength
    //   );

    //   for (let i = 0; i < this.vikingArmy.length; i++) {
    //     if (this.vikingArmy[i].health < 1) {
    //       this.vikingArmy.splice(i, 1);
    //     }
    //   }
    // }

    // if (attacker === "viking") {
    //   let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    //   let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    //   const result = this.saxonArmy[randomSaxon].receiveDamage(
    //     this.vikingArmy[randomViking].strength
    //   );

    //   for (let i = 0; i < this.saxonArmy.length; i++) {
    //     if (this.saxonArmy[i].health < 1) {
    //       this.saxonArmy.splice(i, 1);
    //     }
    //   }
    // }

    // return result;
    
  }
//////

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
