import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import empty from '../assets/images/empty.jpeg'
import { Link } from "react-router-dom";



const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
   const clearCart = () => {
    dispatch(cartActions.clearCart());
  };
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container> 
          <Row>
              {cartItems.length === 0 ? (
                
                <div className="text-center d-block">
                  <img src={empty} alt="empty cart " className="emptyImg"/>
                <h2 className="fs-4 text-center">No item added to the cart</h2>
                 <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/home">Back Home </Link>
                </motion.button>
                </div>
              ) : (
                <>
                <Col lg="9" className="table-responsive-sm text-center">
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>

                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
                </Col>
                   <Col lg="3">
              <div className="">
                <h6 className="d-flex align-items-center justify-content-between ">
                  Subtotal
                  <span className="fs-4 fw-bold">{totalAmount} IQD</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                taxes and shipping will calculate in checkout
              </p>
              <div>
                <button className="buy__btn w-100 ">
                  <Link to="/checkout">Checkout</Link>
                </button>
                <button className="buy__btn w-100 mt-3">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            </Col>
                </>

              )}
          </Row>
          
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  const IncreaseProduct = ()=>{
    dispatch(cartActions.incrementQuantity(item.id))
  }

   const decreaseProduct = ()=>{
    dispatch(cartActions.decrementQuantity(item.id))
  }

  return (
    <tr>
      <td>
        <img src={item.productImg} alt="product image" />
      </td>
      {/* <td>{item.productName}</td> */}
      <td>{item.price}IQD</td>
      <td>
      <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={IncreaseProduct}
          className="ri-add-circle-line px-2 text-success"
        ></motion.i>
        {item.qty}
      <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={decreaseProduct}
          className="ri-indeterminate-circle-line px-2 text-danger">
        </motion.i>
        </td>

      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={deleteProduct}
          className="ri-delete-bin-line text-danger"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
