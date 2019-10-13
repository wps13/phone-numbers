import { creators, reducer } from "../../store/redux";

const numbers = [
  { number: 555000009, cost: "1.09" },
  { number: 555000010, cost: "1.10" }
];

describe("actions", () => {
  it("should create an action to request the numbers", () => {
    const expectedAction = {
      type: "GET_NUMBERS_REQUEST"
    };
    expect(creators.getNumbersRequest()).toEqual(expectedAction);
  });

  it("should create an action to save the numbers", () => {
    const expectedAction = {
      type: "GET_NUMBERS_SUCCESS",
      payload: { data: numbers }
    };

    expect(creators.getNumbersSuccess(numbers)).toEqual(expectedAction);
  });
  it("should create an action to save the error", () => {
    const error = "Não foi possível recuperar os números disponíveis";

    const expectedAction = {
      type: "GET_NUMBERS_FAILURE",
      payload: { error }
    };

    expect(creators.getNumbersFailure(error)).toEqual(expectedAction);
  });
});

describe("reducer", () => {
  it("should return the initial state", () => {
    const expectedState = {
      loading: false,
      generatedData: null,
      error: null
    };
    expect(reducer(undefined, {})).toEqual(expectedState);
  });
  it("should handle GET_NUMBERS_REQUEST", () => {
    const expectedState = {
      generatedData: null,
      error: null,
      loading: true
    };
    expect(reducer(undefined, { type: "GET_NUMBERS_REQUEST" })).toEqual(
      expectedState
    );
  });
  it("should handle GET_NUMBERS_SUCCESS", () => {
    const expectedState = {
      generatedData: numbers,
      error: null,
      loading: false
    };
    expect(
      reducer(undefined, {
        type: "GET_NUMBERS_SUCCESS",
        payload: { data: numbers }
      })
    ).toEqual(expectedState);
  });
  it("should handle GET_NUMBERS_FAILURE", () => {
    const errorMsg = "Erro ao recuperar os núms. disponíveis.";
    const expectedState = {
      generatedData: null,
      error: errorMsg,
      loading: false
    };
    expect(
      reducer(undefined, {
        type: "GET_NUMBERS_FAILURE",
        payload: { error: errorMsg }
      })
    ).toEqual(expectedState);
  });
});
