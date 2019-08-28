// @flow

import MetaHuman from './metaHuman';
import type { MetaHumanAttrs } from './metaHuman';
import weaponBoost from './constants';

export interface IHero {
  saveWorld: () => number,
}

export type HeroAttrs = {
  ...MetaHumanAttrs,
  gift: string,
  ability: string,
};

export default class Hero extends MetaHuman implements IHero {
  static gifts = {
    gift1: 1.12,
    gift2: 1.08,
  };

  static abilities = {
    ability1: 1.02,
    ability2: 1.18,
  };

  gift: string;

  ability: string;

  constructor(props: HeroAttrs) {
    super({ ...props });

    this.gift = props.gift;
    this.ability = props.ability;
  }

  saveWorld = (): number => {
    const damageValue = this.kick * weaponBoost[this.weapon]
      + (Hero.gifts[this.gift] * Hero.abilities[this.ability]);
    return parseFloat(damageValue.toFixed(2));
  };
}
