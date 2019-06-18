// @flow
import MetaHuman from './metaHuman';
import weaponBoost from './constants';

export type VillainAttrs = {
  name: string,
  health: number,
  kick: number,
  weapon: string,
  curse: string,
  special: string,
};

export type VillainT = {
  ...VillainAttrs,
  destroyWorld: () => number,
};

export default class Villain extends MetaHuman {
  static curses = {
    curse1: 1.16,
    curse2: 1.01,
  };

  static specials = {
    special1: 1.22,
    special2: 1.1,
  };

  constructor({
    name,
    health,
    kick,
    weapon,
    curse,
    special,
  }: VillainAttrs) {
    super({
      name,
      health,
      kick,
      weapon,
    });

    this.curse = curse;
    this.special = special;
  }

  destroyWorld = (): number => {
    const damageValue = this.kick * weaponBoost[this.weapon]
      + (Villain.curses[this.curse] * Villain.specials[this.special]);
    return parseFloat(damageValue.toFixed(2));
  };
}
