import React, { useRef, useEffect,useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import "../Header/header.css";

import { motion } from "framer-motion";

import DeelanLogo from "../../assets/images/deelanlogo.png";
import userIcon from "../../assets/images/user.svg";

import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

const nav__links = [
  {
    path: "aboutKu",
    display: "دەربارەی ئێمه",
  },
  {
    path: "shopKu",
    display: "کڕین",
  },
  {
    path: "contactKu",
    display: "پەیوەندی",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const profileActionRef = useRef(null);

   const [isShown, setIsShown] = useState(false);

  const handleLanguage = event => {
    setIsShown(current => !current);

  };
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navigateToCart = () => {
    navigate("/cart");
  };

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");


  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <Link to='homeKu'>
              <img src={DeelanLogo} alt="logo" />
              </Link>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <motion.ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={navClass =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </motion.ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon" onClick={handleLanguage}>
                <i className="ri-global-line"></i>
                 {isShown && 
                    (
                    <div className="language">
                    <div className="language_actions d-flex align-items-center justify-content-center flex-column">
                      <Link to="/home">English</Link>
                      <Link to="/homeKu">Kurdish</Link>
                    </div>
                   </div>
                    )}
              </span>

              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-cart-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>

              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={
                    currentUser && currentUser.photoURL
                      ? currentUser.photoURL
                      : userIcon
                  }
                  alt=""
                  onClick={toggleProfileActions}
                />

                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <Link to="/signup">Signup</Link>
                      <Link to="/login">Login</Link>
                    </div>
                  )}
                </div>
              </div>

               
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
