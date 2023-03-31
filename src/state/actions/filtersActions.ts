interface IFilters {
    name: string,
    especie: string,
    genero: string,
    status: string,
    favorito: boolean,
}

export const getFilters = (filters: IFilters) => {
    return {
        type: "GET_FILTERS",
        payload: filters
    }
}

