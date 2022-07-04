import React from "react";
import { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import CardItem from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../redux/action/foodAction";

export default function () {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  useEffect(() => {
    dispatch(getFoods());
  }, []);
  let data = store.foodData.foodData
  return (
    <Container style={{ backgroundColor: "rgb(248, 236, 209)", borderRadius: "20px" }}>
      <div className="py-4 px-4">
        <div className="">
          <h2>Explore Our Foods</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
          </p>
        </div>
        <div className="row mx-auto">
          {data.map((el)=> {
            return (
              <CardItem  data={el} key={el.id} />
            )
          })}
        </div>
      </div>
    </Container>
  );
}
