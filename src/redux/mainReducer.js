import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn298097Reducer from '../features/SignIn298097/redux/reducers'
import SignUp1197931Reducer from '../features/SignUp1197931/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn298097: SignIn298097Reducer,
SignUp1197931: SignUp1197931Reducer,

});