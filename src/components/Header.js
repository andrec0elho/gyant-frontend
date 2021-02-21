import React from 'react';
import './Header.scss';
import logoPng from '../assets/images/gyant-logo.png';
import { Link } from 'react-router-dom';
import { ButtonComponent } from './Button';
import { removeUserStorage } from '../services/utils.service';
import { connect } from 'react-redux';
import { storeLogout } from '../store/actions';
import { store } from '../store/store';


class HeaderComponent extends React.Component {

  onLogout = () => {
    store.dispatch(storeLogout());
    removeUserStorage();
  }

  render() {
    const { name } = this.props;
    return (
      <div className="w-100 px-3 px-md-5 headerBox d-flex">
        <img src={logoPng} className="mh-100" alt="logo" />

        <div className="w-100 headerContent">
          <div className="px-3 d-none d-lg-block">Welcome, {name}</div>
          <Link to="/">
            <ButtonComponent buttonClick={this.onLogout} label={"Logout"} buttonStyle={'red'} />
          </Link>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  storeLogout: () => dispatch(storeLogout),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
