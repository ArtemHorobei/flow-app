export default function MetaHuman(name, health, kick, weapon) {
  this.name = name;
  this.health = health;
  this.kick = kick;
  this.weapon = weapon;
  this.isDead = false;
}

MetaHuman.prototype.greet = function greet() {
  return `${this.name} is greeting You! And I have weapon: ${this.weapon}`;
};

MetaHuman.prototype.getDamage = function getDamage(damageValue) {
  this.health = (this.health - damageValue).toFixed(2);
  if (this.health <= 0) {
    this.isDead = true;
    this.health = 0;
  }
};
