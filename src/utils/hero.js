// @flow
import MetaHuman from './metaHuman';
import weaponBoost from './constants';

export type HeroAttrs = {
  name: string,
  health: number,
  kick: number,
  weapon: string,
  gift: string,
  ability: string,
};

export type HeroT = {
  ...HeroAttrs,
  saveWorld: () => number,
};

export default class Hero extends MetaHuman {
  static gifts = {
    gift1: 1.12,
    gift2: 1.08,
  };

  static abilities = {
    ability1: 1.02,
    ability2: 1.18,
  };

  constructor({
    name,
    health,
    kick,
    weapon,
    gift,
    ability,
  }: HeroAttrs) {
    super({
      name,
      health,
      kick,
      weapon,
    });

    this.gift = gift;
    this.ability = ability;
  }

  saveWorld = (): number => {
    const damageValue = this.kick * weaponBoost[this.weapon]
      + (Hero.gifts[this.gift] * Hero.abilities[this.ability]);
    return parseFloat(damageValue.toFixed(2));
  };
}
