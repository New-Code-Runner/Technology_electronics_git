import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";


const Brand = ({aData, index}) => {

  const { toggleTheme, isDarkMode } = useTheme();
    const{brand_image, brand_name} = aData;
    return (
        <>
        <Link to={`/brandPage/${brand_name}`} key={index}>
        
        <div className={` card card-compact w-[300px]  bg-base-100 shadow-2xl  ${
          isDarkMode ? "bg-base-100 text-slate-500" : "bg-white text-black"
        } `}>
  <figure><img src={brand_image} alt={brand_name} /></figure>
  <div className="card-body ">
    <h2 className="card-title text-center" >{brand_name}</h2>
  </div>

</div> 

        </Link>
        </>
    );
}

export default Brand;
