import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

// const mapStateToProps = ({ session, entities: { users } }) => {
//   console.log(users[session.id])
//   return{
//     currentUser: users[session.id]
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Greeting);

const mapStateToProps = (state) => {
  return{
    state: state
  }
}

export default connect(mapStateToProps, null)(Greeting);
