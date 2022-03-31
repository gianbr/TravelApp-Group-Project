const initalState = {
    plains : [],
    plainsCopy : [],
  
}

function rootReducer(state = initalState, action) {
    switch(action.type) {
            case "GET_PLAINS": 
                return {
                    ...state,
                    plains : action.payload,
                    plainsCopy : action.payload
                }


            case "FILTER_BY_PROVINCE":
                const allPlains = state.plainsCopy
                const provinceFilter = action.payload === "All" 
                ? allPlains
                : allPlains.filter(e=> e.location === action.payload)
                return {
                    ...state,
                    plains: provinceFilter
                }

            case "ORDER_BY_PRICE":
            
            const sortByPrice = action.payload === "asc"
            ? state.plains.slice().sort(function(a,b) {

                if(a.price > b.price) {
                    return 1;
                }
                if(b.price > a.price) {
                    return -1;
                }
                return 0
            }) 
            : state.plains.slice().sort(function(a,b) {
                if(a.price > b.price) {
                    return -1;
                }
                if(b.price > a.price) {
                    return 1;
                }
                return 0
            })
            return{
                ...state,
                plains : sortByPrice
            }
            case "ORDER_BY_SCORE":
            
                const sortByScore = action.payload === "asc"
                ? state.plains.slice().sort(function(a,b) {
    
                    if(a.score > b.score) {
                        return 1;
                    }
                    if(b.score > a.score) {
                        return -1;
                    }
                    return 0
                }) 
                : state.plains.slice().sort(function(a,b) {
                    if(a.score > b.score) {
                        return -1;
                    }
                    if(b.score > a.score) {
                        return 1;
                    }
                    return 0
                })
                return{
                    ...state,
                    plains : sortByScore
                }
            default : 
                return state 
    }
}

export default rootReducer