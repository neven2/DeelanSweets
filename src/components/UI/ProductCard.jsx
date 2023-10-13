import React from "react";

import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        productImg: item.productImg,
      })
    );

    toast.success("Product added successfully");
  };

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <Link to={`/shop/${item.id}`}>
          <motion.img whileHover={{ scale: 0.9 }} src={item.productImg} alt="product Img" />
          </Link>
        </div>
        <div className="product__card-bottom text-end">
           <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
          <i className="ri-shopping-cart-line"></i>
          </motion.span>
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name text-center">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          {/* <span>{item.category}</span> */}
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-center p-2">
          <span className="price"> {item.price} IQD</span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
