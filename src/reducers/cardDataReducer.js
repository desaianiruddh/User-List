const intialData = {
  data: {},
  isCardVisible: false,
};

const cardDataReducer = (state = intialData, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'MOUSE_ENTER': {
      return {
        ...state,
        data: payload,
        isCardVisible: true,
      };
    }
    case 'MOUSE_LEAVE': {
      return {
        ...state,
        isCardVisible: false,
        data: {},
      };
    }
    default:
      return state;
  }
};

export default cardDataReducer;
