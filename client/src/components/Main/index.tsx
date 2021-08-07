import StyledMain from './styles';
import { MainPropsTypes } from './types';

const Main: React.FC<MainPropsTypes> = ({ children }) => (
  <StyledMain>{children}</StyledMain>
);

export default Main;
