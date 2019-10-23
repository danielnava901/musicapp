/*
js/actions/index.js
*/

import {
    ADD_ARTICLE,
    SET_TOKEN,
    LOGIN_USER,
    LOGOUT_USER
} from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function setToken(token) {
    sessionStorage.setItem("token", token ? token.token : null);
    return {type: SET_TOKEN, token};
};

export function loginUser(user) {
    console.log("Login user:", user);
    
    return {
        type: LOGIN_USER,
        user
    };
}

export function logout(user) {
    console.log("logout user", user);
    return {
        type: LOGOUT_USER,
        user
    };
}