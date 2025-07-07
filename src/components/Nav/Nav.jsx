import React, { useContext, useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5"; // Close icon
import { Ecart } from '../../Context/Context';

function Nav() {
  const {Handle,HandleClick,setInput,cart} = useContext(Ecart)
  const [open, setOpen] = useState(false);


  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav className='h-20 w-full shadow-lg flex justify-between items-center px-4 md:px-10'>

        <h1 className='text-2xl font-bold'>AN<span className='text-purple-500'>mall</span></h1>

        {/* Search - always visible */}
        <form  
        onSubmit={Handle}
        className='flex items-center'>
          <div 
          onClick={HandleClick}
          className='h-12 w-10 border-t-2 border-l-2 border-b-2 flex justify-center border-gray-500 items-center rounded-l-2xl font-medium text-[20px] cursor-pointer'>
            <IoSearchSharp />
          </div>
          <input
            onChange={(e) => setInput(e.target.value)}
            className='h-12 w-40 sm:w-60  outline-none border-t-2 border-r-2 border-b-2 border-gray-500 rounded-r-2xl'
            type="text"
            placeholder='Search'
          />
        </form>

        {/* Cart - always visible */}
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-3 px-3 py-2 bg-purple-400 rounded-sm'>
            <NavLink to="/Cart">
              <div className='text-[25px] font-medium cursor-pointer'>
                <FaCartShopping />
              </div>
            </NavLink>
            <h1 className='animate-bounce text-white'>{cart.length}</h1>
          </div>
          <h1 className='text-[20px] font-bold'>Cart</h1>
        </div>

        {/* Main Links & Login/Signup - hidden on small screen */}
        <div className='hidden lg:flex gap-6 items-center'>
          {[{ to: "/", label: "Home" }, { to: "/About", label: "About" }, { to: "/Contact", label: "Contact" }].map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) => `text-[20px] ${isActive ? 'text-purple-400 font-bold' : 'text-gray-500'}`}
            >
              {link.label}
            </NavLink>
          ))}

          {[{ to: "/login", label: "Login" }, { to: "/sign", label: "Sign-Up" }].map((link, index) => (
            <button
              key={index}
              className='px-3 py-2 bg-purple-400 rounded-sm font-bold cursor-pointer hover:bg-purple-500'
            >
              <NavLink to={link.to}>
                {link.label}
              </NavLink>
            </button>
          ))}
        </div>

        {/* Toggle Button - only small screens */}
        <h1
          onClick={toggle}
          className='block lg:hidden font-bold text-2xl cursor-pointer'
        >
          {open ? <IoClose /> : <CgMenu />}
        </h1>
      </nav>

      {/* Animated Toggle Menu inside new div */}
      <div className="relative lg:hidden">
        <div
          className={`absolute top-5 left-5 w-50 transition-all duration-500 overflow-hidden bg-gray-100 z-10 ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center py-4 gap-4">
            {[{ to: "/", label: "Home" }, { to: "/About", label: "About" }, { to: "/Contact", label: "Contact" }].map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-xl font-medium text-gray-700 hover:text-purple-500"
              >
                {link.label}
              </NavLink>
            ))}

            <div className='flex gap-4'>
              {[{ to: "/login", label: "Login" }, { to: "/sign", label: "Sign-Up" }].map((link, index) => (
                <button
                  key={index}
                  className='px-4 py-2 bg-purple-400 rounded-sm font-bold hover:bg-purple-500'
                  onClick={() => setOpen(false)}
                >
                  <NavLink to={link.to}>
                    {link.label}
                  </NavLink>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
