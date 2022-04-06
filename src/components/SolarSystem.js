import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetList = Planets.map((planet, index) => {
      const { name, image } = planet;
      return <PlanetCard planetName={ name } planetImage={ image } key={ index } />;
    });
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {planetList}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
