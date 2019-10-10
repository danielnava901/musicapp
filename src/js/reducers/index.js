import { 
    ADD_ARTICLE,
    SET_TOKEN
} from "../constants/action-types";

const initialState = {
    articles: [],
    is_logged: false,
    token: null
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });
        case SET_TOKEN:
            return Object.assign({}, state, {token: action.token});
        default:
            return state;    
    }
};

export default rootReducer;