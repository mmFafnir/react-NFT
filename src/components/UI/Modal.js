
import React, { useEffect, useState } from 'react';
import { getScrollbarWidth } from '../../scripts/getScrollWidth';

const Modal = ({
    children, setOpen, open, className, callback = null
}) => {

    const [paddingRight, setPaddingRight] = useState(0);

    const handlerOnClick = () => {
        setOpen(false);
        if(callback) {
            callback()
        }
        
    }
    useEffect(() => {
        setTimeout(() => {
            const scrollbarWidth = getScrollbarWidth();
            if(open) {
                document.body.classList.add('scroll-lock');
                if(window.innerWidth > 700) {
                    document.body.style.paddingRight = `${scrollbarWidth}px`;
                    document.querySelector('.header').style.paddingRight = `${scrollbarWidth}px`;
                    setPaddingRight(scrollbarWidth);
                }
            } else {
                document.body.classList.remove('scroll-lock');
                document.body.style.paddingRight = '0px';
                document.querySelector('.header').style.paddingRight = '0px';
                setPaddingRight(0);
            }
        }, 300)
    }, [open])

    return (
        <div
            style={{paddingRight: `${paddingRight}px`}} 
            className={`modal modal--${className}t ${open ? 'modal--active' : ''}`}
        >
            <div className="modal__wrapper">
                <div className="modal__overlay"></div>
                    <div className="modal__content">
                    {children}
                    <button 
                        onClick={handlerOnClick}
                        className="modal__close-btn btn-reset" 
                        type="button" 
                        aria-label="Закрыть попап"
                    ></button>
                </div>
            </div>
        </div>
    );
};

export default Modal;