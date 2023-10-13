import React, { useState, useRef, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductsList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

import { db } from "../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import useGetData from "../custom-hooks/useGetData";

const ProductDetailsKurdish = () => {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();

  const { data: productKurdish } = useGetData("productKurdish");

  const docRef = doc(db, "productKurdish", id);

  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("no product!");
      }
    };

    getProduct();
  }, []);

  const {
    productImg,
    productName,
    price,
    desc,
    category,
  } = product;

  const relatedProducts = productKurdish.filter(item => item.category === category || item.category !==item.id);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: productImg,
        productName,
        price,
      })
    );

    toast.success("Product added successfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productKurdish]);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className="pt-0">
        <Container>
          <Row>
           

            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-line"></i>
                    </span>
                  </div>

                  
                </div>

                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">{price} IQD </span>
                  <span>هاوپۆل: {category}</span>
                </div>
                <p className="mt-3">{desc}</p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn"
                  onClick={addToCart}
                >
                زیادی بکە سەر کارت
                </motion.button>
              </div>
            </Col>

             <Col lg="6">
              <img src={productImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mt-5">
              <h2 className="related__title float-end">لەوانەیە تۆش حەز بکەیت</h2>
            </Col>

            <ProductsList data={relatedProducts.slice(0,4)} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetailsKurdish;
