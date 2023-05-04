import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// logger:
// 1.  see what the state looks like before and after an action is dispatched
// 2. what the action is
// 3. how, in turn, the state looks after the action
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

// holds the state, and when a new action arrives runs the dispatch -> middleware -> reducers pipeline,
// and notifies subscribers when the state is replaced by a new one.
export const store = createStore(rootReducer, undefined, composedEnhancers);
