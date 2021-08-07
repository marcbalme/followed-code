import styled from 'styled-components';
import { breakpoint } from '../../styles/appStyles';
import remCalc from '../../utils/remCalc';

const StyledMain = styled.div`
  margin-top: ${remCalc(60)};
  ${breakpoint.tablet} {
    margin-top: ${remCalc(80)};
  }
  ${breakpoint.laptop} {
    margin-left: ${remCalc(150)};
    margin-top: 0;
  }
  ${breakpoint.desktop} {
    margin-left: ${remCalc(200)};
  }
`;

export default StyledMain;
