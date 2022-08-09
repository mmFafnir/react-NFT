import React, { memo } from 'react';

import heroBg from '../img/page/hero-bg2.png';
import heroBgMob from '../img/page/hero-mob-bg.png';
import MintIcon from './UI/MintIcon';

const Hero = ({
  setFormOpen, setMintOpen, setNotifyMint, walletConnect
}) => {
    return (
    <section className="hero" id="hero">
        <picture>
          <source srcSet={heroBg} type="image/png" media="(min-width: 575px)"/>
          <source srcSet={heroBgMob} type="image/png" media="(max-width: 575px)"/>
          <img className="hero__bg" src={heroBg} alt="bg"/>
        </picture>
        <div className="container">
          <div className="hero__wrap">
            <p className="hero__overhead">«No matter your nationality, skin color, age, or gender —<br/> you can rule the
              whole
              world behind the mask»</p>
            <h1 className="hero__title title">Mandelbrot Masks <span className="title--red">NFT</span> collection.</h1>
            <p className="hero__subtitle">Collection of 10,001 uniquely rendered 3D facemasks to unite geniuses and
              educate
              those, who want to be a part of a community that will make the world a better and safer place.<br/>
              Who hides behind your mask?</p>
            <div className="hero__btns">
              <button 
                onClick={() => setFormOpen(prev => !prev)}
                className="hero__btn btn btn--red" 
                data-modal="form"
              >
                  <span>get whitelisted</span>
              </button>
              <MintIcon 
                setNotifyMint={setNotifyMint} 
                setMintOpen={setMintOpen} 
                walletConnect={walletConnect}
              />
            </div>
          </div>
        </div>
    </section>
    );
};

export default memo(Hero);
