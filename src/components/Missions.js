import React from 'react';
import Title from './Title';
import MissionsCard from './MissionCard';
import missions from '../data/missions';

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
      <div data-testid="missions">
        <Title headline="Missões" />
        <div id="missons">
          {missionList}
        </div>
      </div>
    );
  }
}

export default Missions;
