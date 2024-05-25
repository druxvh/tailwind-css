import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold max-w-lg">
          We Provide You
          <span className="text-coral-red "> Super </span>
          <span className="text-coral-red ">Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          laboriosam quibusdam, tempore quo, eius provident officia maxime
          doloribus tempora optio blanditiis porro quia ipsum corporis.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi!
        </p>
        <div className="mt-11">
          <Button label="View Details" link={"https://www.nike.com/in/"}/>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe 8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
