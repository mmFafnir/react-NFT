

import React, { useState } from 'react';



const GenderIcon = ({
    setModal
}) => {

    const [genderMan, setGenderMan] = useState(true);

    const handlerOnClick = () => {
        setGenderMan(!genderMan);
        setModal(prev => !prev)
    }

    return (
        <button
            onClick={handlerOnClick} 
            className="header__gender modal-btn" 
            data-modal="gender"
        >   
        {
            genderMan ? (
                <svg className="header__gender-man" viewBox="0 0 40 40" fill="none">
                    <path d="M25.8338 15.8333L31.6671 10M31.6671 10V14.1667M31.6671 10H27.5004M28.3338 21.6667C28.3338 26.269 24.6028 30 20.0004 30C15.3981 30 11.6671 26.269 11.6671 21.6667C11.6671 17.0643 15.3981 13.3333 20.0004 13.3333C24.6028 13.3333 28.3338 17.0643 28.3338 21.6667Z"  strokeWidth="0.7"/>
                </svg>

            ) : (
                <svg className="header__gender-woman" width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 11V13.5M6 13.5V16M6 13.5H8.5M6   13.5H3.5" strokeWidth="0.7"/>
                </svg>
            )
        }
        </button>
    );
};

export default GenderIcon;