import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-gray-800 text-white top-0 left-0 w-full p-4 flex items-center">
      <h1 className="ml-5 text-2xl font-bold">Stocks</h1>
      <img src='./chart.svg' alt="logo" className="h-10 ml-4" />
      <div className="mr-5 flex ml-auto">
        <button className="hover:bg-red-600 text-lg text-white p-1 rounded-lg mr-2">Home</button>
        <button className="hover:bg-red-600 text-lg text-white p-1 rounded-lg mr-2">Options</button>
      </div>
    </div>
  );
}

export default TopBar;
