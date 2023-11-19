import { createStore, combineReducers} from 'redux';
import { appReducer } from "./redux/app.reduce";

const rootReducer = combineReducers({
  app: appReducer
});

export const store = createStore(rootReducer);
