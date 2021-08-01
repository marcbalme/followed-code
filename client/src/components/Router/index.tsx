import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../../pages/dashboard';
import Login from '../../pages/login';
import Sessions from '../../pages/sessions';
import Students from '../../pages/students';

const Routing = ({ children }: any) => {
  return (
    <Router>
      {children}
      <Switch>
        <Route exact path='/' children={<Dashboard />} />
        <Route path='/login' children={<Login />} />
        <Route path='/sessions' children={<Sessions />} />
        <Route path='/students' children={<Students />} />
      </Switch>
    </Router>
  );
};

export default Routing;
