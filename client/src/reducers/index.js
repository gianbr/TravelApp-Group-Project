import { SEARCH_DESTINATION, DETAILS_PACKAGE } from "../actions";
const initialState = {
    destination : [],
    details: [],
};

function rootReducer(state = initialState, action){
    switch (action.type) {
        case SEARCH_DESTINATION:
            return {
                ...state,
                destination: action.payload
            };
        case DETAILS_PACKAGE: 
        return {
            ...state,
            details: action.payload
        }

        default:
            return state;
    }
};
export default rootReducer;