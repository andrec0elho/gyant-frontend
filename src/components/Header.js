import React from 'react';
import './Header.scss';
import logoPng from '../assets/images/gyant-logo.png';
import { Link } from 'react-router-dom';
import { ButtonComponent } from './Button';
import { removeUserStorage } from '../services/utils.service';


export class HeaderComponent extends React.Component {

  onLogout = () => {
    removeUserStorage();
  }

  render() {
    const { name } = this.props;
    return (
      <div className="w-100 px-5 headerBox d-flex">
        <img src={logoPng} className="mh-100" alt="logo" />

        <div className="w-100 headerContent">
          <div className="px-3">Welcome, {name}</div>
          <Link to="/">
            <ButtonComponent buttonClick={this.onLogout} label={"Logout"} buttonStyle={'red'} />
          </Link>
        </div>

      </div>
    )
  }
}
