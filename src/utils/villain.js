// @flow

import MetaHuman from './metaHuman';
import type { MetaHumanAttrs } from './metaHuman';
import weaponBoost from './constants';

export interface IVillain {
  destroyWorld(): number;
}

export type VillainAttrs = {
  ...MetaHumanAttrs,
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

  constructor(props: VillainAttrs) {
    super({ ...props });

    this.curse = props.curse;
    this.special = props.special;
  }

  destroyWorld = (): number => {
    const damageValue = this.kick * weaponBoost[this.weapon]
      + (Villain.curses[this.curse] * Villain.specials[this.special]);
    return parseFloat(damageValue.toFixed(2));
  };
}
