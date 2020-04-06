import { combineReducers } from 'redux';
import sidemenu from './sidemenu';

const rootReducer = combineReducers({
   sidemenu
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
