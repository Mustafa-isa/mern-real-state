import React from "react";

function Input({type,id,handlechange ,value ,place}) {
  return (
    <input
    value={value}
      type={type}
      id={id}
      className=" w-full mb-3  p-2 rounded-md border focus:border-blue-900 outline-none "
      placeholder={place}
      onChange={handlechange}
      
     />
  );
}

export default Input;
