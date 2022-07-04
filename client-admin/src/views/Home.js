import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

import React from "react";
import Layout from "../components/Layout";
import TableHome from "../components/TableHome";
import { useSelector } from "react-redux";


export default function Home() {
  const store = useSelector(state => state)
  useEffect(() => {
    
  }, [store.foodData.foods])
  
  return (
    <Layout>
      <TableHome/>
    </Layout>
  );
}
