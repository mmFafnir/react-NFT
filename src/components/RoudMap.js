import React, { memo } from 'react';

import { roudMapArr } from '../utils/roudmap';
const RoudMap = () => {
    return (
        <section className="map" id="roadmap">
        <div className="container">
          <h2 className="map__title title"><span className="title--red">Road</span>Map</h2>
          <p className="map__subtitle">Not only are we set to control the future of the world, we will educate those who are
            willing to be among us, be smarter and successful. Each holder of a Mandelbrot Mask will gain member access
            to
            all the meetings, benefits, exclusive materials and more.
            {/* <br>The team will create a token of our own inside
            our
            ecosystem using the fund and money from the upcoming NFT projects. Each Mandelbrot Mask holder with get a
            share.<br>
            Used to buy merch, upcoming NFTs, invest in community projects.<br>
            Earned by contributing to the projects and holding the original NFTs. */}
        </p>
          <div className="map__wrapper">

            {
                roudMapArr.map((item, index) => (
                    <div key={index} className="map__item">
                        <div className="map__item-img">
                            <img src={`./img/roudmap/map/map-${index+1}.png`} alt="img"/>
                        </div>
                        <div className="map__item-head">
                            <p className="map__item-head-text">{item.code}</p>
                            <img className="map__item-head-icon" src={item.icon} alt="check"/>
                        </div>
                        <ul className="map__list">
                            {
                                item.lists.map((list, index) => (
                                    <li key={index} className="map__list-item">
                                        <p className="map__list-item-title">{list.title}</p>
                                        <article className="map__list-item-text">
                                            <p>{list.text}</p>
                                        </article>
                                    </li>

                                ))
                            }
                        </ul>
                    </div>

                ))
            }

       
          </div>
          <p className="map__sign">Overall, we will build an ecosystem of geniuses who will make the world a better place.
            We
            will educate those
            who want to become a genius.</p>
        </div>
      </section>

    );
};

export default memo(RoudMap);