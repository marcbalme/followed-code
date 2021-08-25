import styled from 'styled-components';
import { appStyles, breakpoint } from '../../styles/appStyles';
import remCalc from '../../utils/remCalc';

const StyledH1 = styled.h1`
  margin: 0;
  color: ${appStyles.colors.orange};
  font-size: ${remCalc(26)};
  ${breakpoint.tablet} {
    font-size: ${remCalc(28)};
  }
  ${breakpoint.laptop} {
    font-size: ${remCalc(32)};
  }
`;

export default StyledH1;
