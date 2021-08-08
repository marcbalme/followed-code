import styled from 'styled-components';
import { breakpoint, textSize } from '../../styles/appStyles';
import remCalc from '../../utils/remCalc';
import { TextPropsTypes } from './types';

const StyledText = styled.div`
  display: block;
  font-weight: ${(props: TextPropsTypes) => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  font-size: ${props => remCalc(textSize[props.size]['mobile'])};
  text-align: ${props => props.align};
  line-height: ${props => (props.multiline ? 1.4 : 'inherit')};
  ${breakpoint.tablet} {
    font-size: ${props => remCalc(textSize[props.size]['tablet'])};
  }
  ${breakpoint.laptop} {
    font-size: ${props => remCalc(textSize[props.size]['desktop'])};
  }

  &.bold {
    font-weight: bold;
  }
`;

export default StyledText;
