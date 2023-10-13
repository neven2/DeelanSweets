import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/mixedpistachiobaklava.png";
import heroCake from "../assets/images/cakehome.png";
import heroBaklava from "../assets/images/cashewkunafa.png";
import ProductList from "../components/UI/ProductsList";
import { Swiper, SwiperSlide } from 'swiper/react';
import useGetData from "../custom-hooks/useGetData";
import Categories from '../components/Categories/Categories'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation , Autoplay} from 'swiper/modules';

const Home = () => {
  const { data: products, loading } = useGetData("products");

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);


  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      item => item.category === "Baklava"
    );

    const filteredBestSalesProducts = products.filter(
      item => item.category === "Cake"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, [products]);
    
  return (
    <Helmet title={"Home"}>
        <Categories/>
      <section className="hero__section">
        <Container>
           <Swiper 
        navigation={true}
        loop={true} 
        autoplay={{ delay: 2000 ,
        disableOnInteraction: false}}
        modules={[Navigation]} >

        <SwiperSlide>
          <Row className="hero-row ">
                <Col lg="6" md="6" sm="12" xs="12" >
              <div className="hero__img">
                <img src={heroImg} alt="Sweets" />
              </div>
            </Col>
            <Col lg="6" md="6" sm="12" xs="12">
              <div className="hero__content">
                <h2>Sweeten Your Day with Our Irresistible Treats</h2>
                <p>
                Experience the Magic of Handcrafted Sweets and Desserts, Delivered to Your Doorstep.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shopKu"> Order Now  <i className="ri-arrow-right-line"></i></Link>
                </motion.button>
              </div>
            </Col>

          </Row>
           </SwiperSlide>

            <SwiperSlide>
          <Row className="hero-row">
                <Col lg="6" md="6" sm="12" xs="12">
              <div className="hero__img">
                <img src={heroCake} alt="Sweets" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12" xs="12">
              <div className="hero__content">
              <h2>Sweeten Your Day with Our Irresistible Treats</h2>                <p>
                Experience the Magic of Handcrafted Sweets and Desserts, Delivered to Your Doorstep.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn ">
                  <Link to="/shop">Order Now <i className="ri-arrow-right-line"></i></Link>
                </motion.button>
              </div>
            </Col>

          
           
          </Row>
           </SwiperSlide>

            <SwiperSlide>
          <Row className="hero-row">
              <Col lg="6" md="6" sm="12" xs="12">
              <div className="hero__img">
                <img src={heroBaklava} alt="Sweets" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12" xs="12" >
              <div className="hero__content">
              <h2>Sweeten Your Day with Our Irresistible Treats</h2>               
               <p>
                  Experience the Magic of Handcrafted Sweets and Desserts, Delivered to Your Doorstep.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">Order Now <i className="ri-arrow-right-line"></i></Link>
                </motion.button>
              </div>
            </Col>
     
          </Row>
           </SwiperSlide>


          </Swiper>
        </Container>
      </section>

      <section className="trending__products">
        <Container >
          <Row>
            <Col lg="12">
              <h2 className="section__title">Featured Products</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
            
              <ProductList data={trendingProducts.slice(0,4)} />
            )}
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="section__title ">Best Sales</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
              <ProductList data={bestSalesProducts.slice(0,4)} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home
