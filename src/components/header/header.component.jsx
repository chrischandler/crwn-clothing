import React from "react";
import { Link } from "react-router-dom";

// Higher order component which are functions that return a new souped up component
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="options" to="/shop">
        SHOP
      </Link>
      <Link className="options" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="options" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="options" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

// Used for Redux so that the component can access the state
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

// export wrapped in connect to implement Redux
export default connect(mapStateToProps)(Header);
