// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }
  attack() {return this.strength;}
  receiveDamage(damage) {this.health = this.health - damage;}
}

// Viking
class Viking extends Soldier{
  constructor(name, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if(this.health > 0) return `${this.name} has received ${damage} points of damage`;
    else return `${this.name} has died in act of combat`;
  }
  battleCry() {return "Odin Owns You All!";}
}

// Saxon
class Saxon extends Soldier{
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg);
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
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
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let idxViking = Math.floor(Math.random()*this.vikingArmy.length);
    let idxSaxon= Math.floor(Math.random()*this.saxonArmy.length);
    let res = this.saxonArmy[idxSaxon].receiveDamage(this.vikingArmy[idxViking].attack());
    if(res === 'A Saxon has died in combat') this.saxonArmy.splice(idxSaxon, 1);
    return res;
  }
  saxonAttack() {
    let idxViking = Math.floor(Math.random()*this.vikingArmy.length);
    let idxSaxon= Math.floor(Math.random()*this.saxonArmy.length);
    let res = this.vikingArmy[idxViking].receiveDamage(this.saxonArmy[idxSaxon].attack());
    let reg = /(has died in act of combat)/;
    if(res.match(reg)) this.vikingArmy.splice(idxViking, 1);
    return res;
  }
  showStatus() {
    if(this.saxonArmy.length === 0) return 'Vikings have won the war of the century!';
    if(this.vikingArmy.length === 0) return 'Saxons have fought for their lives and survive another day...';
    return 'Vikings and Saxons are still in the thick of battle.';
  }
}
