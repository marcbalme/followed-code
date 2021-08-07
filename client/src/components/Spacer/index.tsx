import StyledSpacer from './styles';
import { SpacerPropsTypes } from './types';

const Spacer: React.FC<SpacerPropsTypes> = props => (
  <StyledSpacer {...props} style={props.customStyle} />
);

Spacer.defaultProps = {
  width: 'auto',
  height: 'auto'
};

export default Spacer;
