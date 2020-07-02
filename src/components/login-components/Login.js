import React            from 'react';
import { observer }     from 'mobx-react';
import UserStore        from '../../stores/UserStore';
import LoginForm        from '../../pages/LoginForm';
import SubmitButton     from './SubmitButton';
import './Login.css';

class Login extends React.Component{

  async componentDidMount() {

    try{

      let res = await fetch('/isLoggedIn', {
          method: 'post',
          headers: {
              'Accept': 'applications/json',
              'Content-Type': 'applications/json'
          }
      });

      let result = await res.json();

      if (result && result.success) {
        UserStore.loadin = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }
      
      else { 
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }

    }

    catch(e){
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }

  }

  async doLogout() {

    try{

      let res = await fetch('/logout', {
          method: 'post',
          headers: {
              'Accept': 'applications/json',
              'Content-Type': 'applications/json'
          }
      });

      let result = await res.json();

      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }

    }

    catch(e){
      console.log(e)
    }

  }

  render(){ 

    if(UserStore.loading){
      return (
        <div className="App">
          <div className='container'>
              Cargando, porfavor espere...
          </div>
        </div>
      );
    }

    else {

      if(UserStore.isLoggedIn){
        return (
          <div className="App">
            <div className='container'>
                Bienvenido {UserStore.username}

                <SubmitButton
                  text={'Cerrar sesion'}
                  disabled={false}
                  onClick={ () => this.doLogout() }
                />

            </div>
          </div>
        );
      }

      return (
        <div className="App">
          <div className='container'>
            <SubmitButton
              text={'Cerrar sesion'}
              disabled={false}
              onClick={ () => this.doLogout() }
            />
            <LoginForm />
          </div>
        </div>
      );
    }
  }
}

export default observer(Login);