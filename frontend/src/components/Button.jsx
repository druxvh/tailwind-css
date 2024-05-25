import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullwidth,
  link,
}) => {
  return (
    <button
      className={` px-7 py-4 border font-montserrat text-lg leading-none

    ${
      backgroundColor
        ? `${backgroundColor} ${borderColor} ${textColor}`
        : "bg-coral-red  text-white border-coral-red"
    }
    
    rounded-full ${fullwidth && "w-full"} `}
    >
      <a href={link}
      className="flex justify-center items-center gap-2">
        {label}
        {iconURL && (
          <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5" />
        )}
      </a>
    </button>
  );
};

export default Button;
