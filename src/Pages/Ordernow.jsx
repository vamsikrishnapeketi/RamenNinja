import React, { useContext, useState } from "react";
import { Navbar } from "./Navbar";
import { Selecteditems } from "../Context/Selecteditems";

export const Ordernow = () => {
  const { selItems, totalPrice } = useContext(Selecteditems);
  const [btn, setBtn] = useState(false);
  const handleClick = () => {
    setBtn(true);
  };
  return (
    <>
      <Navbar />
      <div className="relative mt-[10%] ml-[20%]">
        <div className="max-w-sm rounded overflow-hidden shadow-lg ml-40">
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center ">Order</div>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="p-6">Sn.No</th>
                  <th className="px-12">Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {selItems.map((item, index) => (
                  <tr>
                    <td className="px-6">{index + 1}</td>
                    <td className="px-12">{item.name}</td>
                    <td>₹{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {totalPrice != 0 && (
              <span className="flex font-bold p-5">
                Total Price: ₹{totalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
      {btn ? (
        <span className="absolute font-bold mt-[2%] ml-[35%]">
          Thank you for ordering and come back again.
        </span>
      ) : (
        <button
          className="absolute mt-[2%] ml-[33%] w-full max-w-sm bg-black text-white"
          onClick={handleClick}
        >
          Order Now
        </button>
      )}
    </>
  );
};
