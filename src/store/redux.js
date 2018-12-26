//inital state
const initialState = {
    loading:false,
    generatedData:null,
    error:null
}

//reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_NUMBERS_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "GET_NUMBERS_SUCCESS":
            return {
                ...state,
                generatedData: action.payload.data,
                loading:false
            }
        case "GET_NUMBERS_FAILURE":
            return {
                ...state,
                error: action.payload.error,
                loading:false
            }
        default:
            return state
       }
}

//actions
export const creators = {
    getNumbersRequest : () => ({
        type: "GET_NUMBERS_REQUEST"
    }),
    getNumbersSuccess : data => ({
        type:"GET_NUMBERS_SUCCESS",
        payload: {data}
    }),
    getNumbersFailure : error =>({
        type:"GET_NUMBERS_FAILURE",
        payload:{ error }
    })
}