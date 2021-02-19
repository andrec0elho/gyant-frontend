import React from 'react';
import logo from '../assets/images/gyant-logo.svg';
import { ButtonComponent, InputComponent } from '../components';
import { AuthService, UserService } from '../services';
import { setTokenStorage, setUserStorage } from '../services/utils.service';

function Login(props) {
  const credentials = {
    email: null,
    password: null
  };

  const authService = new AuthService();
  const userService = new UserService();

  // handle button click of login form
  const login = async () => {
    console.log(credentials)
    try {
      const token = await authService.login(credentials);

      if (!token) {
        // TODO: Error
      }
      console.log(token)
      setTokenStorage(token);
      const user = await userService.getMyProfile();
      console.log(user);
      setUserStorage(user);
    } catch (error) {
      console.log(error)
    }


    props.history.push('/dashboard');
  }

  const saveEmail = (value) => {
    console.log("---------", value)
    credentials.email = value;

  }

  const savePassword = (value) => {
    credentials.password = value;
  }

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-6 col-xl-3">
        <div>
          <img src={logo} className="mw-100" alt="logo" />
        </div>

        <div className="w-100 panados">
          <div className="pb-1rem">
            <InputComponent name="loginEmail" type="text" label="Email" onChange={saveEmail} />
          </div>
          <div className="pb-1rem">
            <InputComponent name="loginPassword" type="password" label="Password" onChange={savePassword} />
          </div>
          <ButtonComponent buttonClick={login} label={"Login"} />
        </div>


      </div>
    </div>
  );
}

export default Login;