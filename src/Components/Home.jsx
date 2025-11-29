import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";
import { useTheme } from "./ThemeProvider";
import FAQ from "./FAQ";

const Home = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <div
        className={`hero min-h-screen ${
          isDarkMode ? "bg-base-100" : "bg-white text-black"
        } `}
        style={{
          backgroundImage: "url(https://i.ibb.co/wy0pjDD/banner.png)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className={` hero-content text-center text-neutral-content   ${
          isDarkMode ? "text-white" : " text-black"
        } `}>
          <div className="max-w-3xl">
            <h1 className="mb-5 lg:text-5xl md:text-4xl font-bold text-xl">
            Electech Hub! <br /> <br /> Your Gateway to Innovation
            </h1>
            <p className="mb-5 sm:text-xs md:text-2xl lg:2xl">
            Discover an array of cutting-edge technology and electronics products at ElecTech Hub. Stay ahead in the digital world with the latest deals and innovations. Explore, experience, and empower your tech journey.
            </p>
          </div>
        </div>
      </div>
      
        {/* cards */}

<div className={` pt-10 flex justify-center  ${
          isDarkMode ? "bg-base-100" : "bg-white text-black"
        } `}>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 mb-10"
        >
          
        {data.map((datas, index) => (
          <Brand Key={datas.id} index={index} aData={datas}></Brand>
        ))}
      </div>

</div>

{/* carousel  */}

<div className={` carousel relative w-full  ${
          isDarkMode ? "bg-base-100" : "bg-white text-black"
        } `}>
      <div id="slide1" className="carousel-item relative w-full ">
        <img src="https://i.ibb.co/mzkRg6Q/caro-1.png" className="w-full object-cover sm:h-96" alt="Phone" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/M9t92DS/caro-2.png" className="w-full object-cover sm:h-96" alt="Laptop" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/DRp1tKP/caro-3.png" className="w-full object-cover sm:h-96" alt="Headphone" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/4W9rWZK/Carousel4.png" className="w-full object-cover sm:h-96" alt="Tablet" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>

  <FAQ></FAQ>

    </>
  );
};

export default Home;
