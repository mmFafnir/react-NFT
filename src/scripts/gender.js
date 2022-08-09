import { ethers } from 'ethers'
import abi from '../utils/abi.json'
import getProvider from './getProvider'


export async function getGender(){
        try {
            const contractAddress = '0xd46050B02c2E6ba1dcbfdC2E4800Db948ce0C50F'

            const provider = await getProvider()

            const signer = await provider.getSigner()

            const contract = new ethers.Contract(contractAddress, abi.abi, signer)

            const overrides = {
                from: signer.getAddress(),
                gasLimit: ethers.utils.hexlify(6000000),
                nonce: provider.getTransactionCount(signer.getAddress())
            }

            const tx = await contract.balanceOf(await signer.getAddress())

            const balance = parseInt(tx._hex)

            let tokensId = []
            let res = []
            for (let i = 0; i < balance; i++) {
                const token = await contract.tokenOfOwnerByIndex(signer.getAddress(), i, overrides)

                tokensId.push(parseInt(token))
            }
            for (let i = 0; i < tokensId.length; i++) {
                const gender = await contract.nftGender(tokensId[i])
                res.push({
                    token: tokensId[i],
                    female: gender,
                })
            }
            console.log(res)
            return res
        }
        catch (e) {
            console.log(e)
            return []
        }
    }

export async function setGender(){
        try {
            const contractAddress = '0xd46050B02c2E6ba1dcbfdC2E4800Db948ce0C50F'

            const provider = await getProvider()

            const signer = await provider.getSigner()

            const contract = new ethers.Contract(contractAddress, abi.abi, signer)

            const overrides = {
                from: signer.getAddress(),
                gasLimit: ethers.utils.hexlify(6000000),
                nonce: provider.getTransactionCount(signer.getAddress())
            }

            const tx = await contract.balanceOf(await signer.getAddress())

            const balance = parseInt(tx._hex)

            let tokensId = [];
            let res = [];

            for (let i = 0; i < balance; i++) {
                const token = await contract.tokenOfOwnerByIndex(signer.getAddress(), i, overrides)

                tokensId.push(parseInt(token))
            }
            for (let i = 0; i < tokensId.length; i++) {
                const gender = await contract.nftGender(tokensId[i])
                res.push({
                    token: tokensId[i],
                    female: gender,
                })
            }

            return res
        }
        // алерт подключите кошелек
        catch (e) {
            console.log("Please connect Wallet")
            console.log(e)
        }
    }


    