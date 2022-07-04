export const getFoods = () => {
  return async (dispatch) => {
    try {
      const foodsRes = await fetch("http://myburgerkong.herokuapp.com/items", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
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

export const addFoods = (payload, navigate) => {
  return async (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("access_token", localStorage.getItem("access_token"));

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", payload.name);
    urlencoded.append("description", payload.description);
    urlencoded.append("price", payload.price);
    urlencoded.append("imgUrl", payload.imgUrl);
    urlencoded.append("categoryId", payload.categoryId);
    urlencoded.append("ingredient", payload.ingredient);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };
    try {
      const addFoods = await fetch("http://myburgerkong.herokuapp.com/items", requestOptions);
      if (addFoods) {
        navigate("/", { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const delFoods = (payload) => {
  return async (dispatch) => {
    try {
      const deleteFood = await fetch("http://myburgerkong.herokuapp.com/items/" + payload, {
        method: "DELETE",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (deleteFood) {
          dispatch(getFoods())
        }
    } catch (err) {
      console.log(err);
    }
  };
};


export const editFood = (payload) => {
    return async (dispatch) => {
      var myHeaders = new Headers();
      myHeaders.append("access_token", localStorage.getItem("access_token"));
      var urlencoded = new URLSearchParams();
      urlencoded.append("name", payload.name);
      urlencoded.append("description", payload.description);
      urlencoded.append("price", payload.price);
      urlencoded.append("imgUrl", payload.imgUrl);
      urlencoded.append("categoryId", payload.categoryId);
      urlencoded.append("ingredient", payload.ingredient);
  
      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: urlencoded,
      };
      try {
        const editFood = await fetch("http://myburgerkong.herokuapp.com/items/" + payload.id, requestOptions);
        dispatch({
            type: 'EDIT_FOOD_SUCCESS',
            payLoad: 'closeModal'
        })
        setTimeout(() => {
            dispatch({
                type: 'EDIT_FOOD_SUCCESS',
                payLoad: ''
            })
        }, 2000);

        if(editFood) {
            dispatch(getFoods())
        }
      } catch (err) {
        console.log(err);
      }
    };
  };