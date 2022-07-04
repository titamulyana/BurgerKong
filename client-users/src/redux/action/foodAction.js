export const getFoods = () => {
    return async (dispatch) => {
      try {
        const foodsRes = await fetch("http://myburgerkong.herokuapp.com/pub", {
        });
        const foods = await foodsRes.json();
        dispatch({
          type: "SET_FOODS",
          payLoad: foods.data,
        });
      } catch (err) {
        console.log(err);
      }
    };
  };