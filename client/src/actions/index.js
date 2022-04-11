const axios = require("axios");


export function searchDestination(name) {
	return async function (dispatch) {
		let response = await axios.get(
			"http://localhost:8800/getplains?location=" + name
		);
		return dispatch({
			type: "SEARCH_DESTINATION",
			payload: response.data,
		});
	};
}

export function getPlains() {
	return async function (dispatch) {
		var json = await axios.get("http://localhost:8800/getplains");
		//console.log(json.data)
		return dispatch({
			type: "GET_PLAINS",
			payload: json.data,
		});
	};
}

export function getDetailId(id) {
	return async function (dispatch) {
		let response = await axios.get("http://localhost:8800/getDetails/" + id);
		//console.log('juth', response.data)
		return dispatch({
			type: "GET_DETAIL",
			payload: response.data,
		});
	};
}

export function postPlain(data) {
    return async function (dispatch) {
      let response = await axios.post("http://localhost:8800/postPlains", data, {headers: {Authorization: "Bearer " + localStorage.getItem('token')}});
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
		payload,
	};
}

// Ordenamiento por precio

export function orderByPrice(payload) {
	return {
		type: "ORDER_BY_PRICE",
		payload,
	};
}

// Ordenamiento por Estrellas o Puntuacion

export function orderByScore(payload) {
	return {
		type: "ORDER_BY_SCORE",
		payload,
	};
}

export function clearState(payload) {
	return {
		type: "CLEAR_STATE",
		payload,
	};
}
export function getPlainsDestacados() {
	return async function (dispatch) {
		var json = await axios.get("http://localhost:8800/getplains");
		//console.log(json.data)
		return dispatch({
			type: "GET_PLAINS_DESTACADOS",
			payload: json.data,
		});
	};
}

    export function signin(data) {
        return async function (dispatch) {
            try {
                let response = await axios.post('http://localhost:8800/auth/signin', data);
                window.localStorage.setItem('token', response.data.token);
                window.localStorage.setItem('user', response.data.username);
                window.localStorage.setItem('id', response.data.id);
				window.localStorage.setItem('test', JSON.stringify(response.data));
                return dispatch({
                    type: "SIGNIN",
                    payload: response.data,
                }, window.location.href = '/'
			);

            } catch (error) {
                console.log(error)
                return alert('Usuario o contraseña incorrectos')
            }
                
            }
        }
            
    

    export function signup(data) {
    	return async function (dispatch) {
        	try {
				let response = await axios.post('http://localhost:8800/auth/signup',data);
        	//console.log('juthUP', response.data)
				return dispatch({
					type: "SIGNUP",
					payload: response.data,
					}, window.location.href = '/login'
				);
			} catch (error) {
				alert('Credenciales en uso')
			}
    	};
	};

export const Logout = () => {
	return (dispatch) => {
	  	  dispatch({
		type: "LOGOUT",
	  });
  
	};
};

export const addItem = (item) => ({
	type: "ADD_ITEM",
	payload: item,
});

export const removeItem = (item) => ({
	type: "REMOVE_ITEM",
	payload: item,
})
