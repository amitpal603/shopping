import React, { useContext } from 'react';
import { Ecart } from '../../Context/Context';
import { NavLink } from 'react-router-dom';

function Cart() {
    const { cartData, HandleDelete,HandleIncre,qCount } = useContext(Ecart);
    console.log(cartData);

    return (
        <div className='min-h-screen flex flex-col items-center p-6 bg-gray-100'>
            <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

            {cartData.length > 0 ? (
                <div className='flex flex-col gap-6 w-full max-w-3xl'>
                    {cartData.map((data,index) => (
                        <div
                            key={data._id}
                            className='w-full bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex flex-col md:flex-row justify-between items-center p-4'
                        >
                            <img 
                                className='h-40 w-40 object-cover rounded-lg mb-4 md:mb-0'
                                src={data.image} 
                                alt={data.title} 
                            />

                            <div className='flex flex-col flex-grow px-4 text-center md:text-left'>
                                <p className='text-lg font-semibold'>{data.brand}</p>
                                <p className='text-gray-600'>{data.title}</p>
                                <p className='text-purple-600 font-bold text-xl mt-2'>₹{data.price}</p>
                            </div>

                            <div className=' flex gap-5 mr-5'>
                                <button className='h-10 w-10 rounded-full bg-purple-400 flex justify-center items-center'>-</button>
                                <p className=' flex justify-center items-center'>{qCount}</p>
                                <button 
                                onClick={() => HandleIncre(index)}
                                className='h-10 w-10 rounded-full bg-purple-400 flex justify-center items-center'>+</button>
                            </div>
                            <div>
                                <button 
                                onClick={() => HandleDelete(index)}
                                className='mt-4 md:mt-0 font-bold bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow-lg transition-all duration-200'
                            >
                                Remove
                            </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <NavLink to="/">
                    <button className='px-6 py-3 bg-purple-500 text-white rounded-md shadow-lg font-bold hover:bg-purple-600 transition-all duration-200'>
                        Add to Cart
                    </button>
                </NavLink>
            )}
        </div>
    );
}

export default Cart;
