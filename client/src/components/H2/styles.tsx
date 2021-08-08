import styled from 'styled-components';
import { appStyles, breakpoint } from '../../styles/appStyles';
import remCalc from '../../utils/remCalc';

const StyledH2 = styled.h2`
  margin: 0;
  color: ${appStyles.colors.white};
  font-size: ${remCalc(24)};
  ${breakpoint.tablet} {
    font-size: ${remCalc(26)};
  }
  ${breakpoint.laptop} {
    font-size: ${remCalc(28)};
  }
`;

export default StyledH2;
