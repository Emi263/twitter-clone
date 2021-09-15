export default (state, actions) => {
  if (actions.type === "CHANGE") {
    return {
      ...state,
      user: actions.payload,
    };
  }
};
