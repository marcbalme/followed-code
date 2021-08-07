// import './styles/App.scss';
import Routing from './components/Router';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './styles/globalStyles';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Main>
        <Header />
        <div>test</div>
        <Routing />
      </Main>
    </Router>
  );
}

export default App;
