const initialState = {
  foods: [],
  addFoodSuccess: '',
  editFoodSuccess: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_FOODS":
      return {
        ...state,
        foods: action.payLoad,
      }
    case "ADD_FOOD_SUCCESS":
      return {
        ...state,
        addFoodSuccess: action.payLoad,
      };
    case "EDIT_FOOD_SUCCESS":
      return {
        ...state,
        editFoodSuccess: action.payLoad,
      };
    default:
      return state;
  }
};
