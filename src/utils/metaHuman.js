// @flow

export interface IMetaHuman {
  greet(): string;
  getDamage(value: number): void;
}

export type MetaHumanAttrs = {
  name: string,
  health: number,
  kick: number,
  weapon: string,
};

export default class MetaHuman implements IMetaHuman {
  name: string;

  health: number;

  kick: number;

  weapon: string;

  isDead: boolean;

  constructor({
    name,
    health,
    kick,
    weapon,
  }: MetaHumanAttrs) {
    this.name = name;
    this.health = health;
    this.kick = kick;
    this.weapon = weapon;
    this.isDead = false;
  }

  greet = (): string => `${this.name} is greeting You! And I have weapon: ${this.weapon}`;

  getDamage = (damageValue: number): void => {
    this.health = parseFloat((this.health - damageValue).toFixed(2));
    if (this.health <= 0) {
      this.isDead = true;
      this.health = 0;
    }
  };
}
