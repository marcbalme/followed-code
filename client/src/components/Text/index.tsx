import { appStyles } from '../../styles/appStyles';
import StyledText from './styles';
import { TextPropsTypes } from './types';

const Text = ({
  children,
  theme,
  bold,
  size,
  italic,
  align,
  multiline,
  customStyle
}: TextPropsTypes) => (
  <StyledText
    style={{ ...customStyle, color: theme }}
    bold={bold}
    size={size}
    italic={italic}
    multiline={multiline}
    align={align}>
    {children}
  </StyledText>
);

Text.defaultProps = {
  theme: appStyles.colors.metal,
  bold: false,
  italic: false,
  align: 'left',
  size: 'medium',
  multiline: false
};

export default Text;
