import MetaHuman from './metaHuman';
import weaponBoost from './constants';

export default function Villain(name, health, kick, weapon, curse, special) {
  MetaHuman.call(this, name, health, kick, weapon);

  this.curse = curse;
  this.special = special;

  this.destroyWorld = () => {
    const damageValue = this.kick * weaponBoost[this.weapon]
      + (Villain.curses[this.curse] * Villain.specials[this.special]);
    return damageValue.toFixed(2);
  };
}

Villain.prototype = Object.create(MetaHuman.prototype);

Villain.curses = {
  curse1: 1.16,
  curse2: 1.01,
};

Villain.specials = {
  special1: 1.22,
  special2: 1.1,
};
