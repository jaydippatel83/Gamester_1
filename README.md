# Connect with Gamers! Develop Games & Get Paid in Crypto! 

![MicrosoftTeams-image (4)](https://user-images.githubusercontent.com/104611242/169563255-80a55a71-6011-405d-bc8a-9289f9cef851.png)

# Gamester we have inbuilt 1) Escrow agreement 2)Create product services pages 3) Invoice creation and 4) Analytics

Escrow service in which Buyer and Seller can create escrow agreement where buyer will have to lock the funds in smart contract and once buyer reacieves product/service they need to click "finish" by which smart contract will release funds to Seller's wallet.

We have inbuilt product services page creation where Game developers and designers can create pages for their work and share it among their network. Interested client can approach them by sending a message from their Product/Service page.

We have Invoice creation option in which user can create an invoice and send it to the customer. Customers can download the invoice and make a payment in Crypto through this "Pay" button.

we have analytics which will give over views of how your services/product business is performing overall.

# Polygon Network configration 

```javascript
require("@nomiclabs/hardhat-waffle"); 
require("dotenv").config({ path: "./.env" });  

const ALCHEMY_API_KEY = "pqr-VAfSii011IkFlqrZTxCgzK5fWegs";
const projectId = "0625a19e9662496eac15a4d713be4eb9";

module.exports = {
  solidity: "0.8.4",
  networks: {
    matic: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${projectId}`,
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
};
```


# Homepage 

![Screenshot 2022-05-20 at 9 05 49 PM](https://user-images.githubusercontent.com/104611242/169563762-9817ec0c-c835-490f-bd8b-5019282b41a0.png)

# Escrow Agreement

![Screenshot 2022-05-20 at 9 06 31 PM](https://user-images.githubusercontent.com/104611242/169563861-79835288-be19-4bb1-912a-cca13697f011.png)

# Product & Services

 ![Screenshot 2022-05-20 at 9 06 43 PM](https://user-images.githubusercontent.com/104611242/169564129-b184f4f1-7ce5-4d02-8322-8c7263c75cb7.png)


#  Hiring
![Screenshot 2022-05-20 at 9 06 50 PM](https://user-images.githubusercontent.com/104611242/169564041-e06d7ae6-8113-4aac-8537-e96e759fa57f.png)

# Invoice 

![Screenshot 2022-05-20 at 9 07 02 PM](https://user-images.githubusercontent.com/104611242/169564220-17a547e6-ae51-4576-af92-0d7d4ed11e30.png)


#invoice Details

![Screenshot 2022-05-20 at 9 07 11 PM](https://user-images.githubusercontent.com/104611242/169564260-52d45a9d-56b9-490c-9b99-7bb6b60e6449.png)


# Analytics

![Screenshot 2022-05-20 at 9 07 28 PM](https://user-images.githubusercontent.com/104611242/169564316-bbd30994-39a4-43a1-a8eb-bad840ae4a96.png)