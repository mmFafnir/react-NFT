import React, { memo } from 'react';

import bgImg from '../img/page/main-bg2.png';
import bgMobImg from '../img/page/main-bg_mob3.png';
import maskImg1 from '../img/page/faq-mask-1.png';
import maskImg2 from '../img/page/faq-mask-2.png';

import { faq } from '../utils/faq';
import Accordion from './UI/Accordion';
import BgImg from './UI/BgImg';

const FAQ = () => {
    return (
      <section className="faq" id="faq">
        <BgImg url={bgImg} mobUrl={bgMobImg}/>
        <div className="container">
          <h2 className="faq__title title">FAQ.</h2>
          <div className="faq__wrap">
            <div className="faq__list">

                {
                    faq.map((item, index) => (
                        <Accordion key={index + item.question} title={item.question} text={item.answer}/>
                    ))
                }
              
            </div>
            <div className="faq__mask">
              <img className="faq__mask-item faq__mask-item--1" src={maskImg1} alt="mask"/>
              <img className="faq__mask-item faq__mask-item--2" src={maskImg2} alt="mask"/>
            </div>
          </div>
        </div>
      </section>
    );
};

export default memo(FAQ);