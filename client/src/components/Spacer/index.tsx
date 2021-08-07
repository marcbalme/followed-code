import StyledSpacer from './styles';
import { SpacerProps } from './types';

const Spacer: React.FC<SpacerProps> = props => (
  <StyledSpacer {...props} style={props.customStyle} />
);

Spacer.defaultProps = {
  width: 'auto',
  height: 'auto'
};

export default Spacer;
