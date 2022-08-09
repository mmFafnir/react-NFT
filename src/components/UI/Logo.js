import React from 'react';

import LogoImg from '../../img/svg/logo.svg'

const Logo = () => {
    return (
        <div className="header__logo logo">
            <a href="#hero">
                <img src={LogoImg} alt="логотип"/>
            </a>
        </div>
    );
};

export default Logo;