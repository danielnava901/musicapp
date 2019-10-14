import { 
    ADD_ARTICLE,
    SET_TOKEN
} from "../constants/action-types";
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';


let articleInitialState = [];
function articleReducer(state = articleInitialState, action) {
    switch(action.type) {
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.concat(action.payload)
            });
        default:
            return state;    
    }
};

let userInitialState = {
    token: null,
    is_logged: false
};
function userReducer(state = userInitialState, action) {
    switch(action.type) {
        case SET_TOKEN:
            return Object.assign({}, state, {token: action.token});
        default:
            return state;    
    }
}

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    articles: articleReducer,
    user: userReducer
});

export default createRootReducer;