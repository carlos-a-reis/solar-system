import React from 'react';
import Title from '../Title/Title';
import PlanetCard from '../PlanetCard/PlanetCard';
import planets from '../../data/planets';
import * as S from './styles';

class SolarSystem extends React.Component {
  render() {
    const planetList = planets.map((planet, index) => {
      const { name, image } = planet;
      return <PlanetCard planetName={ name } planetImage={ image } key={ index } />;
    });
    return (
      <S.SolarSystem>
        <Title headline="Planetas" />
        <S.PlanetsList>
          {planetList}
        </S.PlanetsList>
      </S.SolarSystem>
    );
  }
}

export default SolarSystem;
