import callAPI from "../../utils/ApiCaller";
import * as Types from "./../const/ActionType";

// get list user
export const fetchUsers = (users) => {
  return {
    type: Types.GET_LIST_USER,
    users,
  };
};

export const fetchUsersRequest = () => {
  return (dispatch) => {
    return callAPI("api/user/get-all", "GET", null).then((res) => {
      if (res.data) {
        dispatch(fetchUsers(res.data));
      } else {
        dispatch(fetchUsers({}));
      }
    });
  };
};