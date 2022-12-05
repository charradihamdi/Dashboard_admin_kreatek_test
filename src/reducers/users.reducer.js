import { GET_USERS } from "../actions/users.actions";

const initialState = {};

export default function usersReducer(state = initialState, action) {
  console.log("reducer", action.payload);
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
}
