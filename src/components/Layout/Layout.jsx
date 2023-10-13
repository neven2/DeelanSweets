import React ,{useState} from "react";
import Header from "../Header/Header";
import HeaderKu from "../HeaderKu/Header";

import Footer from "../Footer/Footer";
import FooterKu from "../FooterKu/Footer";
import Routers from "../../routers/Routers";
import AdminNav from "../../admin/AdminNav";
import { useLocation } from "react-router-dom";




const Layout = () => {


 const [language, setLanguage] = useState(false);

  // Determine which navbar to show based on login state and page being rendered
  const getNavbar = () => {
    if (language) {
      return <Header />;
    } else if (window.location.pathname === "/homeKu" || window.location.pathname === "/contactKu" || window.location.pathname === "/shopKu" || window.location.pathname === "/aboutKu" ||  window.location.pathname === "/shopKu/:id" ||  window.location.pathname === "/categorykurdish/:categoryName") {
      return <HeaderKu />; 
    } 
    else if (window.location.pathname === "/categorykurdish/چەرەزات" ||  window.location.pathname === "categorykurdish/کاری%20هەویر" || window.location.pathname === "/categorykurdish/کێک" || window.location.pathname === "/categorykurdish/شیرینی" || window.location.pathname === "/categorykurdish/پاقلاوەی"  ){
      return <HeaderKu/>
    }
    else if(window.location.pathname === "/dashboard"){

     return <AdminNav/>
    } 
    else {
      return <Header />;
    }
  };

  const getFooter = () => {
    if (language) {
      return <Footer />;
    } else if (window.location.pathname === "/homeKu" || window.location.pathname === "/contactKu" || window.location.pathname === "/shopKu" || window.location.pathname === "/aboutKu" ) {
      return <FooterKu />;     
    } 
    
    else {
      return <Footer />;
    }
  };


  const location = useLocation();
  
  return (
    <>
    {getNavbar()}
      <div>
        <Routers />
      </div>
      
     {getFooter()

     }
    </>
  );
};

export default Layout;
