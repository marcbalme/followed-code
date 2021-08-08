import StyledH1 from './styles';
import { H1PropsTypes } from './types';

const H1 = ({ children }: H1PropsTypes) => {
  return <StyledH1>{children}</StyledH1>;
};

export default H1;
