import React, {useRef, useCallback} from 'react';

import { Swiper , SwiperSlide  } from 'swiper/react';
import SwiperCore, { Lazy, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


const Slider = ({
  slideImgs = []
}) => {
    const sliderRef = useRef(null);

    SwiperCore.use([Lazy, Navigation])
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <Swiper 
            lazy={true}
            spaceBetween={50}
            ref={sliderRef}
            slidesPerView={1}
            className="storyline__slider"
            
          >
            <div className="swiper-wrapper">
            {
              slideImgs.map(img => (
                <SwiperSlide key={img} className="swiper-slide">
                  <div className="storyline__item">
                    <div className="storyline__gallery">
                      <div className="storyline__gallery-mask">
                        <img className='swiper-lazy' data-src={`./img/storyline/masks/${img}.png`} alt="mask"/>
                      </div>
                      <div className="storyline__gallery-element">
                        <img className='swiper-lazy' data-src={`./img/storyline/texture/${img}.jpg`} alt="element"/>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>

              ))
            } 
            </div>

            <div className="storyline__btns">
              <button 
                onClick={handleNext} 
                className="storyline__slider-btn storyline__slider-next" 
                type="button"
              >
                <svg viewBox="0 0 91 32">
                  <path d="M0 16H90M90 16L75 1M90 16L75 31"/>
                </svg>

              </button>
              <button 
                onClick={handlePrev} 
                className="storyline__slider-btn storyline__slider-prev" 
                type="button"
            >
                <svg viewBox="0 0 91 32">
                  <path d="M91 16H1M1 16L16 1M1 16L16 31" />
                </svg>
              </button>
            </div>
          </Swiper>
    );
};

export default Slider;