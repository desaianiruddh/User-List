const initialData = {
  empListData: [],
  totalPages: 0,
};

const empListReducer = (state = initialData, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_USER_SUCCESS': {
      return {
        ...state,
        totalPages: payload.userListData.total_pages,
        empListData: [...payload.userListData.data],
      };
    }
    case 'FETCH_USER_FAILED': {
      console.log(payload);
      return {
        ...state,
      };
    }
    case 'REMOVE_EMPLOYEE':
      return {
        ...state,
        empListData: state.empListData.filter(
          (empInfo) => payload !== empInfo.id
        ),
      };
    default:
      return state;
  }
};

export default empListReducer;
