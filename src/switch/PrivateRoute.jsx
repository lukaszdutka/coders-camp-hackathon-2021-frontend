import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from "../Context";
 
const PrivateRoute = ({ path, exact = false, component }) => {
  const { token } = useContext(AppContext);
  return token ? <Route path={path} exact={exact} component={component} /> : <Redirect to="/" />;
};

export default PrivateRoute;
