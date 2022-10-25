import { ethers } from "hardhat";

const main = async () => {
    const [owner, randomPerson] = await ethers.getSigners();
    const domainContractFactory = await ethers.getContractFactory('Domains')
    const domainContract = await domainContractFactory.deploy('eth');
    await domainContract.deployed();
    console.log("Contract deployed to:", domainContract.address)
    console.log("Contract deployed by:", owner.address);

    let txn = await domainContract.register("samon", { value: ethers.utils.parseEther('0.1') });
    await txn.wait();
    console.log("Set record for samon.eth");

    const domainAddress = await domainContract.getAddress("samon");
    console.log("Owner of domain samon:", domainAddress);


    const balance = await ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", ethers.utils.formatEther(balance));

}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();