import { compose, configureStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// holds the state, and when a new action arrives runs the dispatch -> middleware -> reducers pipeline,
// and notifies subscribers when the state is replaced by a new one.
export const store = configureStore(rootReducer, undefined, composedEnhancers);
