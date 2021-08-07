// @ts-nocheck
import styled from 'styled-components';
import { breakpoint } from '../../styles/appStyles';
import remCalc from '../../utils/remCalc';
import { SpacerPropsTypes } from './types';

const StyledSpacer = styled.div`
  width: ${(props: SpacerPropsTypes) => remCalc(props.width)};
  flex: 0 0 ${(props: SpacerPropsTypes) => remCalc(props.width)};
  height: ${(props: SpacerPropsTypes) => remCalc(props.height)};

  ${breakpoint.tablet} {
    width: ${(props: SpacerPropsTypes) => remCalc(props.mediumWidth)};
    flex: 0 0 ${(props: SpacerPropsTypes) => remCalc(props.mediumWidth)};
    height: ${(props: SpacerPropsTypes) => remCalc(props.mediumHeight)};
  }
  ${breakpoint.laptop} {
    width: ${(props: SpacerPropsTypes) => remCalc(props.largeWidth)};
    flex: 0 0 ${(props: SpacerPropsTypes) => remCalc(props.largeWidth)};
    height: ${(props: SpacerPropsTypes) => remCalc(props.largeHeight)};
  }
`;

export default StyledSpacer;
