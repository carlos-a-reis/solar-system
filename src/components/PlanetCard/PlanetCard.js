import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

class PlanetCard extends React.Component {
  render() {
    const { planetImage, planetName } = this.props;
    return (
      <div>
        <S.Planet>
          <S.PlanetImage
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            id={ planetName }
          />
        </S.Planet>
        <S.PlanetName>{planetName}</S.PlanetName>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
