import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch , Redirect } from 'react-router-dom';
import { routesAdmin } from './routers/routers';
import Login from './components/login/Login.js';
import Admin from './components/pages/Admin';
import Register from './components/pages/users/Register';
import jwt_decode from "jwt-decode";

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {

  const token = getToken();

  // if (token != '') {
  //   if (jwt_decode(token).exp < Date.now() / 1000) {
  //     sessionStorage.clear();
  //   } 
  //   return <Login />
  // }

  return (
    <Router>
      <Switch>
        <Route
          exact
          path={["/" , "/login"]}
          component={Login}
        />
        <Route
          exact
          path="/register"
          component = {Register}
        />
        <Route path="/admin">
          <Admin>
            <Switch>
              {routesAdmin.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={'/admin' + route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                );
              })}
            </Switch>
          </Admin>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
