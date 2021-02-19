import React from 'react';
import './Header.scss';
import logoPng from '../assets/images/gyant-logo.png';


export class HeaderComponent extends React.Component {

  render() {
    const { buttonClick, label, style } = this.props;
    return (
      <div className="w-100 px-5 headerBox d-flex">
        <img src={logoPng} className="mh-100" alt="logo" />

        <div className="w-100 headerContent">
          <div className="px-3">Welcome, André Coelho</div>
          <div>Logout</div>
        </div>

      </div>
    )
  }
}
