const initialState = {}

const filtersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "GET_FILTERS":
            return {
                ... state,
                filtersData: action.payload,
                loading: false
            } 

        default: 
            return state    
    }
}

export default filtersReducer;