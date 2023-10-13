import React, { useState ,useEffect } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import useGetData from "../custom-hooks/useGetData";
import "../styles/shop.css";
import Categories from '../components/Categories/Categories'

// import products from "../assets/data/products";
import ProductsListKurdish from "../components/UI/ProductListKurdish";

const ShopKurdish = () => {
  const { data: productKurdish, loading } = useGetData("productKurdish");
  const [AllProducts, setAllProducts] = useState([]);

     useEffect(() => {
    const filteredTrendingProducts = productKurdish.filter(
      item => item.category === "پاقلاوەی" || item.category === "کێک" || item.category ==="Dessert"
    );
    setAllProducts(filteredTrendingProducts);
  
  }, [productKurdish]);
  



  return (
    <Helmet title="Shop">
      <CommonSection title="بەرهەمەکان" />

      <section className="pt-0">
        <Container >
          <h3 className="mt-5 d-flex justify-content-end">هەموو بەرهەمەکان</h3>
          <Row>
           {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
            
              <ProductsListKurdish data={AllProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ShopKurdish;
