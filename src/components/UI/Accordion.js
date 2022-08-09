import React, { useRef, useState } from 'react';

const Accordion = ({
    title, text
}) => { 
    const [open, setOpen] = useState(false);
    const [maxHeight, setmMaxHeight] = useState(0);

    const refContent = useRef(null)

    const clickOpenHandler = () => {
        setOpen(!open)
        if(!open) {
            setmMaxHeight(refContent.current.offsetHeight)
        } else {
            setmMaxHeight(0)
        }
    }
    return (
        <div className={`faq__item ${open ? 'open' : ''}`}>
            <button 
                onClick={clickOpenHandler}
                className="faq__question accordion__control" 
                type="button" 
                aria-expanded={open}
            >
              {title}
              <span className="faq__question-icon"></span>
            </button>
            <div 
                className="faq__answer accordion__content" 
                style={{maxHeight: `${maxHeight}px`}} aria-hidden={!open}
            >
              <p ref={refContent}>{text}</p>
            </div>
        </div>
    );
};

export default Accordion;