import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/mixedpistachiobaklava.png";
import heroCake from "../assets/images/cakehome.png";
import heroBaklava from "../assets/images/cashewkunafa.png";
import ProductListKurdish from "../components/UI/ProductListKurdish";
import { Swiper, SwiperSlide } from 'swiper/react';
import useGetData from "../custom-hooks/useGetData";
import Categories from '../components/CategoriesKurdish/Categories'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from 'swiper/modules';import HeaderKu from '../components/HeaderKu/Header'
const HomeKurdish = () => {
  const { data: products, loading } = useGetData("productKurdish");

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);


  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      item => item.category === "پاقلاوەی"
    );

    const filteredBestSalesProducts = products.filter(
      item => item.category === "کێک"
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
        autoplay={{ delay: 2000 }}
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
                <h2>ڕۆژەکەت شیرینتر بکە: لەگەڵ دیلان بە ئۆنلاین باشترین شیرینییەکان بکڕە!  </h2>
                <p>
                 باشترین شیرینییەکان دەگەینرێنە دەرگای ماڵەکەت – ئێستا لە دیلانەوە نایابترین شیرینییەکان داوا بکە
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn float-end">
                  <Link to="/shopKu"> <i className="ri-arrow-left-line"></i>داوای بکە  </Link>
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
                <h2>ڕۆژەکەت شیرینتر بکە: لەگەڵ دیلان بە ئۆنلاین باشترین شیرینییەکان بکڕە!  </h2>
                <p>
                  باشترین شیرینییەکان دەگەینرێنە دەرگای ماڵەکەت – ئێستا لە دیلانەوە نایابترین شیرینییەکان داوا بکە

                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn float-end">
                  <Link to="/shopKu"><i className="ri-arrow-left-line"></i>داوای بکە</Link>
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

            <Col lg="6" md="6" sm="12" xs="12" className="float-end">
              <div className="hero__content">
                <h2>ڕۆژەکەت شیرینتر بکە: لەگەڵ دیلان بە ئۆنلاین باشترین شیرینییەکان بکڕە! </h2>
                <p>
                  باشترین شیرینییەکان دەگەینرێنە دەرگای ماڵەکەت – ئێستا لە دیلانەوە نایابترین شیرینییەکان داوا بکە

                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn float-end">
                  <Link to="/shopKu"><i className="ri-arrow-left-line"></i>داوای بکە  </Link>
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
              <h2 className="section__title float-end">شیرینی تایبەت</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
            
              <ProductListKurdish data={trendingProducts.slice(0,4)} />
            )}
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="section__title float-end">باشترین فرۆشتن</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
              <ProductListKurdish data={bestSalesProducts.slice(0,4)} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default HomeKurdish
