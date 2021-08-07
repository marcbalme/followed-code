// import './styles/App.scss';
import Routing from './components/Router';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './styles/globalStyles';
import Spacer from './components/Spacer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className='App'>
        <Header />
        <div>test</div>
        <Spacer height={100} mediumHeight={500} />
        <div>patate</div>
        <Routing />
      </div>
    </Router>
  );
}

export default App;
