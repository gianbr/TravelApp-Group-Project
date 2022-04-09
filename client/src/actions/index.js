
const axios = require('axios');

export function searchDestination(name) {
    return async function (dispatch) {
        let response = await axios.get('http://localhost:8800/getplains?location=' + name);
        console.log('alba',response.data)
        return dispatch({
            type: "SEARCH_DESTINATION",
            payload: response.data,
        });
    };
}

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
        //console.log('juth', response.data)
        return dispatch({
            type: "GET_DETAIL",
            payload: response.data,
        });
    }
};


export function postPlain(data) {
    return async function (dispatch) {
      let response = await axios.post("http://localhost:8800/postPlains", data);
      //console.log('agus', response.data)
      return dispatch({
        type: "POST_PLAIN",
        payload: response.data,
      });
    };
  }

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

        export function clearState(payload) {
            return {
                type: "CLEAR_STATE",
                payload
            }
        }
export function getPlainsDestacados() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:8800/getplains');
        //console.log(json.data)
        return dispatch({
            type: "GET_PLAINS_DESTACADOS",
            payload: json.data
        })
    }

}

    export function signin(data) {
        return async function (dispatch) {
            let response = await axios.post('http://localhost:8800/auth/signin', data);
            console.log('juthIn', response.data)
            return dispatch({
                type: "SIGNIN",
                payload: response.data,
            });
        }
            
    };

    export function signup(data) {
    return async function (dispatch) {
        let response = await axios.post('http://localhost:8800/auth/signup',data);
        console.log('juthUP', response.data)
        return dispatch({
            type: "SIGNUP",
            payload: response.data,
        });
    }
};



