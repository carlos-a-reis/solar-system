import styled from 'styled-components';

export const Planet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 211px;

  @media (min-width: 1400px) {
    min-width: 135px;
  }
`;

export const PlanetImage = styled.img`
  ${(props) => {
    switch (props.id) {
    case 'Mercúrio':
      return 'width: 41px;';
    case 'Vênus':
      return 'width: 102px;';
    case 'Marte':
      return 'width: 66px;';
    case 'Júpiter':
      return 'width: 272px;';
    case 'Saturno':
      return 'width: 282px;';
    case 'Urano':
      return 'width: 144px;';
    case 'Netuno':
      return 'width: 144px;';
    default:
      return 'width: 106px;';
    }
  }}
`;

export const PlanetName = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
