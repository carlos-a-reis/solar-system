import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

class MissionsCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <S.MissionCard>
        <div>
          <S.MissionTitle>{name}</S.MissionTitle>
          <hr />
        </div>
        <S.MissionInfo>
          <p>{year}</p>
          <p>{country}</p>
          <p>{destination}</p>
        </S.MissionInfo>
      </S.MissionCard>
    );
  }
}

MissionsCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionsCard;
