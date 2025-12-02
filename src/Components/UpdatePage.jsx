import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useTheme } from "./ThemeProvider";


const UpdatePage = () => {
  const { toggleTheme, isDarkMode } = useTheme();

    const navigate = useNavigate();
    const data = useLoaderData();

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const photo = form.get('photo');
        const name = form.get('name');
        const brand = form.get('brand');
        const types = form.get('types');
        const price = form.get('price');
        const shortDescription = form.get('shortDescription');
        const rating = form.get('rating');

        const product = { photo, name, brand, types, price, shortDescription, rating };

        fetch(`https://technology-electronics-server-side.vercel.app//${data._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                  Swal.fire(
                    'Excellent!',
                    'Your Product Updated Successfully!',
                    'success'
                  )
                    navigate(-1)
                }
            })
    }

    return (
        <div className={` ${
          isDarkMode ? " text-slate-500" : "bg-white text-black"
        } `}>
            <div>
      <h1 className="text-center text-2xl font-bold">UPDATE YOUR PRODUCTS HERE </h1>
      <form
        onSubmit={handleUpdateProduct}
        className="max-w-md mx-auto my-10 p-6 bg-orange-100 rounded shadow-2xl ">
        <div className="mb-6">
          <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900">
            Photo
          </label>
          <input
            type="text"
            name="photo"
            
            defaultValue={data.photo}
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-slate-500"
            placeholder="Photo URL"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            name="name"
            
            defaultValue={data.name}
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-slate-500 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Product Name"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">
            Brand
          </label>
          <input
            type="text"
            name="brand"
            
            defaultValue={data.brand}
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-slate-500 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Brand"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">
            Types
          </label>
          <select
            name="types"
            defaultValue={data.types}
            
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-slate-500 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Type</option>
            <option value="Phone">Phone</option>
            <option value="Laptop">Laptop</option>
            <option value="TV">TV</option>
            <option value="Fridge">Fridge</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
            Price
          </label>
          <input
            type="text"
            name="price"
            
            defaultValue={data.price}
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-slate-500 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Price"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="shortDescription" className="block mb-2 text-sm font-medium text-gray-900">
            Short Description
          </label>
          <textarea
            name="shortDescription"
            
            defaultValue={data.shortDescription}
            rows="3"
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-slate-500 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Short Description"
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900">
            Rating
          </label>
          <select
            name="rating"
            
            defaultValue={data.rating}
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-slate-500 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-lime-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Click Update
          </button>
        </div>
      </form>
    </div>
        </div>
    );
}

export default UpdatePage;
