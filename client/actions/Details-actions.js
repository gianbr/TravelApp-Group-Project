import axios from "axios"

export function getDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/getPlains/${id}`);
            return dispatch({
                type: "GET_DETAILS",
                payload: json.data,
            });
        } catch (e) {
            console.log(e);
        }
    }; 
}