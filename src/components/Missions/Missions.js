import React from 'react';
import Title from '../Title/Title';
import MissionsCard from '../MissionCard/MissionCard';
import missions from '../../data/missions';
import * as S from './styles';

class Missions extends React.Component {
  render() {
    const missionList = missions.map((mission, index) => {
      const { name, year, country, destination } = mission;
      return (<MissionsCard
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
        key={ index }
      />);
    });
    return (
      <S.MissionList>
        <Title headline="Missões" />
        <S.Missions>
          {missionList}
        </S.Missions>
      </S.MissionList>
    );
  }
}

export default Missions;
