import React from "react";
import items from "../data";
import { Card } from "./Card";

export const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {items.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          toppings={item.toppings}
          image={item.image}
          price={item.price}
          id={item.id}
        />
      ))}
    </div>
  );
};
