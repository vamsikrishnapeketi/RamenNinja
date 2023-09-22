import React from "react";
import { Layout } from "./Layout";
import { Cards } from "./Cards";

export const Home = () => {
  return (
    <>
      <Layout>
        <div className="flex justify-center w-full">
          <img
            className="w-[500px] h-[500px] mb-3 mr-3 justify-between"
            src="src/images/naruto-ramen.png.jpg"
            alt="naruto-ramen"
          />
        </div>
        <Cards />
      </Layout>
    </>
  );
};
