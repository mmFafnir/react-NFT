
import React, { useEffect, useState } from 'react';

import Modal from './Modal';

const NotifyWalletModal = ({  
    openValues = [], setOpenValues=[]
}) => {
    
    const [open, setOpen] = useState(false) 

    const handlerOnClick = () => {    
        setOpenValues.forEach(callback => {
            callback(false)
        })
    }

    useEffect(() => {
        if(openValues.find(item => item == true)) {
            setOpen(true)
        }
    }, [openValues])

    useEffect(() => {
        if(!open) {
            handlerOnClick()
        }
    }, [open])
    return (
        <Modal open={open} setOpen={setOpen}>
          <p className="mint__title">Please connect your wallet.</p>
          <button 
            onClick={()=> setOpen(false)} 
            className='btn btn--green'
            style={{transform: 'translateX(-50%)', left: '50%', marginTop: '20px'}}
           >
            OK
          </button>
        </Modal>
    );
};

export default NotifyWalletModal;