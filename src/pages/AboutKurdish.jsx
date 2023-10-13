import React from 'react'
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import aboutImg from '../assets/images/deelanshop.png'
import historyVidoe from '../assets/images/interview.mp4'
import '../styles/About.css'
import Services from '../services/ServicesKurdish' 
import { motion } from "framer-motion";

const AboutKurdish = () => {

    return (
       <Helmet title="About">
      <CommonSection title="دەربارەی ئێمه" />
      <section>
          <Container>
           <Row>
               <Col lg="6" md="6" sm="12" xs="12">
              <div className="hero__img">
                <img src={aboutImg} alt="Sweets" />
              </div>
            </Col>
            <Col lg="6" md="6" sm="12" xs="12">
              <div className="About__content px-3 float-end">
                <h6>دەربارەی شیرینیەکانی دیلان</h6>
                <h3 className="pt-3">مێژووی دیلان  </h3>
                <p className="pt-lg-4 pt-5">
         مێژووی دوکانی شیرینییەکەمان چیرۆکێکە لە خولیا، ڕەسەنێتی و چێژ. هەموو شتێک لە ساڵی 1993ـوە دەستی پێکرد، کاتێک کاتێک عەبدولڕەحمان ڕەمەزان شەعبان بڕیاری دا خۆشەویستیی خۆی بۆ دروستکردنی شیرینی و کاری هەویر لەگەڵ جیهاندا بەش بکات. لە دوکانێکی بچوکەوە دەستی پێکرد، بەڵام کۆڵنەدەرییان لە دروستکردنی باشترین جۆری شیرینیدا وای کرد زوو بەناوبانگ ببن و کڕیاری تایبەت بە خۆیان پەیدا بکەن.
        ندە و خۆشی. ئاهەنگگێڕان و یادگاریی جوان لەگەڵ شیرینییەکانماندا دروست کراون.
ئەمڕۆ ئێمە هەر لەسەر هەمان ڕێبازین و پابەندین بە دروستکردنی چەندین جۆر شیرینی کە شادی دەهێنن بۆ هەموو ئەو کەسانەی دێنە فرۆشگەکانی ئێمەوە.
تۆش وەرە ناو بەهەشتی شیرینییەکانمانەوە و چێژ وەربگرە لەو تامە ڕەسەن و نایابانەی بە درێژایی 30 ساڵ ئێمەی کردووەتەوە ئەو شوێنەی کڕیاران بە خۆشەویستییەوە ڕووی تێدەکەن.
                </p>
                  <motion.button whileTap={{ scale: 1.2 }} className="buy__btn mb-5">
                  <a href="#video">زیاتر بزانە</a>
                </motion.button>
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
          <video width="100%"  controls playing id="video">
            <source src={historyVidoe} type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </video> 
          </Container> 
      </section>
      </Helmet>
    )
}

export default AboutKurdish
