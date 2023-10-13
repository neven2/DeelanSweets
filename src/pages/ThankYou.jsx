import React from 'react'
import { Container } from 'reactstrap'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ThankYou = () => {
    return (
        <Container>
            <section>
                <div className="text-center bg-light px-5 py-5" style={{fontSize:'50px', width:"100%"}} > 
                    <i className="ri-check-line py-3 text-success"></i>
                 <h1>
                Thank You For Ordering!
                </h1>
                <p className="py-3">Thank you for your order! We sincerely appreciate your support and trust in our products.</p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/home"> <i className="ri-arrow-left-line"></i> Back Home </Link>
                </motion.button>                </div>
    
            </section>
           

        </Container>
    )
}

export default ThankYou
