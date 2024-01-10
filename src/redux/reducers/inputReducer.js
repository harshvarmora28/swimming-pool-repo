const INITIAL_STATE = {
  value : '',
}

const inputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_VALUE':
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
};

export default inputReducer;
