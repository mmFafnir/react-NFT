

import React from 'react';

const BgImg = ({
    url, mobUrl, className=''
}) => {
   
    
    return (
        <picture>
            <source srcSet={url} type="image/png" media="(min-width: 500px)"/>
            <source srcSet={mobUrl} type="image/png" media="(max-width: 500px)"/>
            <img className={`main-bg ${className}`} src={url} alt="main-bg"/>
        </picture>
    );
};

export default BgImg;