import React, { useContext, useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Ecart } from '../../Context/Context';

function Nav() {
  const { Handle, HandleClick, setInput, cart } = useContext(Ecart);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav className='h-20 w-full shadow-lg flex justify-between items-center px-4 md:px-10'>

        <h1 className='text-2xl font-bold pr-2 sm:pr-4'>AN<span className='text-purple-500'>mall</span></h1>

        {/* Search */}
        <form onSubmit={Handle} className='flex items-center w-28 xs:w-36 sm:w-48 md:w-60'>
          <div 
            onClick={HandleClick}
            className='h-10 w-10 border-t-2 border-l-2 border-b-2 flex justify-center border-gray-500 items-center rounded-l-2xl font-medium text-[18px] cursor-pointer'>
            <IoSearchSharp />
          </div>
          <input
            onChange={(e) => setInput(e.target.value)}
            className='h-10 w-full pr-4 outline-none border-t-2 border-r-2 border-b-2 border-gray-500 rounded-r-2xl'
            type="text"
            placeholder='Search'
          />
        </form>

        {/* Cart */}
        <div className='flex items-center gap-2 ml-2'>
          <div className='flex items-center gap-2 px-3 py-2 bg-purple-400 rounded-sm'>
            <NavLink to="/Cart">
              <div className='text-[22px] font-medium cursor-pointer'>
                <FaCartShopping />
              </div>
            </NavLink>
            <h1 className='animate-bounce text-white text-sm'>{cart.length}</h1>
          </div>
        </div>

        {/* Links for large screens */}
        <div className='hidden lg:flex gap-6 items-center'>
          {[
            { to: "/", label: "Home" },
            { to: "/About", label: "About" },
            { to: "/Contact", label: "Contact" }
          ].map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) => `text-[18px] ${isActive ? 'text-purple-400 font-bold' : 'text-gray-500'}`}
            >
              {link.label}
            </NavLink>
          ))}

          {[
            { to: "/login", label: "Login" },
            { to: "/sign", label: "Sign-Up" }
          ].map((link, index) => (
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

        {/* Hamburger for mobile */}
        <h1 onClick={toggle} className='block lg:hidden font-bold text-2xl cursor-pointer ml-3'>
          {open ? <IoClose /> : <CgMenu />}
        </h1>
      </nav>

      {/* Mobile Menu */}
      <div className="relative lg:hidden">
        <div
          className={`absolute top-20 left-0 w-full transition-all duration-500 overflow-hidden bg-gray-100 z-10 ${
            open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center py-6 gap-5">
            {[
              { to: "/", label: "Home" },
              { to: "/About", label: "About" },
              { to: "/Contact", label: "Contact" }
            ].map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-xl font-medium ${isActive ? 'text-purple-500' : 'text-gray-700'} hover:text-purple-500`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className='flex flex-col gap-4'>
              {[
                { to: "/login", label: "Login" },
                { to: "/sign", label: "Sign-Up" }
              ].map((link, index) => (
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
