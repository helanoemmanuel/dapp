import Web3 from "web3";

const CONTRACT_ADDRESS = ""

export async function doLogin() {

    if (!window.ethereum) throw new Error('Metamask não instalada!');

    const web3 = new Web3(window.ethereum);

    const accounts = await web3.eth.requestAccounts();

    if(!accounts || !accounts.length) throw new Error('MetaMask não foi autorizada!');

    localStorage.setItem("wallet", accounts[0]);
    return accounts[0];
    
}