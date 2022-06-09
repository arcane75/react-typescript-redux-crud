import { ActionType } from '../actionType/actionType';
import { Action } from "../actions/actions";

const initialState = {
    posts: [],
    post: {},

};
const crudReducer = (state = initialState, action: Action) => {

    switch (action.type) {
        case ActionType.GET:

            return {
                ...state,
                posts: action.payload,
            }
        case ActionType.DELETE:
            console.log('action', action);
            return {
                ...state,
            }

        case ActionType.POST:
            return {
                ...state,
                posts: action.payload,
            }
        case ActionType.GET_SINGLE:
            return {
                ...state,
                post: action.payload,
            }
        case ActionType.UPDATE:
            return {
                ...state,
                post: action.payload,
            }

        default:
            return state;

    }

}

export default crudReducer;
