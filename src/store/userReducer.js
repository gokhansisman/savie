const initialState = {
  isLogin: localStorage.isLogin,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: action.payload.isLogin,
      };
    default:
      return state;
  }
};
export default reducer;
