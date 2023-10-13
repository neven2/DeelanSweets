import React, { useState ,useRef} from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { ToastContainer, toast } from "react-toastify";
import '../styles/contact.css'
import emailjs from '@emailjs/browser';


const ContactKurdish = () => {
  
  const form =useRef()
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f1srewk', 'template_x7jwykv', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      toast.success("Thank you for Contacting us !");
      e.target.reset()
  };

  
    return (
      
      <Helmet title=" Contact">
      <CommonSection title=" پەیوەندیمان پێوە بکە" />
          <section className="contact-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="wrapper">
                  <div className="row no-gutters">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="contact-wrap w-100 p-lg-5 p-4">
                        <h3 className="mb-4">نامەیەکمان بۆ بنێرە</h3>
                        <form
                          id="contactForm"
                          className="contactForm"
                          ref={form}
                          onSubmit={sendEmail}
                        >
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  placeholder="Name"
                            
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  placeholder="Email"
                                
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  placeholder="Subject"
                                  
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea
                                  type="text"
                                  className="form-control"
                                  name="message"
                                  placeholder="Message"
                                  cols="30"
                                  rows="6"
                                
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12 ">
                              <div className="form-group">
                                <input
                                  type="submit"
                                  value="Send Message"
                                  className="btn btn-primary"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="d-flex align-items-stretch col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="info-wrap w-100 p-lg-5 p-4 img">
                        <h3>پەیوەندیمان پێوە بکە</h3>
                        <p className="mb-4">
ئێمە ئامادەین بۆ هەر پێشنیارێک یان تەنها بۆ ئەوەی چاتێکمان هەبێت                              </p>
                        <div className="dbox w-100 d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <i className="ri-map-pin-line"></i>
                          </div>
                          <div className="text pl-3">
                            <p>
                              <span> ناونیشان 1:</span>  هەولێر – شەقامی کۆیە

                            </p>
                          </div>
                        </div>
                        <div className="dbox w-100 d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <i className="ri-map-pin-line"></i>
                          </div>
                          <div className="text pl-3">
                            <p>
                              <span> ناونیشان 2:</span>
                              <a>  هەولێر – شەقامی نەورۆز
                                </a>
                            </p>
                          </div>
                        </div>
                        <div className="dbox w-100 d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                          <i className="ri-mail-line"></i>
                          </div>
                          <div className="text pl-3">
                            <p>
                              <span>ئیمەیل:</span>
                              <a href="deelan_74@yahoo.com">
                                  deelan_74@yahoo.com
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="dbox w-100 d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <i className="ri-phone-line"></i>
                          </div>
                          <div className="text pl-3">
                            <p>
                              <span>تەلەفۆن:</span>
                              <a href="#">  0750 999 1002  </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </Helmet>
    )
}

export default ContactKurdish
