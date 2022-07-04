import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {useNavigate} from 'react-router-dom'
import { Button, Modal, Form, Row, Table, card, Navbar, Container, NavDropdown, FormControl, Nav } from "react-bootstrap";
import { addFoods } from "../redux/action/foodAction";
import { useDispatch, useSelector } from "react-redux";
export default function AddFood() {
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: 0,
    imgUrl: "",
    categoryId: 0,
    ingredient: "",
  });

  const selector = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(selector.foodData.addFoodSuccess){
      navigate('/', {replace: true})
    }
  }, [])
  
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(addFoods(input, navigate));
  };
  return (
    <Layout>
      <>
        <div className="d-flex justify-content-center align-items-center">
          <div className="card w-100 py-3 px-4 mx-3 my-5">
            <Form onSubmit={submitHandle}>
              <h2 className="text-center">Add Food</h2>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => setInput((state) => ({ ...state, name: e.target.value }))} type="text" placeholder="example: Pizza" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descripton</Form.Label>
                <Form.Control onChange={(e) => setInput((state) => ({ ...state, description: e.target.value }))} type="text" placeholder="description" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control onChange={(e) => setInput((state) => ({ ...state, price: e.target.value }))} type="number" placeholder="price" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image Url</Form.Label>
                <Form.Control onChange={(e) => setInput((state) => ({ ...state, imgUrl: e.target.value }))} type="text" placeholder="Image Url" />
              </Form.Group>
              <Form.Select onChange={(e) => setInput((state) => ({ ...state, categoryId: e.target.value }))} aria-label="Default select example">
                <option>Category</option>
                <option value="1">Food</option>
                <option value="2">Drinks</option>
                <option value="3">Snack</option>
              </Form.Select>
              <Form.Group className="mb-3">
                <Form.Label>Ingredients</Form.Label>
                <Form.Control onChange={(e) => setInput((state) => ({ ...state, ingredient: e.target.value }))} type="text" placeholder="Ingredient" />
              </Form.Group>
              <Button variant="warning" type="submit">
                Add
              </Button>
            </Form>
          </div>
        </div>
      </>
    </Layout>
  );
}
