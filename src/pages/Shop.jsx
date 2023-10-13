import React, { useState ,useEffect } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import useGetData from "../custom-hooks/useGetData";
import "../styles/shop.css";
import Categories from '../components/Categories/Categories'

// import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

const Shop = () => {
  const { data: products, loading } = useGetData("products");
  const [AllProducts, setAllProducts] = useState([]);

     useEffect(() => {
    const filteredTrendingProducts = products.filter(
      item => item.category === "Baklava" || item.category === "Cake" || item.category ==="Dessert"
    );
    setAllProducts(filteredTrendingProducts);
  
  }, [products]);
  


  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section className="pt-0">
        <Container >
          <h3 className="mt-5">All Products</h3>
          <Row>
           {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
            
              <ProductsList data={AllProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
