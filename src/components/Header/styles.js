import styled from 'styled-components';

const HeaderH1 = styled.header`
  display: flex;
  justify-content: center;
  font-size: 50px;
  padding-top: 20px;

  @media (min-width: 520px) {
    font-size: 70px;
  }
  
  @media (min-width: 1024px) {
    font-size: 100px;
  }
`;

export default HeaderH1;
