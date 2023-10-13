import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import AboutKurdish from "../pages/AboutKurdish";
import Contact from "../pages/Contact";
import ContactKurdish from "../pages/ContactKurdish";
import Shop from "../pages/Shop";
import ShopKurdish from "../pages/ShopKurdish";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import ProductDetailsKurdish from "../pages/ProductDetailsKurdish";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import ThankYou from "../pages/ThankYou";

import AddProducts from "../admin/AddProducts";
import AddProductsKurdish from "../admin/AddProductsKurdish";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";
import Orders from '../admin/Order'

import HomeKurdish from '../pages/HomeKurdish'

import Category from '../components/Categories/Category'
import CategoryKurdish from '../components/CategoriesKurdish/Category'
const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="thankYou" element={<ThankYou />} /> 

      <Route path="/*" element={<ProtectedRoute />}>
        <Route path="checkout" element={<Checkout />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/all-products" element={<AllProducts />} />
        <Route path="dashboard/all-productsKurdish" element={<AllProducts />} />
        <Route path="dashboard/orders" element={<Orders />} />
        <Route path="dashboard/add-product" element={<AddProducts />} />
        <Route path="dashboard/users" element={<Users />} />
      </Route>

     <Route>
      <Route path="homeKu" element={<HomeKurdish />} /> 
      <Route path="aboutKu" element={<AboutKurdish />} />
      <Route path="contactKu" element={<ContactKurdish />} />
      <Route path="shopKu/:id" element={<ProductDetailsKurdish />} />
      <Route path="shopKu" element={<ShopKurdish />} />
      <Route path='/categorykurdish/:categoryName' element={<CategoryKurdish />} />

    </Route>
      <Route path='/category/:categoryName' element={<Category />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
