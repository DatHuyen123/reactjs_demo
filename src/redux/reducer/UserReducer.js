import { GET_LIST_USER } from "../const/ActionType";

const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  const copyState = { ...state };
  switch (action.type) {
    case GET_LIST_USER: {
      copyState.users = action.users;
      return copyState;
    }
    default:
      return copyState;
  }
};
