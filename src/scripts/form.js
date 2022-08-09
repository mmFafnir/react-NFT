import { ethers } from 'ethers';
import abi from '../utils/WH.json';
import getProvider from "./getProvider";

export async function sendForm(){
    try {
        const contractAddress = '0x7C3ceB972581E2D1A9B4AF7037a0Ee869c4b66A5'
        const provider = await getProvider()

        const signer = await provider.getSigner()

        const contract = new ethers.Contract(contractAddress, abi.abi, signer)
        const overrides = {
            from: signer.getAddress(),
            gasLimit: ethers.utils.hexlify(6000000),
            nonce: provider.getTransactionCount(signer.getAddress())
        }
        await contract.add(overrides)
        
    } 
    catch (e) {
        if(e.code === 4001){ // user denied transaction
            console.log(e)
            throw new Error(e.message)
        }
    }

}