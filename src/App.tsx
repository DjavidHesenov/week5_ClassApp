import React from 'react';
import Landing from './components/Landing';
import Login from './components/Login';
import Forecast from './components/Forecast';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ILogin } from './interfaces';
import { authActions } from './store/auth';
import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'

const { login, logout } = authActions

type MyProps = RouteComponentProps<PathParamsType> & {
  someString: string,
  dispatch: any,
  isAuth: boolean
}

interface MyState { isAuth: boolean };

type PathParamsType = {
  param1: string,
}


class App extends React.Component<any, any> {

  componentDidMount() {
    const saved = JSON.parse(localStorage.getItem('isAuth') || 'false') as ILogin[]

    if (saved) {
      this.props.dispatch(login())
    } else {
      this.props.dispatch(logout())
    }
  }

  componentDidUpdate(prevProps: MyProps, prevState: MyState) {
    if (prevProps.isAuth !== this.props.isAuth) {
      const saved = JSON.parse(localStorage.getItem('isAuth') || 'false') as ILogin[]

      if (saved) {
        this.props.dispatch(login())
      } else {
        this.props.dispatch(logout())
      }

    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Landing} path="/" exact />
          {!this.props.isAuth && <Route component={Login} path="/login" exact />}
          {this.props.isAuth && <Route component={Forecast} path="/forecast" exact />}
          <Route path="*" >
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isAuth: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(App)
