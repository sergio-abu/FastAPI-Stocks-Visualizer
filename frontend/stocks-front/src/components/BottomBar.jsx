import React from 'react';

const BottomBar = () => {
  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-sm">Copyright © My Website</div>
      <div className="flex">
        <a href="#" className="px-4 text-white hover:bg-red-600 rounded-lg">Terms of Use</a>
        <a href="#" className="px-4 text-white hover:bg-red-600 rounded-lg">Privacy Policy</a>
      </div>
    </div>
  );
}

export default BottomBar;
