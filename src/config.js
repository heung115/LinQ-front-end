const BASE_URL = "http://192.168.137.1:8080/api/v1";
//const BASE_URL = "";

export const API = {
    LOGIN: `${BASE_URL}/auth/sign-in`,
    SIGNUP: `${BASE_URL}/auth/sign-up`,
    WRITEBOARD: `${BASE_URL}/board/create`,
    BOARDLIST: `${BASE_URL}/boardlist`,
    BOARDLISTALL: `${BASE_URL}/board/all-select`,
    BOARDEDATIL: `${BASE_URL}/board`,
};
