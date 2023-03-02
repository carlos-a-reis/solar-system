import styled from 'styled-components';

const TitleH2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 350px;
  height: 35px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: rgb(0, 0, 0, 0.6);

  @media (min-width: 520px) {
    font-size: 35px;
    width: 490px;
    height: 45px;
  }
  
  @media (min-width: 1024px) {
    font-size: 50px;
    width: 1000px;
    height: 65px;
  }

  @media (min-width: 1170px) {
    font-size: 50px;
    width: 1140px;
    height: 90px;
    border-radius: 20px;
  }
`;

export default TitleH2;
