import { string } from 'prop-types';
import React from 'react';

class PlanetCard extends React.Component {
  render() {
    return (
      <div data-testid="planet-cart">
        <img src={ this.props.planetImage } alt={ ['Planeta', { planetName }] } />
        <p data-testid="planet-name">{this.props.planetName}</p>
      </div>
    );
  }
}

PlanetCard.prototypes = {
  planetName: string,
  planetImage: string,
};

export default PlanetCard;
