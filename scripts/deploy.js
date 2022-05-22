const hre = require("hardhat"); 

async function main() {
  const AgreementContract = await hre.ethers.getContractFactory("AgreementContract");
  const agreementContract = await AgreementContract.deploy();
  await agreementContract.deployed();
  console.log("agreementContract deployed to:", agreementContract.address);

  const InvoiceContract = await hre.ethers.getContractFactory("InvoiceContract");
  const invoiceContract = await InvoiceContract.deploy();
  await invoiceContract.deployed();
  console.log("invoiceContract deployed to:", invoiceContract.address); 
   
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
