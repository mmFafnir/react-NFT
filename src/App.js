import {useEffect, useState} from 'react';
import {Web3ReactProvider} from '@web3-react/core'
import {ethers} from 'ethers'

import Header from './components/Header';
import Hero from './components/Hero';
import Storyline from './components/Storyline';
import Elements from './components/Elements';
import Facts from './components/Facts';
import RoudMap from './components/RoudMap';
import Table from './components/Table';
import Team from './components/Team';
import FAQ from './components/FAQ.js';

import ModalForm from './components/ModalForm';
import ModalWallet from './components/ModalWallet';
import ModalMint from './components/ModalMint';
import ModalGender from './components/ModalGender';
import NotifyModal from './components/UI/NotifyModal';
import NotifyWalletModal from './components/UI/NotifyWalletModal';

import { checkWalletConnect } from './scripts/checkWalletConnect';
import './App.css';

export const CONTRACT_ADDRESS = '0xd46050B02c2E6ba1dcbfdC2E4800Db948ce0C50F'
function App() {

    const [walletConnect, setWalletConnect] = useState(false);

    //Стейты модалок
    const [formOpen, setFormOpen] = useState(false);
    const [walletOpen, setWalletOpen] = useState(false);
    const [mintOpen, setMintOpen] = useState(false);
    const [genderOpen, setGenderOpen] = useState(false);
    const [notifyModal, setNotifyModal] = useState({text: '', status: false});


    const getLibrary = (providerInitial) => {
        const library = new ethers.providers.Web3Provider(providerInitial);
        library.pollingInterval = 8000; // frequency provider is polling
        return library;
    };

    const updateBgData = () => {
        const bgMain = document.querySelectorAll('.main-bg');
        const arrBg = [];
        bgMain.forEach(bg => {
            let rect = bg.getBoundingClientRect();
            const top = rect.top + document.body.scrollTop;
            const bottom = rect.bottom + document.body.scrollTop;
            const obj = {target: bg, top: top, bottom: bottom};
            arrBg.push(obj)
        })
        paralaxBgMain(arrBg)
    }

    const paralaxBgMain = (posBg) => {
        document.addEventListener('scroll', () => {
            posBg.forEach(item => {
                if (window.scrollY > item.top && item.bottom > window.scrollY) {
                    const rect = item.target.getBoundingClientRect();
                    item.target.classList.add('focus');
                    item.target.style.top = `${rect.top * 0.2}px`;
                } else {
                    item.target.classList.remove('focus');
                    item.target.style.top = null;
                }
            })
        })
    }

    const connectWalletHandler = async () => {
        const isConnect = await checkWalletConnect();
        if(isConnect) {
            setWalletConnect(true)
        } else {
            setWalletConnect(false)
        }
    }
    useEffect(() => {
        setTimeout(() => {
            updateBgData();
        }, 2000)
        window.addEventListener('resize', () => {
            setTimeout(() => updateBgData(), 100)
        })
        connectWalletHandler()
        
    }, [])

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <div className="App wrapper">
                <Header setGenderOpen={setGenderOpen} setWalletOpen={setWalletOpen}/>
                <main>
                    <Hero
                        setFormOpen={setFormOpen}
                        setMintOpen={setMintOpen}
                        walletConnect={walletConnect}
                        setNotifyMint={() => setNotifyModal({
                            text: `Public sale hasn't started yet. Learn more in the FAQ section. Hit "get whitelisted" button to apply`,
                            status: true,
                        })}
                    />
                    <Storyline/>
                    <Elements/>
                    <RoudMap/>
                    <Facts/>
                    <Table/>
                    <Team/>
                    <FAQ/>
                </main>

                {
                    walletConnect ? (
                        <>
                        <ModalForm
                            open={formOpen}
                            setOpen={setFormOpen}
                            setNotifyModal={setNotifyModal}
                        />
                        <ModalMint open={mintOpen} setOpen={setMintOpen}/>
                        <ModalGender open={genderOpen} setOpen={setGenderOpen}/>
                        </>
                    ) : (
                        <NotifyWalletModal 
                            openValues={[formOpen, mintOpen, genderOpen]}
                            setOpenValues={[setFormOpen, setMintOpen, setGenderOpen]}
                        />                           
                    )
                }
                <ModalWallet open={walletOpen} setOpen={setWalletOpen} setWalletConnect={setWalletConnect}/>
                <NotifyModal notify={notifyModal} setNotify={setNotifyModal}/>

            </div>
        </Web3ReactProvider>
    );
}

export default App;
