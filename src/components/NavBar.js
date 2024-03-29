import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="navbar bg-red-800">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to='/' exact 
          activeClassName="text-white"
          className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-yellow-500 text-4xl font-bold cursive tracking-widest">
            Charoles
          </NavLink >
          <NavLink to='/project' className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-500"
          activeClassName="text-red-100 bg-red-900">
            Projects
          </NavLink>
          <NavLink to='/post' className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-500"
          activeClassName="text-red-100 bg-red-900">
            Blog
          </NavLink>
          <NavLink to='/about' className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-500"
          activeClassName="text-red-100 bg-red-900">
            About
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://www.linkedin.com/in/kc-reyes/" className="icon mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
          <SocialIcon url="https://twitter.com/Charlesiubao" className="icon mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
          <SocialIcon url="https://github.com/Charlesiubao" className="icon mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
          <SocialIcon url="mailto:kcreyes@usa.com" className="icon mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
        </div>
      </div>
    </header>
  )
}