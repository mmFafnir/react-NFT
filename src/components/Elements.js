import React, { memo } from 'react';
import bgImg from '../img/page/main-bg1.png';
import bgMobImg from '../img/page/main-bg_mob1.png'; 
import BgImg from './UI/BgImg';



const Elements = () => {

    const elementsArr = [
        {
            title: 'Water',
            value: 'Ordinary'
        }, 
        {
            title: 'Air',
            value: 'Uncommon'
        },
        {
            title: 'Fire',
            value: 'Rare'
        },
        {
            title: 'Earth',
            value: 'Epic'
        },
        {
            title: '????',
            value: 'Legendary'
        },
    ]


    return (
     <section className="elements section">
        <BgImg url={bgImg} mobUrl={bgMobImg}/>
        <div className="container">
          <div className="elements__head">
            <h2 className="elements__title title"><span className="title--red">Elements</span> of the Mandelbrot Masks.</h2>
            <p className="elements__head-text">The Mandelbrot Masks are associated with science and therefore nature. Guess
              which element your mask will have?</p>
          </div>
          <div className="elements__wrap">
            {
                elementsArr.map((elem, index) => (
                    <div key={elem.title + elem.value} className={`elements__item elements__item--${elem.title.toLocaleLowerCase()}`}>
                        <div className="elements__item-head">{elem.title}</div>
                        <div className="elements__item-masks">
                            <img src={`./img/elements/elements-${index + 1}.png`} alt="masks"/>
                        </div>
                        <div className="elements__item-footer">{elem.value}</div>
                    </div>
                    
                ))
            }
          </div>
          <p className="elements__sign">All other features and their rarity are up to you to discover!</p>
        </div>
      </section>

    );
};

export default memo(Elements);