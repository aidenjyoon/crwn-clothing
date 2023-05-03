import { compose, configureStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

export const store = configureStore(rootReducer)