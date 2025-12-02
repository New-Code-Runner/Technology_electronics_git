import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useTheme } from "./ThemeProvider";


const DetailsPage = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  const loader = useLoaderData();
  const { brand, shortDescription, photo, name, price, rating, types } = loader;
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  const handleAddToCart = () => {
    const sentCart = {
      userEmail,
      brand,
      shortDescription,
      photo,
      name,
      price,
      rating,
      types,
    };
    fetch(`https://technology-electronics-server-side.vercel.app//myCart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sentCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire(
            'Great!',
            'Your Product Added Successfully!',
            'success'
          )
        }
      });
  };
  return (
    <div className={`${
      isDarkMode ? "bg-gray-700 text-slate-500" : "bg-white text-black"
    } `}>
      <section className="container mx-auto p-10 md:p-20 antialiased h-screen flex justify-center items-center ">
        <article className=" flex flex-wrap md:flex-nowrap shadow-2xl mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
          <div className="w-[1000px]">
            <img className="h-[338px]" src={photo} alt={name} />
          </div>
          <div className={`${
      isDarkMode ? "bg-gray-700 text-slate-500" : "bg-orange-50 text-black"
    } `}>
            <div className="p-5 pb-10">
              <h1 className="text-2xl font-semibold text-black mt-4">
                {name}
              </h1>
              <p className="text-xl text-black mt-2 leading-relaxed">
                {shortDescription}
              </p>
            </div>
            <div className="bg-blue-50 p-5">
              <div className="sm:flex sm:justify-between">
                <div>
                  <div className="flex-col-reverse items-center">
                    <div>Rating: {rating} ★</div>
                    <div>Brand: {brand}</div>
                  </div>
                </div>
                <input
                  onClick={handleAddToCart}
                  value="Add to Cart"
                  type="submit"
                  className="cursor-pointer mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 ml-3
                  bg-red-950 hover:bg-amber-900 font-bold text-white md:text-lg rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default DetailsPage;
