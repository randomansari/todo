import Nav from './Nav';
import { connect } from 'react-redux';

const mapStateToProps = ({navBar}) => ({
    navBarItems: navBar.navBarItems
});
const mapDispatchToProps = dispatch => ({
    addToFav: (data) => {
      dispatch(()=>{});
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Nav);