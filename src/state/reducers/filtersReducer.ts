import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    name: '',
    especie: '',
    genero: '',
    status: '',
    favorito: false,
    loading: true
}

const filtersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload.filters };
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