import { ethers } from 'ethers'
import { CONTRACT_ADDRESS } from '../App';
import abi from '../utils/abi.json'
import getProvider from "./getProvider";


export async function mint(res){
    try{
        const provider = await getProvider()
        const signer = await provider.getSigner()
        const contract = new ethers.Contract(CONTRACT_ADDRESS, abi.abi, signer)

        let isStarted = await contract.isStarted()
        //Для проверки начались продажи или нет можно использовать isStarted. Если > 0, то нужен минт модалка. Если нет, то заглушка
        if(isStarted > 0) {
            const isWhitelisted = await contract.inWhiteList()
            if (isWhitelisted) {
                let cost = 0.07 * res.ntf
                const tx = await contract.whiteListMint(res.ntf, override(cost))
                await tx.wait()
                console.log(tx)
            } else {
                let cost = 0.08 * res.ntf
                const tx = await contract.mint(res.ntf, override(cost))
                await tx.wait()
                console.log(tx)
            }

            function override(cost) {
                const overrides = {
                    from: signer.getAddress(),
                    gasLimit: ethers.utils.hexlify(6000000),
                    value: ethers.utils.parseEther(cost.toString()),
                    nonce: provider.getTransactionCount(signer.getAddress())
                }
                return overrides
            }
        }


    }
    catch (e) {
        if(e.code === 4001){ // user denied transaction
            console.log(e)
        }
    }
}
