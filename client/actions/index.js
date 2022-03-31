import axios from "axios"


//traigo todos los paquetes

export function getPlains() {
    return async function(dispatch){
        var json = await axios.get("http://localhost:8800/getPlains");
        return dispatch({
            type: "GET_PLAINS",
            payload: json.data
        })
    }

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
        type:"ORDER_BY_PRICE", 
        payload
    }
}

// Ordenamiento por Estrellas o Puntuacion


export function orderByScore(payload) {
    return {
        type:"ORDER_BY_SCORE", 
        payload
    }
}

