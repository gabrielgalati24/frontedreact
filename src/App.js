import React, { Component } from 'react'
import Login from './components/login-components/Login';
import Register from './pages/RegisterForm'
import Nomina from './pages/Nomina'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import history from './services/i'
import Footer from './components/footer/footer'
import fichaDePersonal from './pages/ficha de personal/fichaDePersonal'


import './App.css';


class App extends Component {
  render() {
    return (

      <div className="app">
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/nomina" component={Nomina} />
            <Route path="/fichadepersonal" component={fichaDePersonal} />

          </Switch>
          <Footer />
        </Router>


      </div>

    );
  }
}

export default App;