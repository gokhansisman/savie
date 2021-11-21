export const login = () => {
  return (dispatch) => {
    return dispatch({
      type: "LOGIN",
      payload: {
        isLogin: localStorage.isLogin,
      },
    });
  };
};
