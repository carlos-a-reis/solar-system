import React from 'react';
import Header from './components/Header/Header';
import SolarSystem from './components/SolarSystem/SolarSystem';
import Missions from './components/Missions/Missions';
import Main from './styles';

class App extends React.Component {
  render() {
    return (
      <Main>
        <Header />
        <SolarSystem />
        <Missions />
      </Main>
    );
  }
}

export default App;
