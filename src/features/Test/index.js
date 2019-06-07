import { connect } from 'react-redux';
import  Test from './test';
import {
  userIsAuthenticated,
  userIsAuthenticating,
  userAuthenticationError,
} from './selector';

// export default Test;

export default connect(store => ({
  error: userAuthenticationError(store),
  authenticated: userIsAuthenticated(store),
  authenticating: userIsAuthenticating(store),
}))(Test);
