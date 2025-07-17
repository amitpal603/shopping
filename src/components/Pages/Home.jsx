import React, { useContext } from 'react';
import { Ecart } from '../../Context/Context';

function Home() {
  const { filterData, Click } = useContext(Ecart);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 px-2 sm:px-4">
      {filterData && filterData.length ? (
        filterData.map((data,index) => (
          <div
            key={data._id}
            className="bg-white rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300 flex flex-col items-center p-3 sm:p-4 space-y-4"
          >
            <h1 className="text-sm sm:text-lg font-semibold text-purple-600 uppercase text-center">{data.category}</h1>
            <img 
              className="h-32 w-32 sm:h-40 sm:w-40 object-contain bg-gray-100 rounded-md"
              src={data.image} 
              alt={data.title} 
            />
            <p className="text-xs sm:text-sm font-medium text-gray-500">{data.brand}</p>
            <h2 className="text-sm sm:text-base font-bold text-gray-700 text-center">{data.title}</h2>
            <p className="text-base sm:text-lg font-bold text-green-600">₹{data.price}</p>
            <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 text-center">{data.description}</p>

            <div className="flex gap-2 sm:gap-4">
              {data.size?.map((size, index) => (
                <span 
                  key={index} 
                  className="h-8 w-8 sm:h-9 sm:w-9 bg-purple-400 rounded-md flex justify-center items-center text-white font-medium"
                >
                  {size}
                </span>
              ))}
            </div>

            <button 
              onClick={() => Click(data._id)}
              className="px-3 sm:px-4 py-2 sm:py-3 bg-purple-500 shadow-lg shadow-purple-400 rounded-md hover:scale-95 font-bold text-white text-sm sm:text-base"
            >
              Add Cart
            </button>
          </div>
        ))
      ) : (
        <p className="text-red-500 text-xl font-semibold ">Data not found</p>
      )}
    </div>
  );
}

export default Home;
