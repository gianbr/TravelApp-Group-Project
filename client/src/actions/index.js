
const axios = require('axios');


export const searchDestination = (name) => async (dispatch) => {
    let response = await  axios.get('?name=' + name);
    return dispatch({
        type: "SEARCH_DESTINATION",
        payload: response.data,
    });
};

export function getPlains() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:8800/getplains');
        //console.log(json.data)
        return dispatch({
            type: "GET_PLAINS",
            payload: json.data
        })
    }
};

export function getDetailId(id) {
    return async function (dispatch) {
        let response = await axios.get('http://localhost:8800/' + id);
        console.log('juth', response.data)
        return dispatch({
            type: "GET_DETAIL",
            payload: response.data,
        });
    }
};


        // filtrado por provincia

        export function filterByProvince(payload) {
            return {
                type: "FILTER_BY_PROVINCE",
                payload
            }
        }

        // Ordenamiento por precio

        export function orderByPrice(payload) {
            return {
                type: "ORDER_BY_PRICE",
                payload
            }
        }

        // Ordenamiento por Estrellas o Puntuacion


        export function orderByScore(payload) {
            return {
                type: "ORDER_BY_SCORE",
                payload
            }
        }
