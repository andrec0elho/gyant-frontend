import React from 'react';
import logo from '../assets/images/gyant-logo.svg';
import { ButtonComponent, InputComponent } from '../components';
import { AuthService, UserService } from '../services';
import { setTokenStorage, setUserStorage } from '../services/utils.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storeLogin } from '../store/actions';
import { connect } from 'react-redux';
import { store } from '../store/store';

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        email: null,
        password: null
      },
      validators: {
        invalidEmail: false,
        invalidPassword: false,
        invalidCredentials: false,
      },
    };
    this.authService = new AuthService();
    this.userService = new UserService();
  }

  login = async () => {

    if (!this.isEmailValid(this.state.credentials.email)) {
      toast.error("Please use a valid email");
      return;
    }

    if (!this.isPasswordValid(this.state.credentials.password)) {
      toast.error("Unsecure Password. Use at least 1 lowercase, 1 uppercase, 1 number and 8 characters");
      return;
    }


    try {
      const token = await this.authService.login(this.state.credentials);
      setTokenStorage(token);

      const user = await this.userService.getMyProfile();
      setUserStorage(user);

      store.dispatch(storeLogin());
      this.props.history.push('/dashboard');
    } catch (error) {
      toast.error("Invalid credentials");
    }
  }

  saveEmail = (value) => {
    this.setState(({ credentials }) => ({ credentials: { ...credentials, email: value } }));
  }

  savePassword = (value) => {
    this.setState(({ credentials }) => ({ credentials: { ...credentials, password: value } }));

  }

  isEmailValid = (email) => {
    if (!email) {
      return false;
    }

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = regex.test(email.toLowerCase());
    this.setState(({ validators }) => ({ validators: { ...validators, invalidEmail: !isEmailValid } }));
    return isEmailValid;
  }

  isPasswordValid = (password) => {
    if (!password) {
      return false;
    }

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password);
    this.setState(({ validators }) => ({ validators: { ...validators, invalidPassword: !isPasswordValid } }));
    return isPasswordValid;
  }

  render() {
    return (
      <div className="row justify-content-center" >
        <div className="col-8 col-md-6 col-lg-4 col-xl-3">
          <div>
            <img src={logo} className="mw-100" alt="logo" />
          </div>

          <div className="w-100">
            <div className="pb-1rem">
              <InputComponent name="loginEmail" type="text" label="Email" onChange={this.saveEmail} />
            </div>
            <div className="pb-1rem">
              <InputComponent name="loginPassword" type="password" label="Password" onChange={this.savePassword} />
            </div>
            <ToastContainer position="bottom-center" />
            <ButtonComponent buttonClick={this.login} label={"Login"} disabled={!this.state.credentials.email && !this.state.credentials.password} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  storeLogin: () => dispatch(storeLogin),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
