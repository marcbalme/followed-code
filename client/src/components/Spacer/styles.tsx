// @ts-nocheck
import styled from 'styled-components';
import { breakpoint } from '../../styles/appStyles';
import remCalc from '../../utils/remCalc';
import { SpacerProps } from './types';

const StyledSpacer = styled.div`
  width: ${(props: SpacerProps) => remCalc(props.width)};
  flex: 0 0 ${(props: SpacerProps) => remCalc(props.width)};
  height: ${(props: SpacerProps) => remCalc(props.height)};

  ${breakpoint.tablet} {
    width: ${(props: SpacerProps) => remCalc(props.mediumWidth)};
    flex: 0 0 ${(props: SpacerProps) => remCalc(props.mediumWidth)};
    height: ${(props: SpacerProps) => remCalc(props.mediumHeight)};
  }
  ${breakpoint.laptop} {
    width: ${(props: SpacerProps) => remCalc(props.largeWidth)};
    flex: 0 0 ${(props: SpacerProps) => remCalc(props.largeWidth)};
    height: ${(props: SpacerProps) => remCalc(props.largeHeight)};
  }
`;

export default StyledSpacer;
