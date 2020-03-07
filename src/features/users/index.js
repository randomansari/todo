import User from './User';
import { connect } from 'react-redux';

const mapStateToProps = ({addTodo}) => ({
  users: addTodo.users,
});
const mapDispatchToProps = dispatch => ({
    addToFav: (data) => {
      dispatch(()=>{});
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(User);