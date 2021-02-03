const initialState = {
  items: [],
  isLoading: true,
};
const messages = (state = initialState, action) => {
  switch (action.type) {
    case "MESSAGES:SET_MESSAGES":
      return {
        ...state,
        items: action.payload,
      };
    case "MESSAGES:SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default messages;
