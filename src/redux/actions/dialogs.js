import axios from "axios";

export const fetchDialogs = () => (dispatch) => {
  axios.get(`/dialogs`).then(({ data }) => {
    dispatch(setDialogs(data));
  });
};

export const setDialogs = (dialogs) => ({
  type: "SET_DIALOGS",
  payload: dialogs,
});

export const setActiveDialog = (dialog) => ({
  type: "SET_ACTIVE_DIALOG",
  payload: dialog,
});
