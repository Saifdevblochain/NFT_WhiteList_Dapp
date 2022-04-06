
//ethers.js comes built-in with hardhat
//ethers.js is a really nice library to work with ethereum

//import ethers

const {ethers}= require('hardhat');

async function main(){
// 1- somehow tell the script we want to deploy the 'NFT.sol' contract
const contract=await ethers.getContractFactory('NFTee');
// 2-  deploy it
const deployedContract= await contract.deploy();
    // 2.1- wait for contract to deploy
    await deployedContract.deployed();

// print the address of the deployed contract
console.log('Deployed Contract adress is :', deployedContract.address)

}

main()
.then( ()=>process.exit(0))
.catch((error)=>{
    console.log(error);
    process.exit(1);
})
