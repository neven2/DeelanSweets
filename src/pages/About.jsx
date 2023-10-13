import React from 'react'
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import aboutImg from '../assets/images/deelanshop.png'
import historyVidoe from '../assets/images/interview.mp4'
import '../styles/About.css'
import Services from '../services/Services' 
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {

//  const [src, setSrc] = useState("");

//   const handleChange = (event) => {
//     try {
//       // Get the uploaded file
//       const file = event.target.files[0];

//       // Transform file into blob URL
//       setSrc(URL.createObjectURL(file));
//     } catch (error) {
//       console.error(error);
//     }

    return (
       <Helmet title="About">
      <CommonSection title="About Us" />
      <section>
          <Container>
           <Row>
            <Col lg="6" md="6" sm="12" xs="12">
              <div className="About__content px-3">
                <h6>About Deelan Sweets</h6>
                <h3 className="pt-3">What is the history of Deelan  </h3>
                <p className="pt-lg-4 pt-5">
                The history of our sweet shop is a tale of passion,tradition, and delight. 
                It all began 1993 when Abdulrahman Ramadan Shaaban set out on a mission to share 
                their love for confectionery with the world. Starting from a small corner shop,
                their dedication to crafting exceptional sweets quickly gained popularity 
                and earned a loyal customer base.
                Through the years, our shop has witnessed countless smiles, 
                celebrations, and cherished memories created
                over our delectable treats.
                Today, as we continue to honor our heritage, 
                we remain committed to offering a wide
                array of handcrafted sweets that bring
                joy to all who enter our doors. 
                Step into our sweet haven and indulge 
                in the timeless flavors that have made us
                a beloved destination for 30 years.
                </p>
                  <motion.button whileTap={{ scale: 1.2 }} className="buy__btn mb-5">
                  <a href="#testimonials">Know More</a>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6" sm="12" xs="12">
              <div className="hero__img">
                <img src={aboutImg} alt="Sweets" />
              </div>
            </Col>
           
          </Row>
          </Container>
      </section>
      <Container>
        <Services/>
      </Container>
      <section>
        <Container>
          <video width="100%"  controls playing>
            <source src={historyVidoe} type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </video> 
          </Container> 
      </section>
      </Helmet>
    )
}

export default About 
