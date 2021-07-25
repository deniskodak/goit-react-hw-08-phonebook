import { connect } from 'react-redux';
import { authOps, authSelectors } from '../../../redux/auth';
import UserMenu from './UserMenu';

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
});

const mapDispatchToProps = {
  onLogout: authOps.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
