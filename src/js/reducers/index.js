import { 
    ADD_ARTICLE,
    SET_TOKEN, LOGIN_USER, LOGOUT_USER,
    SET_MDB_ID_VIEW
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
            return Object.assign({}, state, {user: action.user});
        case LOGOUT_USER:
            return Object.assign({}, state, {token: action.token})       
        default:
            return state;    
    }
}

let uiInitialState = {
    mdbId: null
}
function uiReducer(state = uiInitialState, action) {
    switch(action.type) {
        case SET_MDB_ID_VIEW:
            return Object.assign({}, state, {mdbId: action.mdbId}); 
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
    user: userReducer,
    ui: uiReducer
});

export default createRootReducer;