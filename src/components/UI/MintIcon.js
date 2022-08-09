import React, { memo } from 'react';
import { checkStartSale } from '../../scripts/checkStartSale';


const MintIcon = ({
    setMintOpen,  setNotifyMint, walletConnect
}) => {
 
    const handlerOnClick = async () => {
        console.log(walletConnect)
        if(!walletConnect) {
            setMintOpen(prev => !prev)
            return
        } 

        const isStarted = await checkStartSale();
        //проверка начались ли продажи
        if (isStarted > 0) {
            //начались
            setMintOpen(prev => !prev)
        } else {
            //не начались
            setNotifyMint()
        }
        
    }

    return (
        <button 
            onClick={handlerOnClick}
            className="hero__btn btn btn--green modal-btn" 
            data-modal="mint-form"
        >
            <span>mint</span>
        </button>
    );
};

export default memo(MintIcon);