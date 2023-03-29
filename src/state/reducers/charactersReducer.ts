const initialState = {
    characters: [],
    loading: true
}

const charactersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "getUsers":
            return {
                ... state,
                charactersData: action.payload,
                loading: false
            } 

        default: 
            return state    
    }
}

export default charactersReducer;