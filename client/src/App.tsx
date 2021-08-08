import Routing from './components/Router';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './styles/globalStyles';
import Main from './components/Main';
import H1 from './components/H1';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Main>
        <Header />
        <H1>test</H1>
        <Routing />
      </Main>
    </Router>
  );
}

export default App;
