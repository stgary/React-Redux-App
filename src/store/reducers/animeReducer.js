const initialState = {
    characters: [],
    isFetching: false,
    error: ''
}


export const animeReducer = (state = initialState, action) => {

    console.log(state);
    switch(action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                isFetching: true,
            }
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                characters: action.payload,
                isFetching: false,
                error: ''
            }
        case 'ERROR':
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}