const initialState = { count: 0 };
const counterReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "substract":
      return { count: state.count - 1 };
    case "addByAmount":
      return { count: state.count + action.payload };
    case "substractByAmount":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};
export { initialState, counterReducer };
