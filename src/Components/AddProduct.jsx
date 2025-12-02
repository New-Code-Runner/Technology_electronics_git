import { useState } from "react";
import Swal from "sweetalert2";
import { useTheme } from "./ThemeProvider";

const AddProduct = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  const [product, setProduct] = useState({
    photo: "",
    name: "",
    brand: "",
    types: "",
    price: "",
    shortDescription: "",
    rating: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = (event) => {
    event.preventDefault();

    // Rest of your logic
    console.log(product);

    // Sending data to the server
    fetch("https://technology-electronics-server-side.vercel.app//addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          // Reset the form after submission
          setProduct({
            photo: "",
            name: "",
            brand: "",
            types: "",
            price: "",
            shortDescription: "",
            rating: "",
          });
        }
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while adding the product",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <>
      <div
        className={` bg-[#F4F3F0] p-24 ${
          isDarkMode ? "bg-base-100 text-slate-500" : "bg-white text-black"
        } `}
      >
        <h2 className="text-3xl font-extrabold text-center mb-10">
          Add a Product
        </h2>
        <form onSubmit={handleAddProduct}>
          {/* form image & name row */}
          <div className="md:flex mb-8 sm:flex">
            <div className="form-control md:w-1/2 sm:w-full ml-4">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  value={product.photo}
                  onChange={handleChange}
                  placeholder="Image"
                  className="input input-bordered w-full rounded-md"
                  required
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 sm:w-full ml-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>

          {/* form brand name & type row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 sm:w-full ml-4">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brand"
                  value={product.brand}
                  onChange={handleChange}
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>

            <div className="form-control  md:w-1/2 sm:w-full ml-4 ">
              <label className="label">
                <span className="label-text">Types</span>
              </label>

              <select
                name="types"
                value={product.types}
                onChange={handleChange}
                className="w-full select text-slate-400 input-bordered"
                required
              >
                <option value="">Select Type</option>
                <option value="Phone">Phone</option>
                <option value="Laptop">Laptop</option>
                <option value="TV">TV</option>
                <option value="Fridge">Fridge</option>
              </select>
            </div>
          </div>

          {/* form price & short description row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 sm:w-full ml-4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  placeholder="Product Price"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 sm:w-full ml-4 ">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea
                name="shortDescription"
                value={product.shortDescription}
                onChange={handleChange}
                placeholder="Product Details "
                className="w-full rounded-lg border-solid border-[1px] border-slate-500"
                required
              ></textarea>
            </div>
          </div>
          {/* form rating row */}
          <div className="mb-8">
            <div className="form-control w-[99%] ml-4">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <select
                name="rating"
                value={product.rating}
                onChange={handleChange}
                className="w-full select input-bordered text-slate-400"
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
          </div>
          <input
            type="submit"
            value="Add Product"
            className="btn btn-warning w-[99%] ml-4"
          />
        </form>
      </div>
    </>
  );
};

export default AddProduct;
