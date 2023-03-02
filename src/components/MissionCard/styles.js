import styled from 'styled-components';

export const MissionCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 280px;
  margin: 30px;
  border: 1px solid white;
  border-radius: 20px;
  background-color: rgb(0, 0, 0, 0.6);
`;

export const MissionTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 25px;
  margin-left: 30px;
`;

export const MissionInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  font-size: 25px;
  margin-left: 30px;
`;
