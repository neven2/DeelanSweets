import React ,{useEffect , useState} from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { auth, db } from '../firebase.config'
import "../styles/checkout.css";
import { addDoc, collection } from "firebase/firestore";
import { useSelector , useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import { cartActions } from "../redux/slices/cartSlice";


const Checkout = () => {
  const dispatch = useDispatch();
  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => state.cart.cartItems);
    const navigate = useNavigate();
    const clearCart = () => {
    dispatch(cartActions.clearCart());
    };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');




  const placeOrder = async () => {
    const addressInfo = [{
      name,
      email,
      address,
      city,
      phone,
      additionalInfo,
    }];

    console.log(addressInfo);

    const orderInfo = {
      cartItems,
      addressInfo,
    };

    try {
      const result = await addDoc(collection(db, "orders"), orderInfo);
      //  toast.success('Your order has been placed successfully. Thanks for visiting us.');
      navigate('/thankYou')
       //  setTimeout(() => {
      //   }, 1000)
    } catch (error) {
      toast.error("your order Faild please try again");
    }
    setName('');
    setPhone('');
    setAdditionalInfo('');
    setCity('');
    setEmail('');
    setAddress('');
  };







  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          {successMsg && <div className='success-msg'>{successMsg}</div>}
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name" required
                        onChange={(e) => setName(e.target.value)} value={name}/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email" required
                        onChange={(e) => setEmail(e.target.value)} value={email}/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Phone number"required
                        onChange={(e) => setPhone(e.target.value)} value={phone}/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="City" required
                        onChange={(e) => setCity(e.target.value)} value={city}
                         />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Address" required
                        onChange={(e) => setAddress(e.target.value)} value={address}/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Additional Information " required
                        onChange={(e) => setAdditionalInfo(e.target.value)} value={additionalInfo}/>
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    free shipping
                  </span>
                  <span>$0</span>
                </h6>

                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <button className="buy__btn auth__btn w-100"
                onClick={()=>{
                  placeOrder() 
                  clearCart()
}
                }
                >
                  Place an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
