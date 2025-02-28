import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen  bg-pink-100">
      <div className="flex justify-center items-center">
        <h1 className=" text-4xl text-amber-500  font-mono mt-4 mb-30  ">
          Welcome to Prueba!{" "}
        </h1>
      </div>
      <div className=" text-1xl">
        <p className="  text-gray-800 font-mono">
          This is a site I made for fun where you can answer some questions and
          find out how much you know me.If your'e ready to start the quiz click
          on the start button below and enjoy!
        </p>
        <div className="flex justify-center items-center  ">
          {
            <Link to="/quiz">
              <button className="bg-purple-400 text-gray-800 px-4 py-2 rounded-lg  hover:bg-pink-400 mt-3">
                Start
              </button>
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
