import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUsers } from "../redux/action/userAction";

const divStyles = {
  Page: {
    height: "100vh",
    backgroundImage: `url("https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80")`,
  },
  Card: {
    backgroundColor: "rgb(246, 251, 244, 0.8)",
  },
};

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/", { replace: true });
    }
  }, [localStorage.getItem("access_token")]);

  const submitHandle = (e) => {
    e.preventDefault();
    if(login.email && login.password) {
      dispatch(loginUsers(login, navigate));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={divStyles.Page}>
      <div className="card py-3 px-4" style={divStyles.Card}>
        <Form onClick={submitHandle}>
          <h2 className="text-center">Login</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={(e) => setLogin((state) => ({ ...state, email: e.target.value }))} type="email" placeholder="your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => setLogin((state) => ({ ...state, password: e.target.value }))} type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="warning" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
