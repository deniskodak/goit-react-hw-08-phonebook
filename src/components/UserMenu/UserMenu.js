import React from 'react';
import { connect } from 'react-redux';
import { authOps, authSelectors } from '../../redux/auth';

const UserMenu = ({ user, onLogout }) => {
  return (
    <div>
      <span>
        Happy Christmas
        <span styles="text-transform: capitalize">{user.name}</span>
      </span>
      <button type="button" onClick={() => onLogout()}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
});

const mapDispatchToProps = {
  onLogout: authOps.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
