import React, { useEffect } from 'react';
import Landing from './components/Landing';
import Login from './components/Login';
import Forecast from './components/Forecast';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import { ILogin } from './interfaces';
import { authActions } from './store/auth';

const App: React.FC = () => {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  useEffect(() => {

    const saved = JSON.parse(localStorage.getItem('isAuth') || 'false') as ILogin[]

    if (saved) {
      dispatch(authActions.login())
    } else {
      dispatch(authActions.logout())
    }

  }, [dispatch])

  return (
    <BrowserRouter>
      <Switch>
        <Route component={Landing} path="/" exact/>
        {!isAuth && <Route component={Login} path="/login" exact/>}
        {isAuth && <Route component={Forecast} path="/forecast" exact />}
        <Route path="*" >
          <Redirect to="/" />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
