const {ethers} = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/a23350049d90445986225a5c69fb384e`
);


const queryBlockchain =async() => {
    // const block = await provider.getBlockNumber();
    // console.log("Current Block Number: ", block);

    const balance = await provider.getBalance("0xD17C73942d8fE430C7e95C498d60EAF5b9D95eB5");
    console.log("Account balance is :",balance);
   
    const balanceEther = ethers.utils.formatEther(balance);
    console.log("Account Balance In Ether: ", balanceEther);

    const balanceWei = ethers.utils.parseEther(balanceEther);
    console.log("Balance in wei: ", balanceWei);

    

};

queryBlockchain();