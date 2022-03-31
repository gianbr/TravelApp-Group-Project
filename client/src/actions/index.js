export const SEARCH_DESTINATION = 'SEARCH_DESTINATION';
const axios = require('axios');


export const searchDestination = (name) => async (dispatch) => {
    let response = await  axios.get('?name=' + name);
    return dispatch({
        type: SEARCH_DESTINATION,
        payload: response.data,
    });
};