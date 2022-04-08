import axios from 'axios';

export const fetchUserFromAPI = (pageNumber) => {
  const source = axios.CancelToken.source();
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const userListData = await axios.get(
        `${process.env.REACT_APP_USER_API}=${pageNumber}`,
        {
          cancelToken: source.token,
        }
      );
      dispatch(fetchUserSuccess(userListData.data));
      return source.cancel();
    } catch (error) {
      if (axios.isCancel(error)) console.log('caught cancel');
      else {
        const errMsg = error.message;
        dispatch(fetchUserFailed(errMsg));
      }
    }
  };
};

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST',
  };
};

export const fetchUserFailed = (errMsg) => {
  return {
    type: 'FETCH_USER_FAILED',
    payload: errMsg,
  };
};

export const fetchUserSuccess = (userListData) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: {
      userListData,
    },
  };
};
export const removeEmployee = (id) => {
  return {
    type: 'REMOVE_EMPLOYEE',
    payload: id,
  };
};

export const mouseEnter = (profileImg, empName, empEmail, isEmpActive) => {
  return {
    type: 'MOUSE_ENTER',
    payload: {
      empName: empName,
      empEmail: empEmail,
      profileImg: profileImg,
      empStatus: isEmpActive,
    },
  };
};

export const mouseLeave = () => {
  return {
    type: 'MOUSE_LEAVE',
  };
};
