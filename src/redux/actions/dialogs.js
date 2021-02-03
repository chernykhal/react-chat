import axios from "axios";

export const fetchDialogs = () => (dispatch) => {
  axios.get(`/dialogs`).then(({ data }) => {
    dispatch(setDialogs(data));
    dispatch(setLoading(false));
  });
};

export const setDialogs = (dialogs) => ({
  type: "DIALOGS:SET_DIALOGS",
  payload: dialogs,
});

export const setLoading = (loading) => ({
  type: "DIALOGS:SET_LOADING",
  payload: loading,
});

export const setActiveDialog = (dialog) => ({
  type: "DIALOGS:SET_ACTIVE_DIALOG",
  payload: dialog,
});
