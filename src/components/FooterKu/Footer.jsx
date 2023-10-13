import React from "react";
import "../Footer/footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
       <Col lg="3" md="4" className="flex-end " >
            <div className="footer__quick-links">
              <h4 className="quick__links-title" >پەیوەندی</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>هەولێر – شەقامی کۆیە
                 هەولێر – شەقامی نەورۆز
                </p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-whatsapp-line"></i>
                  </span>
                  <p>+964 0750 999 1002</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-end gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>deelan_74@yahoo.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>



          <Col lg="2" md="3" className="mb-4 justify-content-end">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">بەستەرە بەسودەکان</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">کڕین</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">عەرەبانە</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">چوونەژوورەوە</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">سیاسەتی تایبەتمەندی</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="3" className="mb-4 justify-content-end">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">هاوپۆلەکانی سەرەوە</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">کاری هەویر</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">پاقلاوەی</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">کێک</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">شیرینی</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>


          
             <Col lg="4" className="mb-4 justify-content-end" md="6">
            <div className="logo">
              <div>
                <h1 className="text-white"> شیرینی ديلان</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
         خۆت نوقم بکە لە جۆرەکانی کێکی ئاسمانیمان
پێکەنین و شۆکۆلاتە هەموویان لە سەر پەنجەکانت بەردەستن ئارەزووەکانت ڕازی بکە و چێژ لە تامی نایاب وەربگرە لەگەڵ گەیاندنی دەرگا بۆ ئەزموونێکی لێخۆشبوو وەک هیچ ئەزموونێکی تر.

            </p>
            <div className="social-media-icons pt-3 d-flex justify-content-start align-items-center text-white ">
              <a href ="https://www.facebook.com/deelansweet/"><i className="ri-facebook-line "></i></a>
              <a href="https://www.instagram.com/deelan_sweets/"> <i className="ri-instagram-line px-2"></i></a>
              <a href="+964 0750 999 1002"><i class="ri-whatsapp-line px-2"></i></a>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by Neven Bedr. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
