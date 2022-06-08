import { applyMiddleware,legacy_createStore as createStore,combineReducers} from "redux";
import thunk from "redux-thunk";
import crudReducer from "./reducers/crudReducer";

export const reducers = combineReducers({
    crud: crudReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
export default store;