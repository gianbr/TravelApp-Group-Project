import { SEARCH_DESTINATION } from "../actions";
const initialState = {
    destination : [],
};

function rootReducer(state = initialState, action){
    switch (action.type) {
        case SEARCH_DESTINATION:
            return {
                ...state,
                destination: action.payload
            };
        default:
            return state;
    }
};
export default rootReducer;