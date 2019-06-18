import MetaHuman from './metaHuman';
import weaponBoost from './constants';

export default function Hero(name, health, kick, weapon, gift, ability) {
  MetaHuman.call(this, name, health, kick, weapon);

  this.gift = gift;
  this.ability = ability;

  this.saveWorld = () => {
    const damageValue = this.kick * weaponBoost[this.weapon]
      + (Hero.gifts[this.gift] * Hero.abilities[this.ability]);
    return damageValue.toFixed(2);
  };
}

Hero.prototype = Object.create(MetaHuman.prototype);

Hero.gifts = {
  gift1: 1.12,
  gift2: 1.08,
};

Hero.abilities = {
  ability1: 1.02,
  ability2: 1.18,
};
