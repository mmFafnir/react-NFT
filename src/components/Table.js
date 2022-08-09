import React, { memo } from 'react';

import tableMask from '../img/page/table-mask.png';
import arrowTable from '../img/svg/table-arrow.svg';
import tableImg from '../img/page/table.svg';
import tableMobImg from '../img/page/table-mob.png'

const Table = () => {
    
    return (
        <section className="table section">
        <div className="container">
          <div className="table__head">
            <h2 className="table__title title">Utility <span className="title--red">map.</span></h2>
            <div className="table__head-mask">
              <img className="table__head-mask-img" src={tableMask} alt="mask"/>
              <p className="table__head-mask-text">Mandelbrot Mask Owner</p>
              <img className="table__head-mask-arrow" src={arrowTable} alt="arrow"/>
            </div>
          </div>
          <picture>
            <source srcSet={tableImg} type="image/svg" media="(min-width: 575px)"/>
            <source srcSet={tableMobImg} type="image/png" media="(max-width: 575px)"/>
            <img className="table__img" src={tableImg} alt="table"/>
          </picture>
        </div>
      </section>
    );
};

export default memo(Table);