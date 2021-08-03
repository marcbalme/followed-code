import './styles/App.scss';
import Routing from './components/Router';
import HeaderDesktop from './components/Header/desktop';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <HeaderDesktop />
        <Routing />
      </div>
    </Router>
  );
}

export default App;
