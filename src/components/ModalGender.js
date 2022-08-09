
import React, { memo, useRef, useState, useEffect } from 'react';
import { getGender, setGender } from '../scripts/gender';
import Modal from './UI/Modal';
// import { ethers } from 'ethers'
// import { getProvider } from "./ModalWallet";



const ModalGender = ({
    open,
    setOpen
}) => {

    const formRef = useRef(null);
    
    const [tokens, setTokens] = useState([])    
    const [loading, setLoading] = useState(false);
    

    //отправка новых измененных токенов 
    const sendTokens = async (res) => {
        try {
            if(res.length === 1) {
                const token = res[0]; //токен
                //код с вызовом функции для обработки одного токена
                //...
                
            } else {
                // код с обработкой массива токенов: res = массив токенов 
                // ...

            }
            
        } catch (error) {
            
        }
        setOpen(false)
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;
        const res = [];
        const inputs = form.querySelectorAll('input');
        //собираю все значения инпутов в массив res
        inputs.forEach(input => {
            if(input.checked){
                const token = input.dataset.id; 
                const checked = input.dataset.gender === 'female' ? true : false;
                if(tokens.find(item => item.token == token).female !== checked) {
                    res.push(token)
                }
            }
        })
        sendTokens(res)
         
    }
    const getTokens = async () => {
        setLoading(true);
        const tokens = await getGender();
        setTokens(tokens);
        setLoading(false);
    }
    useEffect(() => {
        if(open) {
            getTokens()
        }   
    }, [open])

    return (
        <Modal open={open} setOpen={setOpen} className='gender'>
            <form onSubmit={handlerSubmit} ref={formRef} className="gender__body">
               <p className="gender__title">Choose you NTF's gender. This is how it will display on other platforms</p>
                <div className="gender__content">
                    {
                        !loading ? (
                            tokens.length > 0 ? (
                                tokens.map(item => (
                                    <div key={item.token} className="gender__item">
                                        <h3>Mask#{item.token}</h3>
                                        <div className="gender-radio">
                                            <p className="gender-radio__text">male</p>
                                                <div className="gender-radio__check" >
                                                    <input 
                                                        type="radio" 
                                                        data-gender='male' 
                                                        data-id={item.token}
                                                        id={`${item.token}-male`} 
                                                        name={`${item.token}`} 
                                                        defaultChecked={!item.famale}     
                                                    />
                                                    <label htmlFor={`${item.token}-male`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                        <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>
                                                        </svg>
                                                    </label>
                                            </div>
                                        </div>
                                        <div className="gender-radio">
                                            <p className="gender-radio__text">female</p>
                                            <div className="gender-radio__check" >
                                                <input 
                                                    type="radio" 
                                                    data-gender='female' 
                                                    data-id={item.token}
                                                    id={`${item.token}-female`} 
                                                    name={`${item.token}`} 
                                                    defaultChecked={item.famale}    
                                                />
                                                <label htmlFor={`${item.token}-female`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>
                                                    </svg>
                                                </label>
                                            </div>
                                        </div>
                                    </div>


                                ))

                            ) : (
                                <p className='gender__text'>Please buy your first token</p>
                            )
                        ) : (<p className='loading'>loading...</p>)
                    }
                </div>
                <button className="btn gender__btn btn--green">OK</button>
            </form>
        </Modal>
    );
};

export default memo(ModalGender);
