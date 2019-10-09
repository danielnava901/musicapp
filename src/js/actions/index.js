import {
    ADD_ARTICLE,
    SET_TOKEN
} from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function setToken(token) {
    return {type: SET_TOKEN, token};
};