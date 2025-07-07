import React, { useContext } from 'react';
import { Ecart } from '../../Context/Context';

function Home() {
  const {  filterData,Click } = useContext(Ecart);
   

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8 px-4">
      {filterData && filterData.length ? (
        filterData.map((data) => (
          <div
            key={data._id}
            className="w-72 bg-white rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300 flex flex-col items-center p-4 space-y-4"
          >
            <h1 className="text-lg font-semibold text-purple-600 uppercase">{data.category}</h1>
            <img 
              className="h-40 w-40 object-contain bg-gray-100 rounded-md"
              src={data.image} 
              alt={data.title} 
            />
            <p className="text-sm font-medium text-gray-500">{data.brand}</p>
            <h2 className="text-base font-bold text-gray-700 text-center">{data.title}</h2>
            <p className="text-lg font-bold text-green-600">₹{data.price}</p>
            <p className="text-sm text-gray-600 line-clamp-3 text-center">{data.description}</p>
            <p className=' flex gap-4'><span className='h-9 w-9 bg-purple-400 rounded-md flex justify-center items-center'>{data.size[0]}</span> 
            
            <span className='h-9 w-9 bg-purple-400 rounded-md flex justify-center items-center'>{data.size[1]}</span> 
            
            <span className='h-9 w-9 bg-purple-400 rounded-md flex justify-center items-center'>{data.size[2]}</span></p>
            <button 
            onClick={ () => Click(data._id)}
            className='px-4 py-3 bg-purple-500 shadow-lg shadow-purple-400 rounded-md hover:scale-95 font-bold'>Add Cart</button>
          </div>
        ))
      ) : (
        <p className="text-red-500 text-xl font-semibold">Data not found</p>
      )}
    </div>
  );
}

export default Home;
