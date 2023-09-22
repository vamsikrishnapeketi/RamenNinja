import React, { useContext, useState } from "react";
import { Selecteditems } from "../Context/Selecteditems";

export const Card = (props) => {
  const { setSelitems, setTotalprice } = useContext(Selecteditems);
  const [btnclicked, setBtnclicked] = useState(false);
  const handleClick = () => {
    setBtnclicked(true);
    setSelitems((current) => [
      ...current,
      {
        name: props.name,
        price: props.price,
      },
    ]);
    setTotalprice((current) => current + props.price);
  };
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-3 m-3">
      <img className="w-full" src={props.image} alt={props.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <div className="text-gray-700 text-base">
          <p>Toppings: {props.toppings}</p>
          <p>Price: ₹{props.price}</p>
        </div>
        {btnclicked && (
          <span className="flex justify-center font-bold">
            Item has been added
          </span>
        )}
        <button
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#403f3f] duration-300 rounded-none w-full mt-1 bg-[#7D7C7C] p-0.5"
          onClick={handleClick}
        >
          Add item
        </button>
      </div>
    </div>
  );
};
