// @flow

import MetaHuman from './metaHuman';
import type { MetaHumanAttrs } from './metaHuman';
import weaponBoost from './constants';

export interface IVillain {
  destroyWorld(): number;
}

export type VillainAttrs = MetaHumanAttrs & {
  curse: string,
  special: string,
};

export default class Villain extends MetaHuman implements IVillain {
  static curses = {
    curse1: 1.16,
    curse2: 1.01,
  };

  static specials = {
    special1: 1.22,
    special2: 1.1,
  };

  curse: string;

  special: string;

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
