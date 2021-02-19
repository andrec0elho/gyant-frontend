import React, { useState } from 'react';
import logo from '../assets/images/gyant-logo.svg';
import { ButtonComponent, InputComponent } from '../components';

function Login(props) {
  const credentials = {
    email: null,
    password: null
  };

  // handle button click of login form
  const login = () => {
    console.log(credentials)
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