import React from 'react';
import siteLogo from '../../../assets/contest creation logo.png'
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = [
        <NavLink className='mr-4' to='/'>Home</NavLink>,
        <NavLink className='mr-4' to='/all-contest'>All Contest</NavLink>,
        <NavLink  to='/extra-section'>Extra Section</NavLink>
    ]

    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={1} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div>
        <img className='w-15 h-15' src={siteLogo} alt="" srcset="" />
        </div>
    <h2 className=" text-2xl -mx-2 text-orange-600">Contest<span className='text-violet-500 font-bold'>Hub</span></h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;