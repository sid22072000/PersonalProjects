import React, { useId } from "react";

function Select({ options=[], label, className='', ...props }, ref) {
  console.log("FROM SELECT",options)
  const id = useId();
  return (
  <div className="w-full">  
      
     {label && <label htmlFor={id} className="">{label}</label>}
          <select
            {...props}
            id={id}
            ref={ref}
            className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-200  duration-200 border border-gray-200 w-full ${className}`}
          >{options?.map((option)=>(
            <option key={option} value={option} className=" hover:cursor-pointer">{option}</option>
          ))}</select>
        </div>
  );
}

export default React.forwardRef(Select);
