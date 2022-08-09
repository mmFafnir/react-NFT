import React, { useRef,useCallback, memo } from 'react';

import Slider from './UI/Slider';

const imgs = [1,2,3,4,5,6,7,8, 9]
const Storyline = () => {

    
    return (
        <section className="storyline section" id='storyline'>
        <div className="container">
          <h2 className="storyline__title title"><span className="title--red">Story</span>line.</h2>
          <div className="storyline__body">
            <Slider slideImgs={imgs}/>
            <article className="storyline__item-info" data-swiper-parallax-duration="600" data-swiper-parallax-opacity="0.5">
             <div>

              <p>There is a connection between wisdom and certain «anonymity», the smart and the genius, the
                present
                and the future. Our community is a group of geniuses and very smart individuals who take action
                and
                make decisions to change our world for the better by resolving problems, inventing technology,
                developing things, etc. The entire community is divided into departments: math, physics,
                chemistry,
                genetics, medicine, engineering and nanotechnology, computer science, AI, cybersecurity, business,
                startups and so on. Each department will have a head, deputies, heads of operation, etc. elected
                by
                the members.</p>

              <p>Departments will have a hierarchical structure and interact with each other through meetings and
                  calls. All the positions will be occupied by those who hold an NFT from the collection and have
                  passed an anonymous interview. Those who feel uncertain with their skills or only begin their
                  journey will get educated through teaching courses on our web platform with help of other members.
              </p>

              <p>
                 Each mask has a Mandelbrot Set texture on it of different coordinates and colors, making a total
                 of
                 10,001 unique pieces of art living on Ethereum blockchain. Each 3D model comes with a 2D image of
                 the same mask worn on a painted male or female face, depending on a user’s choice.
              </p>
              <p>Let the world know that a genius may hide behind the mask!</p>
             </div>
              <button className="storyline__item-more" type="button">Read more</button>
            </article>
          </div>

        </div>
      </section>

    );
};

export default memo(Storyline);