import React from 'react';

function Me() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <img
        className="inline-block h-12 w-12 rounded-full border border-gray-400"
        src="https://cdn1.vectorstock.com/i/1000x1000/77/05/bearded-coder-hacker-vector-17477705.jpg"
        alt="Dan_Abromov"
      />
      <span className="flex flex-col">
        <span className="text-lg font-semibold text-black">Anshul Shrivas</span>
        <span className="text-lg font-medium text-black">anshulshrivas2002@gmail.com</span>
      </span>
    </div>
  );
}

export default Me;
