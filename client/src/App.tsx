import Routing from './components/Router';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './styles/globalStyles';
import Main from './components/Main';
import H2 from './components/H2';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Main>
        <Header />
        <H2>test</H2>
        <Routing />
      </Main>
    </Router>
  );
}

export default App;
