import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen relative" style={{backgroundImage: 'url(https://i.ibb.co/3WKZ36y/404-Page.png)' , backgroundRepeat: 'no-repeat'}}>
      
      <NavLink to="/">

      <button className="btn btn-primary absolute bottom-36 right-1/2">Go TO HOME PAGE</button>
      </NavLink>
    
  
</div>
    );
}

export default ErrorPage;
