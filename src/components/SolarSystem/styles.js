import styled from 'styled-components';

export const SolarSystem = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 26px;

  @media (min-width: 520px) {
    margin-top: 36px;
  }
  
  @media (min-width: 1024px) {
    margin-top: 66px;
  }
`;

export const PlanetsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1300px;
  margin-top: 16px;
  margin-bottom: 80px;
  width: 95%;
  overflow-x: auto;

  @media (min-width: 520px) {
    margin-top: 36px;
  }
  
  @media (min-width: 1400px) {
    margin-top: 55px;
    width: auto;
  }
`;
