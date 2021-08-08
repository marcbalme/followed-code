import Routing from './components/Router';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './styles/globalStyles';
import Main from './components/Main';
import Text from './components/Text';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Main>
        <Header />
        <Text bold italic>
          lala
        </Text>
        <Routing />
      </Main>
    </Router>
  );
}

export default App;
