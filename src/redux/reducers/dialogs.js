const initialState = {
  items: [],
  activeDialog: null,
  isLoading: true,
};
const dialogs = (state = initialState, action) => {
  switch (action.type) {
    case "DIALOGS:SET_DIALOGS":
      return {
        ...state,
        items: action.payload,
      };
    case "DIALOGS:SET_ACTIVE_DIALOG":
      return {
        ...state,
        activeDialog: action.payload,
      };
    case "DIALOGS:SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default dialogs;
