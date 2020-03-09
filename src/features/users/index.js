import User from './User';
import { connect } from 'react-redux';
import {setSelectedUser} from '../../actions'

const mapStateToProps = ({usersReducer}) => ({
  users: usersReducer.users,
  selectedUser: usersReducer.selectedUser,
});
const mapDispatchToProps = dispatch => ({
    setSelectedUser: (data) => {
      dispatch(setSelectedUser(data.target.value));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(User);