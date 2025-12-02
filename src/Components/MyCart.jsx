import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import { useTheme } from "./ThemeProvider";
import Swal from "sweetalert2";
const MyCart = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  const loader = useLoaderData();
  const [cart, setCart] = useState([])


  const {user} = useContext(AuthContext);
  const userEmail = user?.email;

  useEffect(() => ()=>{
    const filterCart = loader?.filter(cart => cart.userEmail === userEmail);
    setCart(filterCart);
},[userEmail, loader])

  const handleDelete = (_id) => {

    fetch(`https://technology-electronics-server-side.vercel.app//myCart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire(
            'Excellent!',
            'Your Product Deleted Successfully!',
            'success'
          )
           const remaining = cart.filter((cartID) => cartID._id !== _id);
           setCart(remaining);
         } 
      });
  };
  return (
    <div className={` ${
      isDarkMode ? " text-slate-500" : "bg-white text-black"
    } `}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-4 h-screen">
        

        {
            cart.length === 0 ? ( <div className="max-w-7xl mx-auto col-span-3">
                      <img className="w-20 mx-auto" src="https://i.ibb.co/CPzWRP1/no-shopping-cart.png" alt="" />
                      <p className="text-2xl font-semibold mt-10">Your cart is Empty</p>
                    </div>
            ) : (
                cart.map( cart => (
                <div key={cart._id}>
                <div className={`card shadow-2xl compact bg-base-100 ${
          isDarkMode ? " bg-gray-500" : "bg-slate-200 text-black"
        } `}>
                <figure>
                    <img className="w-[300px]" src={cart.photo} alt="" />
                </figure>
                <div className="justify-between  card-body">
                    <h2 className="card-title flex justify-center text-slate-400">{cart.name}</h2>
                    <div className="justify-between card-actions">
                    <div className="flex gap-x-3">
                        <div className="badge  badge-accent">{cart.brand}</div>
                        <div className="badge  badge-accent">{cart.types}</div>
                    </div>
                    <div className="justify-end card-actions">
                     
                        <button onClick={() => handleDelete(cart._id)} className="badge  font-bold cursor-pointer badge-error text-center"> delete </button>

                        <div className="badge  badge-accent">{cart.price}$</div>
                        <div className="badge  badge-accent">{cart.rating}★</div>
                    </div>
                    </div>
                </div>
                </div>
                </div>)
            
            ))
        }

        </div>

        </div>
  );
};

export default MyCart;
