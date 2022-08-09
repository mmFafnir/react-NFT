import React, { memo } from 'react';
import { facts } from '../utils/facts';

import bgImg from '../img/page/main-bg3.png';
import bgMobImg from '../img/page/main-bg_mob2.png';
import BgImg from './UI/BgImg';

const imgsNum = [1, 2, 3, 4, 5]
const Facts = () => {
    return (
        <section className="fact section">
        <BgImg url={bgImg} mobUrl={bgMobImg} className='top-50'/>
         <div className="container">
           <div className="fact__wrapper">
            {
                facts.map((fact, index) => (
                    <div key={index} className="fact__item">
                        <span className="fact__item-num">{index + 1}</span>
                        <p className="fact__item-val">{fact.quantity}</p>
                        <p className="fact__item-text">{fact.text}</p>
                        {
                            index+1 !== facts.length ? <span className="fact__item-line"></span> : null
                        }
                        
                    </div>

                ))
            }
           </div>
           <div className="fact__mask">
            {
                imgsNum.map((num) => ( 
                <div key={num} className="fact__mask-item">
                    <img src={`./img/facts/fact-${num}.png`} alt="mask"/>
                </div>
               ))
            }
           </div>
           <img className="fact__mask-mob" src="./img/facts/fact-mob.png" alt="masks"/>
           <p className="fact__sign">To make each mask from the collection an absolutely unique, hand-picked piece of art</p>
         </div>
       </section>
    );
};

export default memo(Facts);