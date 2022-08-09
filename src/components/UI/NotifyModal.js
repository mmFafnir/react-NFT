

import React, { useEffect, useState } from 'react';
import Modal from './Modal';

const NotifyModal = ({  
    notify, setNotify
}) => {
    
    const [open, setOpen] = useState(false) 

    const handlerOnClick = () => {
        setOpen(false);
        
        setTimeout(() => {
            setNotify({
                text: '',
                status: false,

            })
        }, 500)
    }

    useEffect(() => {
        setOpen(notify.status)
    }, [notify])

    return (
        <Modal open={open} setOpen={setOpen} className='notify'>
          <p className="mint__title">{notify.text}</p>
          <button 
            onClick={handlerOnClick} 
            className='btn btn--green'
            style={{transform: 'translateX(-50%)', left: '50%', marginTop: '20px'}}
            >
            OK
          </button>
        </Modal>
    );
};

export default NotifyModal;