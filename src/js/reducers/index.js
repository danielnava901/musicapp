import { 
    ADD_ARTICLE,
    SET_TOKEN, LOGIN_USER
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
    is_logged: false,
    info: null
};
function userReducer(state = userInitialState, action) {
    switch(action.type) {
        case SET_TOKEN:
            return Object.assign({}, state, {token: action.token});
        case LOGIN_USER:
            return Object.assign({}, state, {user: action.user})    
        default:
            return state;    
    }
}

/**
 * 
 * @param {*} history 
 */
const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    articles: articleReducer,
    user: userReducer
});

export default createRootReducer;