import Product from "../components/Product";
import data from "../data";
import React from "react";

export default function HomeScreen() {
  return (
    <div>
      <div className="row center">
        {data.products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
