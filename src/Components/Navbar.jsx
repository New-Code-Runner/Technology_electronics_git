import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import { useContext } from "react";
import { useTheme } from "./ThemeProvider";
import { MdDarkMode} from "react-icons/md";
import {BsFillSunFill } from "react-icons/bs";

const Navbar = () => {

  const { toggleTheme, isDarkMode } = useTheme();

  const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }


    return (
        
        <div  className={`navbar ${
          isDarkMode ? "bg-base-100" : "bg-white text-black"
        } `}>
          
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to="/"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>HOME</NavLink> </li>

        <li><NavLink to="/addProduct"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>ADD PRODUCT</NavLink></li>
  
  <li><NavLink to="/myCart"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>MY CART</NavLink></li>
      </ul>
    </div>
    <Link to="/" className="text-xl font-bold mr-5">
    ElecTech Hub
          </Link>
    <img className="w-[60px] h-[100%]" src="https://i.ibb.co/C620h4K/logo-1.jpg" alt="" />
    <button className="ml-12" onClick={toggleTheme}>
    {isDarkMode ? (
    <div className="text-3xl">

      <MdDarkMode/>
    </div>
    
  ) : (
    <div className="text-3xl">

      <BsFillSunFill/>
    </div>
    
  )}
      </button> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-x-32">
            
      <li className="outline-cyan-500 bg-stone-500 rounded-[10px] text-black font-semibold"><NavLink to="/"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>HOME</NavLink> </li>

      <li className="outline-cyan-500 bg-stone-500 rounded-[10px] text-black font-semibold"><NavLink to="/addProduct"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>ADD PRODUCT</NavLink></li>

      <li className="outline-cyan-500 bg-stone-500 rounded-[10px] text-black font-semibold"><NavLink to="/myCart"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>MY CART</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">

{user ?  (
  
  <div className="flex flex-col justify-center items-center" >
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
  <div className="w-10 rounded-full">
    <img src={user.photoURL} alt="Photo Not found" />
  </div>
</label>


    
    <p>{user.displayName}</p>
    <button onClick={handleSignOut} className="btn btn-active btn-ghost btn-xs hover:bg-red-400">
      logout
    </button>
  </div>
) : <NavLink to="/login">
<a className="btn btn-outline btn-accent font-semibold">login</a>
</NavLink>}


  </div>
        </div>
    );
}

export default Navbar;