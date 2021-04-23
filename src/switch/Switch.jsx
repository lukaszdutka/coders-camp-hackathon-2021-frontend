import { Route, Switch } from 'react-router-dom';
import { Home } from '../views/home/Home';
import { Login } from '../views/login/Login';
import PrivateRoute from './PrivateRoute';

export const AppSwitch = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/private" component="" />
    </Switch>
  );
};
