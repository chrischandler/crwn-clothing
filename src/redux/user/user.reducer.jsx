// Set the initial state
const INITIAL_STATE = {
  currentUser: null,
};

// The User Reducer, note that state takes a default in case it is null
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
