import React from 'react';
import Title from '../Title/Title';
import PlanetCard from '../PlanetCard/PlanetCard';
import planets from '../../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetList = planets.map((planet, index) => {
      const { name, image } = planet;
      return <PlanetCard planetName={ name } planetImage={ image } key={ index } />;
    });
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <div className="planetsList">
          {planetList}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
