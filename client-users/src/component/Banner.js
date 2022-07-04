import React from "react";
import { Container } from "react-bootstrap";

export default function Banner() {
  return (
    <Container style={{height: '600px'}} className="my-5">
      <div className="row">
        <div className="col-6 my-auto">
            <div className="mx-5">
                <h2>
                Order Your favourite foods from Burger Kong
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo. </p>
            </div>
        </div>
        <div className="col-6 my-auto">
          <img className="mx-3 my-3" style={{borderRadius: '20px', height: '500px', width: '450px'}} src={'https://images.unsplash.com/photo-1633424234673-c8cd0f4df77b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} />
        </div>
      </div>
    </Container>
  );
}
