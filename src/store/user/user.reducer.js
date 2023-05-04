import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

// CHANGES NEEDS TO BE MADE WHEN USING REDUX
// 1) because we don't have hook to call userReducer anymore, need to initiate as the default value. Hence, 'state = INITIAL_STATE'
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    // 2) reducers in redux will receive all action that is dispatched in root-reducer.
    // as a result need to return default state.
    default:
      return state;
  }
};
