import styled from 'styled-components';
import { appStyles, breakpoint } from '../../styles/appStyles';
import remCalc from '../../utils/remCalc';

const StyledHeader = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${remCalc(60)};
  background: ${appStyles.colors.darkGray};
  color: ${appStyles.colors.white};
  ${breakpoint.tablet} {
    height: ${remCalc(80)};
  }
  ${breakpoint.laptop} {
    top: 0;
    bottom: 0;
    right: unset;
    height: unset;
    width: ${remCalc(150)};
  }
  ${breakpoint.desktop} {
    width: ${remCalc(200)};
  }
`;

export default StyledHeader;
