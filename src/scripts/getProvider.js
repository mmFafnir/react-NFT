import { ethers } from 'ethers';

export default async function getProvider(){
    const {ethereum} = window
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        return provider
    }
}