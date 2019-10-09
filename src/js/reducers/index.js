import { ADD_ARTICLE } from "../constants/action-types";

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
            })
        default:
            return state;    
    }
};

export default rootReducer;