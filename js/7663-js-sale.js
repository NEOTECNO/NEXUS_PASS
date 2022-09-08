const CONTRACT_ADDR = "0xE317e195493A5FEE488929B3Ec7a9aC05eE1800E";

const abi = [{"inputs":[{"internalType":"address","name":"_signerAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_PER_TRX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PUBLIC_MINT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WHITELIST_MINT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PUBLIC_SALE_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WHITELIST_SALE_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"isValidData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"message","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"recoverSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCostPublic","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCostWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriPrefix","type":"string"}],"name":"setTokenUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"splitSignature","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"togglePause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"togglePublicSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleWhiteListSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalPublicMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalWhitelistMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uriPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uriSuffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whiteListSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var contract = null;
var account = null;
var addressSign = null;
var price = null;
var value = null;

var totalSupply = null;
var maxSupply = null;
var maxPerTx = null;
var WL = null;
var PB = null;

const decrementMintAmount = async (e) => {
  var mintAmount = Number(document.getElementById('tokens_amount').value);
  let newMintAmount = mintAmount - 1;
  if (newMintAmount < 1) {
    newMintAmount = 1;
  }
  document.getElementById('tokens_amount').value = newMintAmount;
};

const incrementMintAmount = async (e) => {
  var mintAmount = Number(document.getElementById('tokens_amount').value);
  let newMintAmount = mintAmount + 1;
  if (newMintAmount > maxPerTx) {
    newMintAmount = maxPerTx;
  }
  document.getElementById('tokens_amount').value = newMintAmount;
};

//MINT
const mint = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
    const _mintAmount = document.getElementById('tokens_amount').value;
    	
    if (_mintAmount > 0) {
			var result = "";
			var success = "";
			document.getElementById("tokens_available").innerHTML = "WORKING...";

			try {
			  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  account = accounts[0];

			  const web3 = new Web3(window.ethereum);
			  contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {from: account});
			  
			  var chAccount = web3.utils.toChecksumAddress(account);
			  var addressIndex = signatures.indexOf(chAccount);

			  if (addressIndex != -1) {
				addressSign = signatures[addressIndex + 1];
				price = await contract.methods.WHITELIST_SALE_PRICE().call();
				}
			  else
				{
				addressSign = signatures[0];
				price = await contract.methods.PUBLIC_SALE_PRICE().call();
				}
			  
			  value = (price * _mintAmount);

			  const gas = Math.round( await contract.methods.mint(_mintAmount, addressSign).estimateGas({value: value.toString(), from: account}) * 1.1 );
			  result = await contract.methods.mint(_mintAmount, addressSign).send({value: value.toString(), from: account, gas: gas});

			  success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
			  } 
		  catch(e)
			  {
			  alert("Error: " + e.message);
			  console.log("Error: ",e);
			  document.getElementById("tokens_available").innerHTML = totalSupply + "/" + "15K";
			  }
		}
	}
}

const connect= async (e)=> {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    if (accounts.length > 0) {
      document.getElementById("connect_button").innerHTML=accounts[0].substr(0,10)+"..."+accounts[0].substr(-4) ;

  	  const web3 = new Web3(window.ethereum);
  	  const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {gas: 3000000});
	    maxSupply = await contract.methods.MAX_SUPPLY().call();
      	totalSupply = await contract.methods.totalSupply().call();
	    const paused = await contract.methods.pause().call();
	    WL = await contract.methods.whiteListSale().call();
      	PB = await contract.methods.publicSale().call();
	    maxPerTx = await contract.methods.MAX_PER_TRX().call();
	    const price = await contract.methods.PUBLIC_SALE_PRICE().call();

      if (paused) { document.getElementById("phase").innerHTML = "CONTRACT IS PAUSED"; }
	  else { if (WL) { document.getElementById("phase").innerHTML = "PUBLIC MINT | MAX " + maxPerTx + " PER TRANSACTION"; }
	  else { document.getElementById("phase").innerHTML = "PUBLIC MINT | MAX " + maxPerTx + " PER TRANSACTION"; }
	  }

	  document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "15K";
    //document.getElementById('tokens_amount').value = maxPerTx;
	}
    else { document.getElementById("connect_button").innerHTML="Connect wallet"; }
  }
  return false;
}
  
document.getElementById('connect_button').onclick = connect;
document.getElementById('mint_button').onclick = mint;

connect();

const signatures = [
  '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  '0x5F3Bf71Aef44E5C9dc152D001c5A88b2502057E8',
  '0x91e725b31332edfe483af7a18065ef145f7ea8e85212668732a6c8e088a379654276fe817019d5a53ab8f2a848fc8791a6391a46e8cb12beb961192af87f06781c',
  '0x4755D63F5b81BBBf72804F6F15B69F2920A24D82',
  '0xacac3185d9de793e02aec248188faa7ee0ba6bb844e4ef89f4bf084d97f41aa60d0b0198d59aab7779bd811a94abb36744eb8129ca4eef78e5719aca3699eec41b',
  '0x5a68E99BEE36B45Af3BE30b45e76bD7c02F4128f',
  '0xf63dde7746ed4a082f0488fb8cd8f326470933ee6b1c317d7ea1beace4ac9eef6baae50e723f42aa88e6d80d80ed35b6650ede0456844ce7db68fc95457816d71b',
  '0xa3422586d5FEa8e1189E06dDFC08ba7aF423B9F4',
  '0xd0f18d60fcb043ee6e75026588d0f08b895689e1787f36be25ffa04d8bfd0d920c15ea22057ea044e51bdf31d61374bcdce4735149dac44c5358ed9f289f02661c',
  '0x2Bc65829e53c38889B16B4b7846d49B573c1916c',
  '0x8e16f8f2880bbf6f4145cd23d9277b2c61e83817143292efb9a2ac224b5edbb007b49e095435732cc323ae008b34fce5580331e622df1199ab345b4f6d53f7a21b',
  '0x1603Abc39AB33b95E3323D52eE41C41069Ba01Fc',
  '0xabad12dfe50aa102a92f1509d3c8ab9a6b726b18ae1ab9d97fa0b23c1d585e3500fe4855eed25f8a7f04ea738941d600966601538d04aff9c5dc406c441021eb1c',
  '0x5647c4e7d4a12AB9cBc0067212D49eAF4888f988',
  '0xae5cb89a2ae662ffa2b1af3003dd812c9ce06c1a18915e847869f5d0182b534102270288856e4334ce86040923f351364c6885fe7f9f8b15af788c79763fc7031b',
  '0x041d366C8a182D9B7f09A3Fe230fA4E97D776DFb',
  '0xe55cf5407e05eb4b4846a41f77d10e63cdff39fca3d95894382d072d0c798c672cb33d5cda2bbaff3a4e2b44e88cac2b7c4ab01e84d8d21ba45ebd4da86c7c011c',
  '0x424ffda72e684AeBF071f1d3a59498B688999d2E',
  '0x61efa2a619740ba12c2072bdda7f499fb0d09aaa1d1e8bc39cf30a0d0a9ae81b732fea99066c87d6066d0239d9c691f8a6c50f57370f8ffe48c7cdad71a8d0de1b',
  '0x31f630C6bcE03795220239D2467F7F0844454f37',
  '0x75c00704a87b2c3d39883025211fe042fbd9e84633d066e442a2716369a9110d2ccd0b5258e54ada6892dd301c23dee6ee1ecf45c596964c85e8a767f9db83241c',
  '0xe56E3f3017C04caA3b83847324b4067166DE8fFc',
  '0xb6d5ba03b10bbd833a72cf656edbe2fdc2b2c37c60eb9ed5438431ecdb7e2f8b371736ae8297a744374d63d5c67973c5a962d90d62821866fdb0cbf4d75421ca1b',
  '0x66Ca45e79746984385d185dCC000FAE482123072',
  '0xa1fe454d549fd4ce13b0f65ea6050f155438d25e51eacc18e0b60d34e54121252c5fa4839e68e1baa4614876aac471826b3495ac98a7f03bd5c9c8fd4e1843991c',
  '0x25e7601BA5FEC254E0834008CF40594EdfD08b0f',
  '0xe0766c680a5bf2ba77fad921f70e261d0f514c5c552d32dc7dbb1259b7834f094b1de88915ee4262197e2b6a2c054aa126550c251435da15b1a5a2d014975c031b',
  '0x4A610ac6091176326cD7D0193C647cd3C38A6D66',
  '0xc27e5eb90adc24417159f1c9a83425500b10f3ad3564cab9842160cc7ea27b3179544b12db0d8bd4a8210df058c1ca61d6ccf4fc737814d936e8dafb3170759b1b',
  '0x8028407DDEdb611686446edA47619754e299E005',
  '0x93b8b6354659f461e52fa81fa7b0a9e51ad70b57d128a7003360d69fd45b368878a3181587d350ba576bcae537667f90f076f79b14fb2942df103cec1e3be3a51c',
  '0xAd49076be626DA5B48b317f2B4fac09092Fd7ad9',
  '0x1d1c28ceb9cffaa3bd85e0c9f0f60fc1e5d0a8805c9d83b2085e256eac88b00521096d840af02ffef08d055146d40f9da2698dca9e6d8ee0b56c7630365f86351b',
  '0x19743E1a9D2f16CC87d36ACC243E5232c8A7B3c7',
  '0x559fc5f754931a03e96ef40b77049e6ba7811b85f377575a8dad48ba1c6a24f364ce9e44fe751ebc985ccdb98fc819a19c5da4c11627dc3c6ef2fc0c36ea6dfc1b',
  '0x38395321aa7e0f5Bf2d6De007dfb293988Ec6Ee0',
  '0xba9de7799c8edf35d6da9c087dd36e34ab8475b38693b9b717a3ae000a64141d52ba6bd772b7b1ac752dd85ba856c545f822d38d46c5a360cc130b4157f0d9111c',
  '0x6838ed1Fd9b7200499e117fD4383BcF7aeb527BA',
  '0xc230c5333d674f9f2c3bbd0abb29b134e62ea1e100f218ff9125f37e0daa4f96726c47e0b20859bbc01b17823acb1313565220e67e1e4e40d43dab4653f09bd91b',
  '0x7444eFD31d6d451372FDd340dE3612Be7679fABD',
  '0xc720ff71cf49fb2ab43c8e1f88ff991eb1d12af555cd69ed35688302560ff4e650b520edcfdeb6a713873afc9dca3b2ef944619084646fc6b98ee409f5c80d081c',
  '0xd93e4775daF33cEE3Bd60d2e7aD868989FA0fE68',
  '0xbc541b99334228737bf6c529bad08837afddadf4b77174f31c09dc053d730eb31009775e1f8046ebf71d0a98bd0c36fb0b7e0854f3f2bbd7cbbbc10c7fb50cdd1b',
  '0x2ee68A69AD1ce8fc984A77E4B796e268B6d5071e',
  '0x05153f38fd9dfc7d397c63b00760ee4bba80df7652e3943269d498a9d82352e77e12c2c86cfc4edbbfb777cfd27e5c04d8868d7f50311f708a84be73b0f7a0eb1c',
  '0x06a876607ea04571dde2ba2fef1d5cdbcd3ecd95',
  '0x315c3c15b81439bf3853d0b31598a9f30579064f67c7fbc0e418eefb15f64f97693b214dd7400c95094874c96d139f7b81fe91467a2339ad400594d1f26b09301b',
  '0x6b94138781772BcbB34FeF5bF6CA3dcFC549fa25',
  '0x2cc27c3929dad0ce316e123c2bb36740682c63dad49eaca3697c8325517cdc4939c496e49282cf8ecad75a013a9c3d8288d655c1b1bd174222172e453243ad0a1c',
  '0x8230b13E37a3a8EE5BD24Ca399Ed8db0Dd397a59',
  '0xeb019a8c78bbf08e816651dd9faca2b86adf604a55c06c2a751068fb7f02be6f3e8cf5ccbd2a7e8e90c3cd7699b81edd9d7625460ebc063228015d378a1fdb771c',
  '0xf6F6Ff9B0cd1B939DD58184755484C161EC9699C',
  '0x69e40c2ef7036f983682a5d5afa4c1769972bd3837a320db988b7881a51beccd786de4db43ed2a3d4db1ca9ca33c19c0b27f2c4eb79a882b9cf449bb8518cb8e1c',
  '0x3D11D0dA96c4b3E0a9C902d38391fdF2Ff76A556',
  '0x250abae8d1e6b8452f692d9b08477645170b70b24324cf35b54a0f73429066a666e48f453163585e57094d2a4c53e3ee5a6dd432ec6dfa55c33c1e845cea4f131b',
  '0x06714A2A843daa939132Dc22F4138D3E9db191eF',
  '0xc49bafd6238ffb728f46bfa48dfa1ac0bb9eca01528dbd022cb613997899026d109c5f7a58645e596d835dc3c2b2420bb8a3d2090f2fb806c16a95cbd5b30e781b',
  '0x370c6ffa5FBD9A57DAC2D20509032B70BaBA6577',
  '0x594ecda2f85cb7c5aed2064f2bda0475d7326ac87b56e8dcd3d8d18ae1f6d6633d6376ef6ac40efa8d971b1b7e34bae6de4f2faa19215e96deed08853b0c06201b',
  '0xA9F4c53091CF79adF527Aa94AE2212aac4450485',
  '0xdd549bec7cd2241563e16a720a49b8e99e8d478fe56ad37b455bafca45f0dfbc4cad9064314dd47ef511fc219bb6a30f1a6fc3c466698820613fe0659011989e1b',
  '0xbcF02472A295F99e3753fD74Fc666ef0EA0A8770',
  '0xd7f766b4db7ef5a12dbef811cb4f44fb184ffd3c47f9a3f82088e1a96d4ecdb60b946a71cb975dbe429e5cfea4780e1e9fca12e3d8eec515549dffe2ee5590bf1b',
  '0x7058686AD433E5d8af6bC0e23bAAC4fD52312ddF',
  '0x49090cf44653ac4129dab3893f5138b08ba6e51e7349b39ff05119ae6fce37341f2db9df07a349cc8a8c60925d254aa7a02006acd17248d6402c6085445db6891b',
  '0xC6E6e1b159f60fa5fc3Cdc9Dd7385fb8dd61b24d',
  '0x9863a8e48290c167a3b3f3193062e6120faeb0701152f502bc1efafe48f567e21f905a851fdfce6593f94ebe3c1e15301401bcde5ada3385a8b76ae1981077201c',
  '0xe470890a7F8B8d74fbF3A05d73732827C7f9c8cE',
  '0x38fd90941499c35542594ea8bbfd4bfa77fc0a545e196fe248db74c15d5c82de2e409595c18dad17c6fdcb2ea92bea7ec42c3464c22e91dea8da4f45c51604251b',
  '0xe426f30edd69afb1ce67dd11fe04e75de0b610ad',
  '0xc6a99a9a095dcfe66af476a71ccf8037adb78e0f27909615b76c66e280d6d6a54d4f1ac2f6033edb72dd396d38c23552f4b75bac5f78f0edb07b2bd971fe910f1c',
  '0x32131Dd672EC67d2E8e301aE392b5ebef2789353',
  '0xdd4fad7adad707ff2de27575c96cf1a554ed18de0c5d9c0ee12a793593c9b2bf527934fbe17276fb6ad33b9b08db8f71f58ffa090178bb1c52e9b5d24fa5dbe01c',
  '0xB0Cd10CC36667a5eB8901046252E5185c1Cf9AC5',
  '0xa605c63143b614185e1d77e104623c570752ce3918edf7be0aa5c3e08a00e72a3827dcf8cd7a8265ef5b276b6c4d990f4a8b081f9a93eb37ec7a8d81ffb56f951c',
  '0xb5fc32dd1F6401ad53B3aDf42D174826BAB9CfDb',
  '0x52cc092acbb38cb5baef94c0dd023ba6c93527e6867df7575cf3d0100c06e10b241b2064d95dd02fe30aa42ab4740993779ce056545ffbd3e671e885d145eca91c',
  '0x5de7Ce0332A6C1485D36aEA6b2cEfe29Ce2109cC',
  '0x7af6d5379acca47f46ca79fb6cc05afc76fd890ccddd22cc1445d6cf819962db70885bc69433691ef181a0da6fb7153cd407fc249b0c53c29d6320f47efe1d851b',
  '0x4b3DcC15a8ab43128210fE3327BC830c36a15541',
  '0xb3688104a7a6d7b90fdcdf69bf1baefc3af0e95f20412099386696b59f5d348528011384b41af691cd013b79e8a050329fc5af40a686a20c8ae960b0816d72d11b',
  '0xDcb67bE028fB41f5EeAB1E3E5AbDaFE533E1b408',
  '0x342939b8f1ba4426f939055032ded8955ee140d9aa510ea08445d71313f8a1125f9b73a059cbe9785bb77305e081d98f13162d1aa68656cc63190e6f399e68ad1c',
  '0xA403d15bC039c7dB1a87C636958bcD4a0052BC0F',
  '0xfdfa348eabc831de6621f489c910e84e9cc7b0589aae5cff8c6eafbe7249e4ff78d369d7cb6ab3b6682cce181196ada1c4efcce06b057c928dde297b6da262da1c',
  '0xa3451276eCFB50088B97eC6F76197AF4fD8A1548',
  '0x1875bbd162b891bf67854d8d97191a8745405609f4e87eb1f098dcf6b7d3a0ea7ee87274b1537f7eacc295ea88739637a0e5897156ed6141bad6cb81a6b7744e1b',
  '0xa11B8Bd68E749010d4D28fD516a363E766BE9E99',
  '0x4e8b8018cb93138ded472a9604e04d6ed97e4cbe07d8a3fae0f2281fb916f8ba13d7207ad2585cd2459ad31050c0071d7f524e171900dec1f63eaaeae149b7a31c',
  '0x9Dd7C823C759B48192306D59a05A352de3ef188f',
  '0xdb1048febd2f0cdef6f4d04f0ac56589da1d5a57c7bf8f14d598b63dcacd68d3480112d7959c7d928e3dc81048c745daca8fe3c9cd4e44dc2dd42a1ee81014c31b',
  '0x97Cf2E2BBB9300504e235814077fEca675d21524',
  '0x279f3b65be3d7688336bc4351c0c27fbd6be2fc1cc5c0c10e31b50b6dac09c764fa81632ef8dea4f7c51a9f44675245cea90962aa1525f01e31c9c47f9e010d81b',
  '0x8d34d8B0d13eB91Ae1A0F093b13C676852F2a22C',
  '0x632dfa2a85c7321f09223f53f19765d29a8ed659c289954a2459a8ef12935822512ba3224b0cf4a00620955e4fe509b4b0c2f28f7eeb97aff6a311edcb04df9e1c',
  '0x7531913Faf725Ca035A833ac7A7dA896dD85D603',
  '0xeab2d887e3204e70402693117b0b4833ebe567058c4c19a4e140d0bb5895b9b8558390a7bc8efa1637d966a429b0e5d6ac0a2a5318bd2e6a72cdb425e8c7fa8e1b',
  '0x3B994C5d6689F6b7fd00743b6Bcc82363581466E',
  '0x380b0cf4237eb8a90e8a0b7e41360c394254bdde1d92f639a79327f1e45b374028d100a136d5dd09697678a0f08facc8ee6067535d2fa47b6b5efc50b92bb56d1b',
  '0x4668F8db524799F896663EfcAFd860123953744E',
  '0xfe2e4d315ef825d9d881417022337006ab900cfe1342344cd1e1439b1ff0ac842f46c8d6bd1ed0f571fae5dad8882962044e427793113589361c6c693ad39c7e1c',
  '0x62786884B5c40B4B12774055a6c40f41926EAe15',
  '0xe28914c89ddb1dcf3e4a5937cd6d2872c609a8b842b66126b4c7b89ad0a0578f25aa91698423911ed6c5ac1ffe62f15b96420333dd558cba99693f21889223121b',
  '0x17921B58902a5EB485eEba82fB93Ae9A5B38F0fa',
  '0x0a182571df93583486870939aeb0dc66473b46b3044f62002c3547f84c0b8451257d17534ab2165ef885eb2f8ca3d982e1df0862a8b9b6da9d52d1de496577fb1c',
  '0xbfc63b805176BC32f796669A9C5e5DEA4797865a',
  '0x2679fcf861ef6748d1eb866704819adb0f926f98c13f121f7b85c27ef39455d871db3004a77a4da6d64c9664178e4243d57e4147fe1a5992218e6f09cad7f0261b',
  '0xB54A407B18e5f36D15E7208D27752dB68d4085eA',
  '0x077c78f450d63dcc6cdd805202c346bdd694602a81b872469d503279aa6efe225e54925a671a4bca88e5cc20726b2932d4abe2fc7dbfbd9d6b15eb891b31a83a1b',
  '0xf187B56ff92BeaF75dA2Ed2C7F1d77781EEc6Dce',
  '0x549c7e944ecc2cc894db222d52f4817178179f394311983638d07b87e9b39b771b0f053ed5695a7d0e9072ee7fd222e40e4e33391b66bb1be98918570547624b1b',
  '0xD8b43036de030D512829201CFDA57c8386CC8A7B',
  '0x22d3d0bdb1d4a5a925a0ad2cc6e7ea61824c111dc2b08791ac919fad24987d3a4b2a713fe7764dc58b696074826ddd8164e35ce849247c114d677f9537b6cd1a1b',
  '0x52DA39325E7B4e185fA7b041082Ee11B9c823B34',
  '0x5ec392fa7cd667ba0ac65d984cb065476ec346790eadd0a640121f79a0e864dc4fca40d66cc73f391acebfc65db5fa6552d4e19361b0e52e8a2e9fe4a868aafe1b',
  '0x14026e9027e1430A686cE5Bda65D23Ba53959E11',
  '0xac4edfccb2d7311e89deeaff8f3a62ebede19d63fb9f40a10f17ef48b528aedd05698738f452b3bd5e5c2f48b2b0f8d64673d0d30b193871bacb0ed9cf96228a1c',
  '0x12D75814604865C2e9dD988F43b3d75afb0D47F2',
  '0x205607943b184f154dcbf2b5a5434598df4c05ae917cc7697e882e166116e4ec2b610591ee8b63db8f4d2db12c0b11360767391a94d6381a0b030ecceea0af6c1c',
  '0x800Abecb04a65F13C254Af97Ec42F84694ce4c3a',
  '0x9cb2af4671ca6a5c451b721bd544a1fc1543be900fb9b0ee1c76ae3993ff43190012dca5b7fac27b5f7e28ed934a98f437d16c58cf0f6b3e07a3de01e1fa4a231c',
  '0xCeBCfDDc9f5881A055b82d9318d7b376dC1E1190',
  '0xd9a0d19c5347bfd0a4617760a104fb53ddeffb43360d07be411be05dfd9fc3cd56ab7fd410eb87e971719166f8c5bc5f4602ee541b8ef3904b55af0f06b13ce91b',
  '0x2f642D963A1428e82CD9F229C781eCF689e9c9F0',
  '0x89fbdbb718e10ef1f50203023a50541ab9e3093feb022cac227991fe97e8e0f07ec1a00b1ffb74bbd9e405c2d0418e63c7b919e1164f55792ae1d030f5cd72b91c',
  '0x28B23078039e71C82A797f2B8DFe5c699f5AA73E',
  '0x4059712294f221c441c0f9c3b1405c5fafa84c5e2f410c923abda7ffd1ba63814d5228b0e4b465cb95bdca935b73f5d6026528c6b1ff7708a0981f51616899ed1b',
  '0xbe82F82692a0a5c38E7bb20b5E498DAc9B6E32Cb',
  '0xe82405a99f6a28782fdbd9e636d22e0fc82e3201c86bbbcb8e23dda9e3e8df29646bdcc5c9d6a0ac2e78a8fd0a0c0662b0676dd197fec7f379f407c72ea752941b',
  '0xbAFa0ecd146C524bF4033b2Ec04Cb5774B08F75d',
  '0x0b58a888ca4b6ff42c6d0e498a6333df836152fa8fd4f1e906530f45b5bcac1a68cae63df2373af7cf5fec4025025f1af01f87d674765938a61668fb6bd7d2bb1c',
  '0xF8571199B2Ec966C9497683205520A5D7DCcDBc7',
  '0x18cf6167cf28236922b956a28fad42adccd37f9d99ba53be72ef3987274d5ebc412f79138fc51d46ebcf80d5ae0ec96af9f7ae2af8bce08932fe91bb0b873e7a1c',
  '0x5F3Bf71Aef44E5C9dc152D001c5A88b2502057E8',
  '0x91e725b31332edfe483af7a18065ef145f7ea8e85212668732a6c8e088a379654276fe817019d5a53ab8f2a848fc8791a6391a46e8cb12beb961192af87f06781c',
  '0x8122f9bCd4F39a84C5de0810389E4f2187dc9E77',
  '0xe8e0998278ed45ff7a44bdcd4efd5be1936967d5b594c8a85ddc356a9b3560d23d684b08b5eee33c98bcd48638d46b07f3b99c1c2a808a3e574a033ee51f57201c',
  '0xa477f058a9EC8e40BF1419349fa07D629881CDe1',
  '0x019b2fdc9c400217feed31fcd5926d966e5a1c71b4655c6e19f5eeca37c9bb2f183f748560394b5e3425ebcbd0cecb961f4a2a99d4b1e6b44970024c23330f471b',
  '0xC2D26Dc400825440D18c7b1B1242Ce951b65EA5c',
  '0x26c6c5cea44730dc7fab4be5c4e7026056ac78793e711d90114f0488940df8aa04a7d338601661bfd8b777fa9c56727e11e30d104731bbaba1cff08909ef01401b',
  '0xF683EB44B163A949Eb20B0E62C62DBbdd52c5CA5',
  '0x42dbeb52eb92d82efc05780185aa87792ef4a07ff3f7edf93809096675d0dba6565b64b6c7f11ead15b6ed56740dc7e19e455930dfa7d12760d175bfb8ab6cce1c',
  '0xB943a07e6c30Bd35042d6C1140c1f0c9066B4f7e',
  '0x536bbfef72a348d8d9da562457bcd50b762ed8f957c5dc13a2cbdb16d9b30b6617ad8c2c016ddbcc4071f914909dfbfb59b28dfe1b420db728fa8e5aa601d1b81c',
  '0x7962970C36307dA648f56A215ac65cFf3858e130',
  '0xb9e03979f99b7ddbb3d3025b1e46f411f3f73690722b44e90b7f5b2ed67f149322382ea4fedce752abda80fd0edb29658ca4d26f8892dbebf7d5a771a8d4d4aa1c',
  '0x0D00B939EA1E4E070a1E4f0B36aF5d64A958775B',
  '0xa330593e9f0562733de191c36607d44e7b02dc1a829c9523d6d5d077b60e2f89108fc6bc36240dc03f7aa63e6f9a512eccd456bb2847e653d585c1ed66aefb591c',
  '0xD266944C111E381d1d2E71f415134D9852efd6d5',
  '0x0a6a6a3f5fa0aa7799c8646ded3b8ef6bca0baff1e57276db9ef42d74c46f3a96d04f24bb636cdfddc35883da5f3c56ab8b892443d3eebf57f4bc45fc1b3d70d1c',
  '0x2Bc65829e53c38889B16B4b7846d49B573c1916c',
  '0x8e16f8f2880bbf6f4145cd23d9277b2c61e83817143292efb9a2ac224b5edbb007b49e095435732cc323ae008b34fce5580331e622df1199ab345b4f6d53f7a21b',
  '0xD8b43036de030D512829201CFDA57c8386CC8A7B',
  '0x22d3d0bdb1d4a5a925a0ad2cc6e7ea61824c111dc2b08791ac919fad24987d3a4b2a713fe7764dc58b696074826ddd8164e35ce849247c114d677f9537b6cd1a1b',
  '0xA877c30e246b54aEA14f862d70d6Bd4066f4AF66',
  '0x501dd84a7a5ba68374c7c78b05fa7a946eb0ab60229f7fa8692f2adf9f70827c7eb43ce7d096b808109dfe1667b074ec904ebb648b9665086141d3778ea8c4141b',
  '0x2a3d58E657B4Dc0f346017b6566c64E465749A24',
  '0xa4ccabdb7f2ab2407af1cf404285372621d803e35c22271a0613badd0b0fd7053c1d6e33d0cf505b223210391742449ca4cbd282612b2ea152172e8dc5e0bc0c1c',
  '0xDe8027Ec2F6CbfC5c783186B8daDF231166f53DD',
  '0x29d10dc9fa2be0eec87c2bb4ed72d14086c580e7f34e4d0858ff7ad07cf18dc905abe197f2e5e816731839b5697ddf3fa537655434ac38aa1e186560b58305871b',
  '0x78BF28c0784caae4Fd5BDE59679f673689cAC351',
  '0xff3708d736623cc87c2e5e483c30656c5d95469ca85fd02d3aec0e1f4238a7b06db77ea8fe47fd13124519ecacafcc96add6adf089c524800cc40d92641cbe3e1c',
  '0xd6d260d29d1784c8Abc9E3A4824897a70390C2BF',
  '0xf7ad6ddde0d2a48e17e95bb86d56be026cd8d05fd224ef9187bb1661e890e2644da6430d6c60b9a4094047cbe8b89c8155935c801564e1dc481ccc32f7b6c0fa1c',
  '0xaF25041a2c0E4597748786bb285D3Bfb17b26457',
  '0xd0e29efced22c79ccb5b183bf1bb3b99d81963c8374a154e626b58187f91899a23dbcee0749fda3ad370842cdbe6278f066637c558474e0836585e82c5875e601b',
  '0x014Ba17bBfEF59f9D7001E40B058C60e6D9340D4',
  '0xeff3762f6299048f4fe5856beb0dcf6fa2d32d8bf31a4515ab59c63e4eda7d93157d6e0fecc24bd90fff515270484425447082569867ecf68c5318047f5157921b',
  '0xCeBCfDDc9f5881A055b82d9318d7b376dC1E1190',
  '0xd9a0d19c5347bfd0a4617760a104fb53ddeffb43360d07be411be05dfd9fc3cd56ab7fd410eb87e971719166f8c5bc5f4602ee541b8ef3904b55af0f06b13ce91b',
  '0x142a9c07bc9fA2Cde9751fF5b1E5655742D61A97',
  '0xb20121058a6958a2d547de62589da6a7208f104ea5a11f46305a830e54c1cb3577acafa7b9928db0ca51e307515ed8739b89f16d81a82129f0e860818a0dd98b1b',
  '0x4537e0EDb819E78da86935087F7A0acD8Ba90470',
  '0x0a996bf3d49c00fa936fe248a4cd43ebfe51a486df7b4297b23df59027c430b32c6f3320587d1332895566c3d3b6ad23ebc65402fbaa59dc040574313a5d7ec91b',
  '0x284633C7A14Efa6329b8656B05EC711b5d4aC12c',
  '0x1a4f1f58519286a2d79d473240b8934c71b7766c8367eb2cad6d53a186d684567476e5b5d2c7778a57c50f4ee87efc2e8c5346c78379c2f7ab82bb1a84f2a6e01b',
  '0x89576b9eC814B5C12c16599CaF08F0793C23A5Fb',
  '0x3c5fea0dedadeba19f51f829113076b938a397fcfe87eece3dc438beaffe4d725a99d457ee2c7920a86e854ed8eb3f977acf1419f02812ba6c29bf15c4db38dc1c',
  '0xbfc63b805176BC32f796669A9C5e5DEA4797865a',
  '0x2679fcf861ef6748d1eb866704819adb0f926f98c13f121f7b85c27ef39455d871db3004a77a4da6d64c9664178e4243d57e4147fe1a5992218e6f09cad7f0261b',
  '0x41d1f03e4724db3ced38296200405b69df4fff1b',
  '0x2e823e90601524758422202859b3e9ab3f60055992d79009243e8645adaebc260635506053bca5c840847e17dad4d208895f1c560918e19576cbe440c051a7bc1c',
  '0x4eb93d6d5a3ff002703a8fd025739288b5aa8500',
  '0x58d03d4de48bffb5df27832059ece2e8d61e4eb9ba5070f57b8434afd9cdb94706cd083e797d8404df3cd9eec3fe79f802d87e950adf08f4be0bfd5459ebacd11c',
  '0x8f2563b2324ad824648d79458c95f445d814f503',
  '0x65ea165f00dc3ef30dfd8a3e89640873b866976cbf84bc6d3e6e4de696961358066601a2c543be3f5188ee530e2e0808278c92af6a46a8a4b4d536c7066b6e301c',
  '0xcafeda8f64c06cc8ca22103200dd7d69bcb56ccd',
  '0xadd17cc2e0635d5177bd1addbbfc3c9e7f6cef6aa7c9260aaf8effae1e8882512774e7f964ac290705fcd5013c9ac6b0a4632beca3dfd341479d8ee86ac0d31d1b',
  '0x92df1c5d829949cbb9a136a99d68fa6f9ffb924f',
  '0xb0392a9b77d24fb89c1eddf2c46ec0c63da06fad0465dad1d5ef80bdb849f25e5c6d0d3468e14846f643f5894d99144f759b95a712e81bfe8e29e7d4ff4b80501b',
  '0x139af71eee8f8049a388b50e205b90112680acef',
  '0x5f267f42e174afc26a95b9ffc6dd38fa29e42edc52af113d9cc03bbc008640340d4a7e7885ed0896cc96426494cb9d72d709d3a8cee900da72b33056e3b947ed1c',
  '0x5070901d0bf531ca7627f713d301c00bbb98b424',
  '0xdf4d14e20350f43f4ef5ddcbf7c237c4cfa295f37485280fe3a4926df74da4fc25b11f22dec3de43e14b34208d294e9841af74ad2db8064d1b42c9b300936dab1b',
  '0x291f3cbc989457892c266cec911d0be3dff24ccf',
  '0xf26be2a6e900d240e6243be7ebe9587fdddaed2cab92385fae9e3a9b2fba3a695e0d0205a917e66464488a665cb457bf59af7e86c84acd3319b96de5303aa5491b',
  '0xbb9909ce6bef7e026e087b3bb7f7634842ad8ebc',
  '0x9058b4b800922150997e0bfd274385800f72a379082759baa763a31ba75349fb081ee1c0c2a2a1161942e9c76a73bf1d660df7750dfbba613d812c64ff7f55c61b',
  '0x5424f263af0436d2342145e1b13443ba84e1cdcd',
  '0x4d0ff8430d8cabc3e4eb601bc7a8dcf00cc45f7ddb5e97367bf22d0135e5d57a5f00821dd23d2ff19987c186888f0c74f1b594c17fc93117b9af00d2eb3d314a1b',
  '0x4668f8db524799f896663efcafd860123953744e',
  '0xfe2e4d315ef825d9d881417022337006ab900cfe1342344cd1e1439b1ff0ac842f46c8d6bd1ed0f571fae5dad8882962044e427793113589361c6c693ad39c7e1c',
  '0x531841ddbda6dc08619bc7fb73f2605275be26c8',
  '0xa7c26a020d8cad18402c934b029cf1e89465fe03fd6dd18f9482b417b01e47ee5555ed437700158dabf96143e74d44ab3e05fba393d6ec0d64897ca3117280af1b',
  '0x9520027e25cc18e5f48dcb02c8d80a2940f11c14',
  '0xbba1f5cbd63155ff18ab2a0ae0fcc2b1ddf1cc770af419bf93e651127a8d097c0748b4c01eed174cd1896c828f9d55dfccfc9333b4187adb568b7332c78f88271c',
  '0xa3422586d5fea8e1189e06ddfc08ba7af423b9f4',
  '0xd0f18d60fcb043ee6e75026588d0f08b895689e1787f36be25ffa04d8bfd0d920c15ea22057ea044e51bdf31d61374bcdce4735149dac44c5358ed9f289f02661c',
  '0x3b07a952eb51c16571d60cc50d8f83ed14d5995d',
  '0x50c3fab74a914f6004a500ce8fb9341631aa418e2dddcb17c6781755b76f903412e46b9219ce5605e3b1002b0e5b2afcf7723cdfde6c3530751a382fadff17a21b',
  '0x9921f3b354c9a1ebdc0ba466e84ef0afc0d86686',
  '0xb1a18a4214216d5ffb49e6b0ba2b7d2a8d3ab2cb4c7a158c72efe355da2e5297094d587189c99f645808ca59ad9432082249d3c61e2f09dd55411718d9b2fca41b',
  '0xf922ac64c6554c971e08a31a5f47fcecb0a6b1d3',
  '0x11640593460ea75648da0a3a6dc5401282a6dd4545ba4fcb2d0e22f164cabef2592bf2d5d4b863d1e5286ab888dcea4a56ed070744eaca30b5e7cef12a6dc5801c',
  '0x89f0b57aa299baf63a6410733b944aa1cc968888',
  '0x30afaba056fb11909d3f5ddae17fa4fbdc2ec3386dbd9837f6302fdb31800b42788c38446577be555a47849b9188d5b95901a959e41e0baa1b04b4a8d518c1461c',
  '0xbc54f0d6b26d45b44f3de412fedf1aba9e1d19e4',
  '0xdfb86b23797e8c0e73165039e6ca6d4bf72080e29bd9a54e5f0f7191b8d0e639074fbf3b35e217d87adfd27af0ed048c1ce4a92b35fc061bfec2a32bcc3888961b',
  '0x7abcf29da5e0633ce9acc959405e0238592133da',
  '0x74500240c2166eecbc10ccaf5795f904d15efac8259a2a8bbd624f579df95abe603d73d46868bdb0ee93df981bc65121c7b2250d6909ebf1c1e68aae9abca4bf1c',
  '0xafbd81559dabbc22dca2e9988460e4f96333bd65',
  '0x1818e14c0ca3e28c1be54b715f48447982dab2f247248694f3a23fb800921d325ff02398cd67b3918ecd7b11d4a19aaa84bd450687f0f0cc00552ac76319ba661c',
  '0x61a4940a191db244ab4acb07b1198a48aee43852',
  '0x4f234e1822be45411c0ae0efb38adbea411efdb613cab6763518cb3db0bbce10324476e8027c3abbb0a5b3e029bd141e3b338e8a8792fbcf0bf9c02e85ad001e1b',
  '0x9fa3c87eb4668984b87e185b24ae08759b0f50bd',
  '0xd4bfe0e2962e84b28c325e23bd2dc93ceed9923217cdfb275037440a4461408f00dc415392be5578441e0a9042be9cf4b6117d92bfe28a2cda79e7da9218a6f51b',
  '0xcafeda8f64c06cc8ca22103200dd7d69bcb56ccd',
  '0xadd17cc2e0635d5177bd1addbbfc3c9e7f6cef6aa7c9260aaf8effae1e8882512774e7f964ac290705fcd5013c9ac6b0a4632beca3dfd341479d8ee86ac0d31d1b',
  '0x2097b2eb3c151fb3035f9806024701b6aba0e52a',
  '0x0914c7442ac209d0e28d9bde9375d7c9e9e71ad418a551f809fa56c3ede0d0ce5fa3bc825085fde48ce3ed32d601a95ff79215e94adac8d3acb3da10d00c5c821b',
  '0xe24a157fc29799a7e3417d27fee4da1f028d132b',
  '0x64562b03f01f9354f5d5a747460ef6c0d7563a9bb55ecca8ef6c0ec52a5e832673d3a80d9543c48c724c8c506dcc71df7f47fe18b2b76a742128b41e6506cbac1c',
  '0x9300614f448a4fd4512ba5586e41528019bf266d',
  '0x84a62234e4b3ec1559c0d14def58dc20a81cff3bf86f5a5283a708ff05f0e03175b26ae18715f577cac49485b77b5869b1e749ef16757c6fdae9c16a3e6859af1c',
  '0x8b9155af0d7f48a9f9789b9fb94abc2139a9eee5',
  '0xfc961ad303a0bd21f1e39a634e7f203ee5923ee04c4e1e1d0e1d570d9469a0ab0ded16be0b8dbf85d9ef78702c5997e790451ff01c92d0f33daee1c4a23735201b',
  '0x14ba3e6b5a3abe6a778297434dbe45f0c47e12c7',
  '0x1c14ff71f640269bc6d9c29da6212720a9bade3543cb8bdf5c1309d131a305d962391915001de01ef4177f5d777685cf77fd953d8c68bc0c274f83f7873326931c',
  '0x69704f4b0a3d5183a9dde62c2807bd124159334a',
  '0x6e285fe96bc7131e555d004dd93add7198b35918f0fff2a261bb7a92f2e7ed1a1b39850693ead3f5c81b253746bfd87da6ca39a1d2d0071e83a261f94503c9fb1b',
  '0x6c42c30c87081a53abbfcd1d6adfc4816a371f30',
  '0x0537f78aad598420de85549991b83f772337703db538fcbaa69dccbc7e9d949b51f0b5803fcaeb62f474de4b0aa9a6073f008040b731d0cc5f34d111d368d7001b',
  '0xc457ac7de3170d476e74d9c9a1a116555138420f',
  '0x47fff90aa3dc35e24222c6d6f625988d55616e711093fa092947d57e14f164f86d7739143284f1c5b49ee84209e9ffb5afec9a56fcb6f48073c36166f222035e1b',
  '0xd72c4196f98af2dc99d588560d48381f067eb19c',
  '0x70097e6d3940b251f2d3245587a58a8fa20d41cdaf7a7f3f23031cd6d8f08ec10fd2dbc0a3aef448aa8cc6deec949b74c8ccd5ce15b3abab96b60ab5a26f375a1b',
  '0xc4ae404232e28427ca7db22d86dd0cae6d3c6dbb',
  '0x685d2d2cbbd92e70db0cd53d1784c670d8058f2fc8fbd18955df399adf0ac73952178614b7c742212ecf7300eb20d104471557c8f3b449cf1d3de3f8379100e61c',
  '0x58d3d6ec4967958ccd33498370a4c393679354ba',
  '0x1b1312ebc01ba904e39d3f91c9ee3f6dd07ba725498bdfa5e07f3e9a52efc6026707c9e8cb39fd177f21702f6dcaf286bbed51b821ce2a61fa0e8bad0e0c2e5c1b',
  '0x20c127e13dee3e5e80d2ac4cfe96905238ea9b8c',
  '0x6993f3783a9d8a4bc8a134067ddc433eb01277ecb24841296dbef7006ef6750969f627450a858c8ef51bca5df3797281ecfc234c933bdf70397b0352f426ad361b',
  '0xac35ddfbdaeb568d165c2f78fed58f4bed734eab',
  '0x81db3b0d8d19bcaaf0eded952ae9293bb50205fa1395f7eadd82d5bf3bc8f6fc390b96881ceb065c1e6c24252ab43e46b07ed54a345bc0d9bf97d2645f7e6a771c',
  '0x207a1868c0063039461b953b811ebe84d14da5bf',
  '0xa23c0aa225e9bf97da864e3d161433270117abcc75c1b634121d6a2399010cd87ebdb85b908ad0506d6b812471a578e3612a05fa622ba46edab6dd92f2d327741c',
  '0x148ef7b21d7b7dd1ab919d3d5e63a61c133b9f64',
  '0x89e1f6f8c610831062697a026b4f618b04ca1564fddda75eb33886311a24bdf61da2598be1952e7bb9ff9b39a0a513d88386c9cd0a92103c1454ead3e668f3191b',
  '0x566cdc799ef1637a8b31ad3066f901bdc2095205',
  '0xd929c7b760a85aaba0e63daecfd3260269439a3b605ca7bf5753574c2e3a4d204c1b76ddca7eca645e3bb0f59fc69772d42cc16099871fae8180db0082e20a6c1c',
  '0x9cd61186115468da3e9495b2df4c7b2a56f2ed68',
  '0xb2a8e0b05257f35d88e8fd14b658ecb9a3684997451ae00d0f1030050249050859037508a093398a30fd7977401946bb113a8c395fd3c7c9e4dfefb08993adcf1c',
  '0x2a09ccfd1b4c61fe5281e1e497bcae7880a146c7',
  '0x97c5693d40c3d294ae4d15dbecd8b79eab14c874a5161d3a1c8837225e308ea43d31b514a76244c57a15dc5bf2c0eb334f55a3b14127d9096e71e9eb09520c1b1b',
  '0x1bbf55970042fc7d1d66cb5658cabd30aa72e3ec',
  '0x5a0dcdee3f84e82cbe22b72e9981518496b6c38ae37b49f8908101595a75461e6fbb23119497e0058ca4472634902ad2fac7cc3d27ff0b6263c2de164bbc2a321b',
  '0xb98296c9b2d75c6c358cc9367acb4ff433f0a742',
  '0xbebae5f757779126ba2d63d2e319e44581839aa7de96a2d489090d83fc7cc47e0b228354fc0c7dc8899795aebad497d1f71162a9ea390fdf2b38473a7e74947e1c',
  '0xcd11abbc370dbce80b81a250df87b3226f2b1a49',
  '0x916cf87e4def293033aac0897271e856e5b0a4fe8aeac62174ad57529e18276c5e7a0aa5f091b8cae114a0847eae21e2419a3571395f17155aae6d38cc5b1ebc1c',
  '0x2bc6ec6fe1ea53b319ff293497e2389f259e7e39',
  '0x0d5cbf58ebff563f7ef737facaf963c473d0bfa41a8278c2dd8b61e3fa04062f460ff1511cd289f363f8a6c64bb018c65e07cc7b936c7c2aced3f64c48dcb7c91b',
  '0x06b5fd9f8cdb62a1303253484c05619f76a012b3',
  '0x04b74df93ff6f19988d79705327dc3b9550505ef03ee7bf5e1c7d35b71d997c2132c8316fc6c317365c1958816226a70454c9862cdbe71e2112a5e7d99509d7e1b',
  '0xe4B76869e6A75AF15721dA6Debe652666f905b35',
  '0xfb3d606228fe7c3febf0a9ad8bd4f92f974607947bf9e9ca92de61cb6766d62f7cc3fbf92f9549327793e12935c4998e6df56026b2ef6bcbd6220fdcdf4963b41c',
  '0xf367236d56338ac780267ac09217b02746607cae',
  '0x7088c026e41222269496886132bdd40011e6fc11d407dbac68c1c29aef891a3d1c6c80fcb4332a4a0ec9190c67b0a9b9fc10b6ee918cc6835efeae59b5617a1e1c',
  '0xaff55c7a5149477ea02c7dce7f40d9cb4d622777',
  '0xd5eb238bdcd9195c0da6a9ad89e1be9308806d6bee8051e1c8bdd9ecbd882f63454a51eeb22a44ecc29d9eb6e12185f0d7928a93f56cacebd5b2959dcf57cde01c',
  '0xddf6de3a7ecf342fa3af23a1a796829a5e3afc93',
  '0xe52e3669bcf9ae29cb37252e48f31949a5e4fe2efcdc69d9f18a35c95b63a3ef26b3bf7b78bcd79eb71fff20fde9cfb1a4dc1486ecfa244d3524b45870a441521b',
  '0x5FC2E9c6E1F32FcbFDdf5BDCd7cb9AF59bdC9b4B',
  '0xcf577a46c0bdab592bd0eceeeed2d4977e11a2818938fb4ced364680819c40162e4ac93904a77c8efee37c3750267065b86732879e40989d98908541049c7d621b',
  '0xec225a1fd31603790f5125ab5621e80d8047e901',
  '0x1bae0b91d6c5c5b873ff2a5961ed74adcdebb435be4bbd534890bcf648777c9904c5e147e68787954d20d9ebb6eb9188a617fb77164fa0965e401935e6e1c71f1b',
  '0x7fc4caa51e07cc7e25e34314e9881e88616e9e37',
  '0xee58fd17a49766206bbd5f1248f4ca39072b55a1a784be68e195a4b229e872157fbf72ac010249fd995a0213d88a084d92f97ffd6b83cd8ebcd24bb22628a8f91c',
  '0x90ff60dc045c861ddd77e1451329100f2c6041d7',
  '0x4c977012a68961ab2d64875caab8156e8f7fa9151d5a2cdbfae3036edac8ed0203762b4212f771bf94209fa81380d714132cfc3f84bc2a766f02ef3828ecd54c1c',
  '0x66ca45e79746984385d185dcc000fae482123072',
  '0xa1fe454d549fd4ce13b0f65ea6050f155438d25e51eacc18e0b60d34e54121252c5fa4839e68e1baa4614876aac471826b3495ac98a7f03bd5c9c8fd4e1843991c',
  '0x9e3d381facb08625952750561d2c350cff48dc62',
  '0x4dd7457b0d787b547b111726f984b0c20d5d7de6eda82a7657aefb43987a9be13857e18bfa98f3cf41b3e5906dd9588acc54c10488a94253988f208837a884581b',
  '0x91752f5d0ec6d3032861941071dbe0bdc3de7361',
  '0xebea73258e82071a4cf172e3a0f26c8a97cdf66476c1c5669273229cc28081cb17fb9c1b0b72f49644055cf31c2d172119494032201bb431848a9964620e9ec71b',
  '0xd74a91ad3613f1fa188396a38a898df31e6be89a',
  '0x98f7642b9847337de763de87d72e16f6212791f3f88b20555a92fd6d2ed3f4ac4b01997c9228f9ba0e7cc7d8f5840c4f9529d342d8d31e7e373bbbb16c62e0611c',
  '0xd98d839275cf356ec9e34a146c7edaaa69f29022',
  '0x3ed3bfcaf9f890230067281b1acca6d667c1e2aae024f8fd33e76aa4564db2eb37971ebd72588e5b8e608df30dffa2f1fe01575a800f5af648ee4b3eaab880181c',
  '0xd6d260d29d1784c8abc9e3a4824897a70390c2bf',
  '0xf7ad6ddde0d2a48e17e95bb86d56be026cd8d05fd224ef9187bb1661e890e2644da6430d6c60b9a4094047cbe8b89c8155935c801564e1dc481ccc32f7b6c0fa1c',
  '0xbcf02472a295f99e3753fd74fc666ef0ea0a8770',
  '0xd7f766b4db7ef5a12dbef811cb4f44fb184ffd3c47f9a3f82088e1a96d4ecdb60b946a71cb975dbe429e5cfea4780e1e9fca12e3d8eec515549dffe2ee5590bf1b',
  '0x4167b32bb11907f400d510bf590aac413c9195a0',
  '0x8e6ad871519f69bfd7b1449fc8a2d3909bb789772535bc64c145b2b85b7e403f562691ce4258910c0658a5ad0c544a76443d0e06606cf0182ab20c766eec987e1b',
  '0xf162cda1bf55187c14a2b8b3863476da92f79dfb',
  '0xcf7eeb96a3ac06845b8b18cc72179c45a07717ca09e059b5e870e6290df5ef582071b12f1fc55f035df8ae0e9d44567049431701cf7c0a9d1736016263a2a1001b',
  '0x232ae9f78b73eb4687a14f0240f76464065bf436',
  '0xa6485a57b884ec611262b6802b82499913acb455b6f4dc077a874798b76f47de4ec714276d4448a7be04bd31003182ee99d43698ef990159d153d36487e20be61c',
  '0x59ac17b102f663321ffd9e9be0e57a4ce3e59dce',
  '0xb869f3ff2f7d1ba9780c0967f140b9ee4e934a691ca064bae8f335df70a707110fada881e8d916b3b3a17ce39036efa1e167a738648fc559555ad35c4309f48b1b',
  '0x6828ddd7aa5a88e154b67040fc682625cee63e42',
  '0xf2021ab5a79ac7b76f236dd507afb76139ba3e2540ee34db46d607d40e571ced0ed93ff2c542bd53b35ea9c3975281366578ca7de67ee835a9636fb0ddb9c1771b',
  '0x9574152fa4d6c5dd04bbd3f672c6861a0e975fb3',
  '0x56548ad99878ca55a561f2ef35f554f02b33695ad91dfca94509e4087c77f2c70e0795bed54ec09d7ba545c7fb9ccf3c94e433b2481c899f3c7ab893a5c01cea1c',
  '0xfc98b088552c060856cd93d1344822daaf835eb8',
  '0x7844554c070014bc5bba70057f6c7e59c063f6a07fcc24e7a55ef6b5e83ce81568c8bf21f85d020729546a9cc8a4cad3a2551c50eb22d5f5c0b5dd704f1d58d81c',
  '0xdf2b3d6b9654a140fe7fc97265e578dcdf8c1737',
  '0x0f0f11dc7cf8b52c52fc4810d8fa9161c27c8c35a257ff4d2deaabacb2a8530d6cef990d23cf1e348a1de24bcdeb15a6745fd0fd0324c24bb8e75d66b3fe6d931c',
  '0x83d47df7006aa94b205de7a3832eafb311674b74',
  '0x507dd2fc1202dadbbe649e212856929d7a49844e4afda0dc3dfdc901532bc4e026cb1694cbcd2e85cceef82544a0019b4d9cf94de1e5a0da123a48c5d7aff4631b',
  '0xe5919152a8880ba3f39a1b8787b82261bbde4471',
  '0x295079c142f5769fc721a77f59bfba71c938c5dc2e868f5a3f226772b4d649f0721f672d008369f605dbf445b11e39136bc392e741e6f198712f57edca7ccc9c1c',
  '0x131fe52815bd0dfb503d4c69a47cf19a0f40ea9b',
  '0xa678e6c0a0d41c4d11097ea965367668aeb397afe6d84b9c0e27f44db9e68d6278e9e0efdc9b0fb62262d01507ae756415d50ad65fe3afa5633778030cd3fc671c',
  '0x47e3d2174c40dba8ae0f7059c8159245f0ab2139',
  '0xb082a27afaae3d59824824ac19d4554a590b14eee53c961b99e95bff9747cecd18bad3b1653656ad99b7382bf43570b7e97a142efab1be82c371adeded9e992a1b',
  '0xae697710e46671de4d4ce2f8b596082a8e5d0217',
  '0xd133278f18127516e5e3bc9bc35d2fa40a214e1818cc71a12e65ee06f580ec98209bb811179359b63376c55f73d2ccd25767593d2bed8318c76ae7e293c06b7f1c',
  '0xb45e03e2b06ca01e9f8c19479df0ce3874218e91',
  '0x7fa8ec41e4ce3d58364c51196b881266cea7faa9348bd4db6ab6db4e733100ca4b56139995802e4dd4b8b6751aada65da49bcd7dd47e11f11a7e46c7709458481b',
  '0x28566c6758e4724dd05980b414fb3c24182618d7',
  '0x7f0f7748fffe069dde1814077f01602a70f2e908dcc501cc595e73259bbb3c10265d079b69e2782dd2738a8a98e8d54509d16be917ab3b4be962cf2f674f9be21c',
  '0x331a72725f9038bfb8a96f5b10abc2da04095893',
  '0xabddf8bb390399aee159b3fa4ca2a880b6527933c5d8dbd195b5041f0a172e3a30d64b99aa847e42029d294732ba611fa26a732b3597b06a29f0ffdee0705ec41c',
  '0xdd9d8407f632287566f6a1b41a7bd2d94cfd4afc',
  '0x7c670a6ba4d852abf16ab83afc5480b27f1ca13836d539f52a53c60b43ef984e5c55f86e58b50a413774a081a1fdd3f27671864f1b49ba5322126792ded420b81c',
  '0x2e5d9552eb7e449465528e02774fbc1785677f88',
  '0x961e34afb1967b6e35d7d649017ce45c1f634470c386a6db177a020c568e234906d94e70c295e9bd8ea5a5fb0f5083d60ef3d368aa8b3ab6f2adfbbc20a5375a1b',
  '0xb13dd6baa767e193f56af63956c258338f42d6b3',
  '0x99df90c4a131af6d0fa98e477d7b83cd3d36061191175642d807059a2fc950b30d58c0c35eed099e94afd8ab77f8b33f6933d63fda13d0be1013a393fb51c8081c',
  '0xc1876bb98df09206a7929350e40eb0b970b2c05a',
  '0x948d7af7051935869d9955b53c7a0a16093beb9a5b374a1f70ea651b524550900066b536fffffe41bf23e902f92865f7fc2febde4b3c6ee71515b7e2254f4f681b',
  '0xb915d1e50b237a1c3a12a1487f3510cddb466dd6',
  '0xba47eb1f5d95196f566d4dc437fcb4cc768786642a0b5fe30054c960905458613bb3ace4e6793600cdd15f45b694e05c2f6cc1c2a2c98fbdb9147f2dda06b7c81b',
  '0x17921b58902a5eb485eeba82fb93ae9a5b38f0fa',
  '0x0a182571df93583486870939aeb0dc66473b46b3044f62002c3547f84c0b8451257d17534ab2165ef885eb2f8ca3d982e1df0862a8b9b6da9d52d1de496577fb1c',
  '0x7239804f2d9eea18840dfbff78b348de96c0d0b4',
  '0x1ebb755e427c410eec55e7542269ad45e8506fd34c77c22c899de2603571d2631e3bd0065a4978749989d5765b64e5ddcefd5e523ff766703b68d01e442f517e1c',
  '0xd112071a5837ac1f69e40fac7a25caaa9baafbcd',
  '0x3bc22672d90704cbfce78db013f745f200f6f13b7682ff8f6cd621d2c61b2b7a5880f22dd40108188985ebe7cf79a62da6dbc929f969aa67767c2cb3935e511e1c',
  '0x46edcfa49bbf3e3173c02a077937c9df4d48172e',
  '0xa444a278dc77eb9f3fe0de821dee8034aedc5233caea9a71b67eef24072774b21843180567a2e999c08b20778eca2ec975245998b0cf73ab6193f298e2388e491b',
  '0x312005302c73cfa23d5d8569799ae21402fb7cbb',
  '0xeae14d7025ad765941bf58f2f082d02bf76c145ad1f514a568aef4577df8ff26058d5d00407a629bc8a0d95635e0237ad9f365a2b67b9c0f7556801b101fdc001b',
  '0x254f006129ad8f9f17e8d4b10c46fcba72096b24',
  '0x79fc7e8736ff40c22f617e9ab5716b4367371b342cb78e727007834044406b9879cfb75bcf689c91527dc5abcbfe2e3f818086787d6f75681c73e74bb9f54b2c1b',
  '0x09be63125f8f671d79e3db8e8bbea7430a9debd9',
  '0xa67406a72499071f5d42159366fd63c70990c36f39d331258c6ad23e8584cc763e396b5bd577a944cf007df4753e149d17b9c370241947c4daf64c4c0122e6561b',
  '0x0ad1736cc024da05d91791cc7ab0def95b7f4eac',
  '0xcbec241321d618d72065646d8a7a004c87c8f19700ab627c83aafa2cc1c9478e6e3cc62970c64fd6afcec5c2ad3ef975a9b2773c3a5ca4ad4de3c48f2b17c7ec1c',
  '0x3067421ccd1a67d875ad29055185742201363949',
  '0x587518985f361c4bccdf1c6a47a70c0e4b9966999996882e6de82ec810e29b4e770e91fd2adb7fc471a428c98995cc7abc44a0ed5cf4ed976807cbfb5ff013631b',
  '0x11f1f206a69692955237c7ff492f851c40655c03',
  '0xb84a1176a2b748e0ce77244519146f09fcb116f499abcc3ee8c1047de1f8beca630e21774af255b6e65f2ec507744d62af9ce1793b37eff2252d41b3ad06966f1b',
  '0xa7835dca5ed50692922a895309f2cee09e9facaa',
  '0x8973ba4e96dc141d5ea8347cc666de9cd908b9fa3d4e4bdeaee53375889abbe14f6c581018d9a16e4722b6b6583c69aee88b13c3e54cb7cc218c73e0115e1ac71b',
  '0xf14049e3a833ca7bf7a451335b2ee512c604baae',
  '0x53af30de8712363a4d664eb5419ffb94720ed747239a59a59cbd194f9ec8657d57fe8a568f11647de902e80eff0deac672be98d8b3fa5402f9e3d8213b2b20931c',
  '0x0804718357d372a96aacae8ebc8d0f615c370a1f',
  '0x104baafd7bd1ff1e71dffc719f511485b58a01d7ca4353428bee3d9d131b629a4381ddefde3b9772d574b587a05ba63af27d36c8536645cf5aae2b3fde8bfcf11b',
  '0x8988e4f12247bac780158ce5bbc055603101d79c',
  '0xb3e71575b039a118cbe86a14d72f94cf2a5572ccabfcf96f3a8f2ae3a1b75c430cfc06085123ff7856e3ccaf6d789a267938bcd380a1abb7248da88876487f501c',
  '0xc2eacfbb2fe0064523758687fe3dde3baa76de4c',
  '0xfafa32645fb46620885f42a8c3e0c3fee30e6e28d30e4e4c54579c50295cca407414d061425859ee177dd3d291fc85ac6c174064015279eead8101938842a4251b',
  '0x8148007281a59b009d91c71abf5bf8b99f0b3126',
  '0xd52b0d9f69e5db48237b953c9dff946d99db5f9e035c38b6704902b86119fc1c196e4d3057e50ece1455c9c07592841559b78f38bbea6c223722227a2799f8511b',
  '0xb9ad158e0392b4809de8edcd9676df4d88fadf2e',
  '0xd39add1db5bdec0f2041c0b60083b92e34ef3eb868df381a932a3746920c88ac13cf58d9989b2cb8ec7eb0cffe2bd22e597c253d8e29334fd0b8187dea0348e81b',
  '0x98cef38de2e17be744b69da3d730e94166308dfd',
  '0xcdbe60deecef6bbe06ca167e5ca7bdddc51a169efb574a5ce3f87b9e928f30693f8e7faff3a4a29bded8255111c7aab1f1a049d326dbca94ff2c78478c50e1b61c',
  '0x9ef6da5d76b03d0199feceb8fa6edfc3c71930ff',
  '0xcd2693b77d721f6c3d08475dcda1e53b2de2ef1f87644962e15d0027148c985f3a32180c578d2dec4b87395357c6694fc70c7c1f89efc2ed958fe19d59f7aae81c',
  '0xa47b57d928738ba937760838525b58b41c11d5ea',
  '0x8ba90f450ec129bc734f4fe1e1b37edf63a364719b637411030224fe234b27530b625a6484acd7aecb2aa3f0b9e7e24ab7a00a19a0fd93c0d36e8e9517fe8f8d1c',
  '0x47930bdde395566658b31f7462645fab4b47c902',
  '0x215966dc31e566a76743c71ea7c71c68b32db78a96e17e69758cfdf8df82dacc2de96d61722ef033573d94bb5dd075746482401390bedcc83e37cd8aa999cee91b',
  '0x72c71cd40b664ab00f771d9d8b74bce764ca24c5',
  '0x84b3184634eb0267cb12806b34e657cf6d89980f05fa4914e1894700a40841556eb653a2c3971aa394036516fbfdba4abe1a39df917731eac1c1358b68545ef41b',
  '0x18c6a47aca1c6a237e53ed2fc3a8fb392c97169b',
  '0x2cb4e276dc119e61e6144f32573934697af3414058b39e6704aedee16ca454f230db1bf23080a389dc58ce559e361e7c407ea9dcf3bcb899fbc04468da87ec5e1c',
  '0x0c9b85c9997a8466f996168f6374c1af1d76f1a3',
  '0xc7ec9b6653773bbee7da3f6e2d9aa3ce6a74b76e868a32c651aac3871cec4f57371e0dd453f5fda39dec7854a1611630aeadbf80e75f78bd96fdc97a7094a3cf1c',
  '0x2be97c5474b250d986d8243b7f77f52183d12bd8',
  '0xd7d068aff58b371dfc5fabbb4261e1d9e46ce0d053879cc13e4be3f2dc03c56c15275fc152caee65dc2efcecf1f776f7644a42b98044cf4378e7ce0035cb928e1c',
  '0x10bbad85b0d79f279edbb10b3db5444c2e222c80',
  '0x659dbd5346b97cadd5154016f865cb9fb52aee4fad50f371c4a13322ed03727c2b8260072ca31f45c0313a9d26efe83bdb1b721f54eceec473291aeb7f8476241c',
  '0x095d02a9c07bcf24834ea3cbdaecc4b0359a4d14',
  '0xbcca3c15b339ee1daabf01e3bd35d60d93db4a9ac8f05efe1ea26f8d942f47a70d791cb558ba3ebe22403c6618171141c644ae8e0929a424242007c5c8a1616a1b',
  '0xd57ccca520179ff46422df1a9408d15f94e24520',
  '0xffbdfe5bd3b41dcec0cb8e603a667e52e992883545f3f0dde2d52d961a42e9d409e2c2eceecabebe1e7d962453c8b5dcce3a7783cf70b59a77f61945406cb7441c',
  '0x95d5aa80db67e765962c677c9d6cc6feb33fa56b',
  '0xfdb948416eb87c1832e51709c726e30ebf70abe3fa9f6ad9bcd37db8d294dd4d53946d554e9d4cc16551876870a7a93d190da17f22f679b2a5403c8b2167054b1c',
  '0x8d7b0ce5917ba82a52ec700fcee70b6fdfccc03b',
  '0x3f1ef5c9dcb0eee7159b5e875ac4cce5dfd66d524dcb953a48c7e4953aad402d3b305ccd55beb55b3336c8200ae27c8140cdf3ffd4fd6ee9fed3695713e967311b',
  '0x17a454dd12385b7fb11ff013519592794b0ac6db',
  '0xe1595ad44948c9f592ebf661ad21bd975ee7a928760a0af512d12ae4b99b33146bdc5c027ffe7e911df7a2258eff23019456d0db7c9577e48f78238f2f07e0501b',
  '0x79864b719729599a4695f62ad22ad488ab290e58',
  '0x0a0200c655a5ea320f56db366e23e7b7c6d9ce167e96f58a23002624be5bfd283a6a3fa2f8758d01d37648ee5780db406c69cffa68d3d86029d20f706299711d1b',
  '0x87af25da616dbb0987644afd2bd7f3c6b4fe644b',
  '0xe4ff369a9b43c8a99b73efca68388009199015efe763bec1c8de992580a67548451ec246a5a1ca4d71aa00666b05bae590061f4d6677aa501dc7270361da206c1c',
  '0x2dd4f2b0062bfd2372f617af1efcdebb07e7a7b0',
  '0x8139335a644571e18b88f5c7a8b4c8276526151c2c7cb04ae114eed7382b0434017632f052e181068d7fbf0ab53467cd1d3f66b4cccc75f8cf058c01199256ee1b',
  '0xcbe1b7c5bacc4981bd53cf7b8e5faf9efba06b2b',
  '0x2f4ade26b9b2358fc773c9c9184e7bff1835786af9fe0348d2a52e12b86ee1a04db4409978a0201e959dbaaae6509db9e75e16e66d066f4badd53ec3ee5ec4e41c',
  '0xc0ad9eb831ad7f835d9477d939cf85b8813634c5',
  '0x012f071e2684b51d38e6bb16413c59f54b62d514939d7fa3c4e7be696e0ae2685eec6a91ebb83426612ef1e1b92aa0514ce4144b8e7ececf579ab9a2947391b81b',
  '0xd88b2b20bd378a9e9d209bcce52bc614f3824858',
  '0x3d8f1ee474138cbf3c1951f7f954d8fcd22de7361692f64741accce1176a829e191756873f0800d10fc679ddcb762d95893fb7b9c0272e8cbc08b4170643c1881b',
  '0x017ef327bea9aed5580a82eb6e84eafe17a581c1',
  '0xa5d954184fbd6c61c208a135b6310f5e8bd3537ecf979b43bcfbbca33d16c03c0235dd466b5deca29828536274878b0d8bd42ac09edd5d1ebf6c191fed92a4241b',
  '0x571bc9181fbdc3b4d298ce025b7ce69dd5a0d4d9',
  '0xa3e3cb282da3205dcbf5d2e8d657c57b108854d08c2a9ae9d44626be13fc6c45483cfe54f4703084e3983f88873c2d2ea2daf332e525bed208d25544d073a5631b',
  '0x75b9b86dae8faec51d41092feda0cfb58a49fab4',
  '0x92d1de343d63f8f95942d24d10a34cef14947f9bd29666c1284fc09b4c98de8478d9dcc2c8e256fb56d768c8228189218c22bf95cf6f6860b6afb528bca815f51b',
  '0x24819ce13ce8ebd4a9cbedc9763df4cb73c112db',
  '0xbb2e82ab85330e5946fd08ac7141fbbc91a3ad2aa0810679ff789e7abeabbece530edd23fc58bf378e39e8965f5c25c9c294cedaca4847a24d7be5c305e4b3f61c',
  '0x014ba17bbfef59f9d7001e40b058c60e6d9340d4',
  '0xeff3762f6299048f4fe5856beb0dcf6fa2d32d8bf31a4515ab59c63e4eda7d93157d6e0fecc24bd90fff515270484425447082569867ecf68c5318047f5157921b',
  '0x0d00b939ea1e4e070a1e4f0b36af5d64a958775b',
  '0xa330593e9f0562733de191c36607d44e7b02dc1a829c9523d6d5d077b60e2f89108fc6bc36240dc03f7aa63e6f9a512eccd456bb2847e653d585c1ed66aefb591c',
  '0x490132355cb7a7273238e6fe87a0cc31751e816e',
  '0x3782a5cb2f2ef03a1deb30de9f1f5bc5354dd89ec4589ccadfd3c6c98f493c8a487345dbb6b0db0798c310c6d542c16bacda6d90ab943dda7b1e49457eed366a1b',
  '0xeb70b22f024acf5c3ff7834512ce4ad4ddd8c005',
  '0x1d1f49b31882c7a64bbce36b2f3134c1a143ebae4530847b8dd57bcf540f63d121522511c79a9704532401c14c4d827cbfd22d2e9816941cf46c8e3c4a90771a1b',
  '0x8c059e23890ad6e2a423fb5235956e17c7c92d7f',
  '0x3deb169c6662a9f8b6c808b81082afb12146a1e83b0630b20bccbcb1c33585cc67ec1679a747cc1342d891ed845963aa271c6af43f31a27735c7ae9e62cbce931c',
  '0xab4652e4e2ff9dc4fea51d65375198c360133530',
  '0x8af6e3fc9f317b42af1fe2426a924142550a60ebe9efc1e37850e1c79750ed69210375fed1b09722adbdae210d91d98ab26732d348237cd1105ae854446ab6671c',
  '0x613731c4eb5a0f3a1d5a98e6e88603b65355cffb',
  '0x9944699fb5ff61f34790d453c74881db966b400f95e775b245db0b50c6284a8a711290c5b6308c5e8bdadb1ba45066d1ecf2d9f7d3fe3615e317d3beafec1e201c',
  '0x4af7aea6c737e870d5bd0e2365f780e1ebc5f6ea',
  '0xb06deb84333de5d6250e4799ac48369279ba35f489cd34e57c4550c2f9e0844613cade43cf29a7adf85a896d70b0fb913c647f35d8a15854fb29bac23a35f0e61b',
  '0xea888017a2252708f0187d338237c98bb000694a',
  '0x316e3e05344bde2bb4bf74c053bc4623e126d91e4dfa60d4dfb4b0c060c3ad4d58f74b08e1efaf6697efd2de61d22f2ecba6d65f836d746cbb12eb9bcf643f2e1b',
  '0x302ee0f36c50fb915429e0a915ac83aeb23e398d',
  '0xe38f7a210578e41d9aea9204bd8378e896a99f5cf9e4cb9aa6957a1a41a1c13e7fea547cc4939f7559af940d326d62bc56ba6ded949713910503cc11c241796f1c',
  '0xe1d8ac6508d1ef3e4644a52d6aa8f1eae8ef80ab',
  '0x75efc7a97c4a9989932838c63fe24dcf6779ecb2837dc1ac747c8e2d5871d21b1caf6fbe0782df46d4a132fefddaa8d4427b35250e14ae1550cc6b9801c29c451c',
  '0xfbf160c95cabb99e291640d48e6fcac787bca830',
  '0x8dea0027d3a0be3235f4378062f2ba88d2aada724b9e3169a7b5cc4d6333d03102d8e9bef8a99b64a4d4ea5c38378a8d7796e7a233f30d84c494c531c4de6b1c1c',
  '0xd0107e57074536596c6c25485253f8ad9de3afa8',
  '0xb3e07103f8a40c08a0ad6fea0ecad386732e2e6508586389cc0abfaecece29e64dc6b03ee3531fa75c3cd3e3604a2fcf5592418d9cdafa6a3cbc148f2d6acdc11c',
  '0xbfd1fec1d68fe87fce1dd9b290a3a3a61b839e89',
  '0x2a56ddd850bbc99d31029a4c765a2ee42d8a46dcc1a438a811ccdc9e3ac0937d359c10dbb87f986ba4f9c38cfa9573f912d786ce71ceb095bd961fd2277afac01b',
  '0xab7f01ad6cb0d5086f8bcf083523a1db0d93c244',
  '0xb09382784135d31d098ac549b1d0366e0fa9dd5cc8959dc785c7b47f157cad55738d0a2c3503294d5aa5bb1a848ed5dc3d871ac7cc9b46655dddc93300d059001c',
  '0xe6a212ffbcc9813c832ac8ef832a4cf40ec8125f',
  '0x5afc3127c6292a1bab4a8da1029f62d339bffcf2dc0c6547269685d24e612aa1633826c852ca3bd542cba82d94403f3a37d24be66e78d57baec7f5863f9805381b',
  '0xf1c531cf1e014a30ca0ccc9944ef0a37833c2ab3',
  '0x371d06b42c487487ed31ba620c65f7c647f6a07b2bd5b82d5ace7740ddd4e596052cbc1e9ce28c44b9d69da14545a831e2c60083af95b33844e9753c02af56441c',
  '0xaf25041a2c0e4597748786bb285d3bfb17b26457',
  '0xd0e29efced22c79ccb5b183bf1bb3b99d81963c8374a154e626b58187f91899a23dbcee0749fda3ad370842cdbe6278f066637c558474e0836585e82c5875e601b',
  '0x7114d5918f545fe838ec5ae00b76a73dc434cd22',
  '0xf93f46194f6eed0d5ee7fabc48c9dd18ac8c6521f4f1e9b2a82199c6efbae68f0c55c8c0e59c13c34778acc5378429afa0637be7710cae1eb4326670895d995c1b',
  '0x2E43ED0d34A1D3FFb0FDDbC832b0a731d6Ad3d3e',
  '0xb42fa73aa6134ee317b4825c573b17acb0b2cc4cde9d0f07af9b8a1519071e9c1302ff67ea14bb6304fd0a5e974999ced742cbbc221cd486b05cef44bf0a64641b',
  '0xc27487467c0F84BDD33C09D0A70b86F83552bE8E',
  '0x4b72a9811e6ce7c7f73d54eb05c6246a67ef99da4b85ae8248ee83445f7e9f7c097c368c828e75a644839024a5e475e8e89ad390095a0bb7f55c0692e92466df1b',
  '0x875915BdD62885604AacDa3B166d756a379D646D',
  '0x21172f7759698254bc1e05fc9dcc06aaa1bceef4c400660bdb817e114b0cd25a18e438ac347f1674af7986b441bf66ef1aa92f0a43f7e56a5f2d90a9f900d95f1c',
  '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
  '0x59d3e0aa38b799841e682f85b7783fb85bf25550db90411e10cf2e9151809c325c5e793bd4258b11526f64a4d8098abd5f6c9bdbce85bf18a19d72c3998c225a1b',
  '0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2',
  '0x2eec82bcb83522ffcfc9bb548c0089fa0b00699f5a985b395675050a5898a84d5a47c7ed07eeeab25c70f580b208651dbed4801e3b5a8753bac54ce0e83d5d231c',
  '0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db',
  '0x6129d06f3edbb1e9844e8433b2997e3f4e64954d0cee00116324c7cbd43683bc6b0ee625ef69df0237ccf6df3bbe02956e58df03a2fcfbbabeed369dbd047a9c1c'
];
