import { useEffect, useState } from "react";
import { Button, Modal, Form, render } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editFood } from "../redux/action/foodAction";


export default function Example({ isModal, closeModal, data }) {
  const [show, setShow] = useState(false);
  const store = useSelector(state => state)
  useEffect(() => {
      if(store.foodData.editFoodSuccess === "closeModal"){
        closeModal()
      }
  }, [store.foodData.editFoodSuccess])
  
  const [dataEdit, setDataEdit] = useState({
    id: data.id,
    name: data.name,
    description: data.description,
    price: data.price,
    imgUrl: data.imgUrl,
    categoryId: data.categoryId,
    ingredient: data.Ingredient.name
  })
  const dispatch = useDispatch();
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(editFood(dataEdit));
  };

  const handleClose = () => setShow(false);
  useEffect(() => {
    setShow(isModal);
  }, []);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h2 className="text-center">Edit Food</h2>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={(e) => setDataEdit((state) => ({ ...state, name: e.target.value }))} value={dataEdit.name} type="text" placeholder="example: Pizza" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripton</Form.Label>
            <Form.Control onChange={(e) => setDataEdit((state) => ({ ...state, description: e.target.value }))} value={dataEdit.description} type="text" placeholder="description" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control onChange={(e) => setDataEdit((state) => ({ ...state, price: e.target.value }))} value={dataEdit.price} type="number" placeholder="price" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image Url</Form.Label>
            <Form.Control onChange={(e) => setDataEdit((state) => ({ ...state, imgUrl: e.target.value }))} value={dataEdit.imgUrl} type="text" placeholder="Image Url" />
          </Form.Group>
          <Form.Select onChange={(e) => setDataEdit((state) => ({ ...state, categoryId: e.target.value }))} value={dataEdit.categoryId} aria-label="Default select example">
            <option>Category</option>
            <option value="1">Food</option>
            <option value="2">Drinks</option>
            <option value="3">Snack</option>
          </Form.Select>
          <Form.Group className="mb-3">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control onChange={(e) => setDataEdit((state) => ({ ...state, ingredient: e.target.value }))} value={dataEdit.ingredient} type="text" placeholder="Ingredient" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={submitHandle}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
