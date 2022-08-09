
import { ethers } from 'ethers'
import abi from '../utils/abi.json'
import getProvider from "./getProvider";
import { CONTRACT_ADDRESS } from '../App';

export const checkStartSale = async () => {
    const provider = await getProvider()
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi.abi, signer)
    let isStarted = await contract.isStarted();
    return isStarted
} 