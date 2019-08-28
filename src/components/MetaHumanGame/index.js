// @flow

import React, { Component } from 'react';
import Hero from '../../utils/hero';
import Villain from '../../utils/villain';
import MetaPerson from './MetaPerson';

import '../../App.css';

type Props = {};

type State = {
  hero: Hero,
  villain: Villain,
};

class MetaHumanGame extends Component<Props, State> {
  constructor() {
    super();

    const hero: Hero = new Hero({
      name: 'Logan',
      health: 100,
      kick: 4,
      weapon: 'claws',
      gift: 'gift1',
      ability: 'ability1',
    });

    const villain: Villain = new Villain({
      name: 'Magneto',
      health: 60,
      kick: 8,
      weapon: 'magnet',
      curse: 'curse1',
      special: 'special1',
    });

    this.state = {
      hero,
      villain,
    };
  }

  handleKickHero = (): void => {
    const { hero, villain } = this.state;

    hero.getDamage(villain.destroyWorld());

    this.setState({ hero, villain });
  };

  handleKickVillain = (): void => {
    const { hero, villain } = this.state;

    villain.getDamage(hero.saveWorld());

    this.setState({ hero, villain });
  };

  render() {
    const { hero, villain } = this.state;

    return (
      <div style={{ width: '70%' }}>
        <div className="App-title">Meta human battle</div>
        <div className="App-content">
          <MetaPerson
            entity={hero}
            handleAction={this.handleKickHero}
          />

          <MetaPerson
            entity={villain}
            handleAction={this.handleKickVillain}
          />
        </div>
      </div>
    );
  }
}

export default MetaHumanGame;
