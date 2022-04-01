export const SEARCH_DESTINATION = 'SEARCH_DESTINATION';
export const DETAILS_PACKAGE = 'DETAILS_PACKAGE';
const axios = require('axios');


export const searchDestination = (name) => async (dispatch) => {
    let response = await  axios.get('?name=' + name);
    return dispatch({
        type: SEARCH_DESTINATION,
        payload: response.data,
    });
};


export const DetailsPackage = (id) => async (dispatch) => {
    let d = await axios.get(+ id);
    return dispatch({
        type: DETAILS_PACKAGE,
        payload: d.data,
    });
};