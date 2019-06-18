import React, { Component } from 'react';

import Hero from '../../utils/hero';
import Villain from '../../utils/villain';
import MetaPerson from './MetaPerson';

import '../../App.css';

class MetaHumanGame extends Component {
  constructor(props) {
    super(props);

    const characters = [
      new Hero('Logan', 100, 4, 'claws', 'gift1', 'ability1'),
      new Villain('Magneto', 60, 8, 'magnet', 'curse1', 'special1'),
    ];

    this.state = { characters };
  }

  handleKick = () => {
    const { characters: [hero, villain] } = this.state;

    hero.getDamage(villain.destroyWorld());

    this.setState({ characters: [hero, villain] });
  };

  render() {
    const { characters } = this.state;

    return (
      <div style={{ width: '70%' }}>
        <div className="App-title">Meta human battle</div>
        <div className="App-content">
          {
            characters
              .map(entity => (
                <MetaPerson
                  key={Math.random()}
                  entity={entity}
                  handleAction={this.handleKick}
                />
              ))
          }
        </div>
      </div>
    );
  }
}

export default MetaHumanGame;
