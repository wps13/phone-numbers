//inital state
const initialState = {
  loading: false,
  generatedData: [],
  error: " ",
  totalPages: 0
};

//reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_NUMBERS_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "GET_NUMBERS_SUCCESS":
      return {
        ...state,
        generatedData: action.payload.data,
        totalPages: action.payload.totalPages,
        loading: false
      };
    case "GET_NUMBERS_FAILURE":
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    default:
      return state;
  }
}

//actions
export const creators = {
  getNumbersRequest: (page, amount) => ({
    type: "GET_NUMBERS_REQUEST",
    payload: { page, amount }
  }),
  getNumbersSuccess: ({ data, totalPages }) => ({
    type: "GET_NUMBERS_SUCCESS",
    payload: { data, totalPages }
  }),
  getNumbersFailure: error => ({
    type: "GET_NUMBERS_FAILURE",
    payload: { error }
  })
};
