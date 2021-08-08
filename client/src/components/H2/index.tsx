import StyledH2 from './styles';
import { H2PropsTypes } from './types';

const H2 = ({ children }: H2PropsTypes) => {
  return <StyledH2>{children}</StyledH2>;
};

export default H2;
