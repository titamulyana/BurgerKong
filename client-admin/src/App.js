import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Card, Col, secondary, primary, h, success, mx, Row } from "react-bootstrap";
import { Routes, Route, useParams } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import Register from "./views/Register";
import AddFood from "./views/AddFood";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="add-food" element={<AddFood/>}/>
      </Routes>
    </div>
  );
}

export default App;
