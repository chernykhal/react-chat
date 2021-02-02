const initialState = {
  items: [],
  activeDialog: null,
};
const dialogs = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DIALOGS":
      return {
        ...state,
        items: action.payload,
      };
    case "SET_ACTIVE_DIALOG":
      return {
        ...state,
        activeDialog: action.payload,
      };
    default:
      return state;
  }
};

export default dialogs;
