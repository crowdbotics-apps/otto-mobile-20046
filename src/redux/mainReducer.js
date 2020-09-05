import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp1197931Reducer from '../features/SignUp1197931/redux/reducers'
import Dashboard1197842Reducer from '../features/Dashboard1197842/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp1197931: SignUp1197931Reducer,
Dashboard1197842: Dashboard1197842Reducer,

});