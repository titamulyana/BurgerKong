export const registerUsers = (payload, navigate) => {
  return async (dispatch) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("username", payload.username);
    urlencoded.append("email", payload.email);
    urlencoded.append("password", payload.password);
    urlencoded.append("phoneNumber", payload.phoneNumber);
    urlencoded.append("address", payload.address);
    var requestOptions = {
      method: "POST",
      body: urlencoded,
    };
    try {
      const register = await fetch("https://myburgerkong.herokuapp.com/users/register", requestOptions);
      dispatch({
        type: "SET_USERS",
        payLoad: register,
      });
      if (register) {
        navigate("/login", { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const loginUsers = (payload, navigate) => {
  return async (dispatch) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("email", payload.email);
    urlencoded.append("password", payload.password);
    var requestOptions = {
      method: "POST",
      body: urlencoded,
    };

    fetch("https://myburgerkong.herokuapp.com/users/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("access_token", result.access_token);
        navigate("/", { replace: true });
      })
      .catch((error) => console.log("error", error));

  };
};


