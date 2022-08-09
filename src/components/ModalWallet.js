
import React, { memo } from 'react';

import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import {ethers} from "ethers";
import { useWeb3React } from '@web3-react/core'

import Modal from './UI/Modal';


const CoinbaseWallet = new WalletLinkConnector({
    url: `https://ropsten.infura.io/v3/f6cf8fa0e33e4a42879702878dcdb524`,
    appName: "Web3-react Demo",
    supportedChainIds: [1, 3, 4, 5, 42],
});

const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://ropsten.infura.io/v3/f6cf8fa0e33e4a42879702878dcdb524`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
});

const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
});

async function changeChain() {
    if (window.ethereum) {
        try {
          await window.ethereum.request({method: "eth_requestAccounts"})
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x1' }], 
            });
        } catch (e) {
             console.log(e)
        }
    }
}

const ModalWallet = ({
    setOpen, open, setWalletConnect
}) => {
    const { activate, deactivate } = useWeb3React();
    async function disconnect(){
        await deactivate()

    }
    async function connect(connector){
        try {
            await disconnect()
            //changeChain()
            await activate(connector)

            setWalletConnect(prev => !prev)
            setOpen(false)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <Modal open={open} setOpen={setOpen} classNameName='wallet' className='wallet'>
            <div className="wallet">
                <h2 className="wallet__title">Connect wallet</h2>
                {/* <div className="wallet__tabs">
                    <button
                        onClick={() => setQr(true)}
                        className={`wallet__tabs-btn btn ${qr ? 'active' : '' }`}
                        type="button">QR Code</button>
                    <button
                        onClick={() => setQr(false)}
                        className={`wallet__tabs-btn btn ${!qr ? 'active' : '' }`}
                        type="button">Desktop</button>
                </div> */}
                {/* <div className={`wallet__qr wallet__item ${qr ? 'active' : '' }`}>
                    <p className="wallet__item-info">Scan QR code with a WalletConnect-compatible wallet</p>
                    <img className="wallet__qr-img" src={QRCode} alt="qr"/>
                    <p className="wallet__qr-sign">Copy to  clipboard</p>
                </div> */}
                <div className={`wallet__form wallet__item active`}>
                    <p className="wallet__item-info">your preferred wallet</p>
                    {/*<form>*/}
                    {/*    <label className="wallet__label">*/}
                    {/*        <p className="wallet__label-info">Your wallet</p>*/}
                    {/*        <textarea className="wallet__textarea" name="wallet"></textarea>*/}
                    {/*    </label>*/}
                    {/*    <div className="wallet__form-btn-wrap">*/}
                    {/*        <button className="btn btn--green" type="submit">Get NFT</button>*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                    <div className="wallet__form-btn-wrap">
                        <button className="btn btn--green" onClick={() =>connect(Injected)}>Metamask</button>
                        <button className="btn btn--green" onClick={() =>connect(CoinbaseWallet)}>CoinbaseWallet</button>
                        <button className="btn btn--green" onClick={() =>connect(WalletConnect)}>WalletConnect</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default memo(ModalWallet);

export async function getProvider(){
    const {ethereum} = window
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        return provider
    }
}
