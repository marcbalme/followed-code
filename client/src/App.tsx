import './styles/App.scss';
import Routing from './components/Router';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routing />
      </div>
    </Router>
  );
}

export default App;
