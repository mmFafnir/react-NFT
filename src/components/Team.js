import React, { memo, useState } from 'react';

import { teams } from '../utils/teams';

const Team = () => {

    const [quantity, setQuantity] = useState(8);
    const [currentTeams, setCurrentTeams] = useState(teams.slice(0, 8))
    const clickMoreHandler = () => {
        setQuantity(quantity+8)
        setCurrentTeams(teams.slice(0, quantity+8))
    }

    return (
        <section className="team section" id="team">
        <div className="container">
          <h2 className="team__title title"><span className="title--red">Our</span> team.</h2>
          <div className="team__wrap js_team">
            {
                currentTeams.map((persone, index) => {
                    return (
                        <div key={persone.career + persone.name} className="team__item">
                            <img className="team__item-img" src={persone.img} alt={persone.name}/>
                            <div className="team__item-info">
                                <p className="team__item-name">{persone.name}</p>
                                <p className="team__item-post">{persone.career}</p>
                            </div>
                            <p className="team__item-descr">{persone.desc}</p>
                        </div>
                    )
                })
            }

          </div>
          <div className="team__btn-wrap">
            <button
                onClick={clickMoreHandler} 
                className={`team__btn btn btn--green js_team-more ${currentTeams.length === teams.length ? 'hidden' : ''}`} 
                type="button"
            >
                more
            </button>
          </div>
        </div>
      </section>
    );
};

export default memo(Team);