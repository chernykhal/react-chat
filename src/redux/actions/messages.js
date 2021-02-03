import axios from "axios";

export const fetchMessagesFromDialog = (dialog) => (dispatch) => {
  dispatch(setLoading(true));
  axios.get(`/messages?dialog=${dialog}`).then(({ data }) => {
    dispatch(setMessages(data));
    dispatch(setLoading(false));
  });
};

export const setLoading = (loading) => ({
  type: "MESSAGES:SET_LOADING",
  payload: loading,
});

export const setMessages = (messages) => ({
  type: "MESSAGES:SET_MESSAGES",
  payload: messages,
});
