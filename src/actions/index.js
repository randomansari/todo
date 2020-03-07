
import ENDSPOINT from '../constant/ApiEndpoint';

const setUser = (data) => {
    return {
      type: 'SET_USERS',
      data
    }
};

export {
    setUser,
};