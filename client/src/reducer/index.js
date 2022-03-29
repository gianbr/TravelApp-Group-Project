const inicialState = {
    detail: [],
};

export default function rootReducer(state = inicialState, action) {
    // eslint-disable-next-line default-case
    switch (action) {
        case "GET_DETAILS":
            return {
                ...state,
                detail: action.payload,
            };
    }
}