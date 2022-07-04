const initialState = {
    foodData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
      case "SET_FOODS":
        return {
          ...state,
          foodData: action.payLoad,
        }
      default:
        return state;
    }
  };