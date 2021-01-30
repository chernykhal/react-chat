const initialState = {
  items: [],
};
const dialogs = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DIALOGS":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default dialogs;
