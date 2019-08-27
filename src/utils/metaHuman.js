// @flow

export type MetaHumanAttrs = {
  name: string,
  health: number,
  kick: number,
  weapon: string,
};

export type MetaHumanT = {
  ...MetaHumanAttrs,
  greet: () => string,
  getDamage: (damage: number) => void,
};

export default class MetaHuman {
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
