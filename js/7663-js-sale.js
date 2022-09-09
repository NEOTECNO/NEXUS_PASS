const CONTRACT_ADDR = "0x905f39D647D1ac1F9bF1e31444737a9881A71168";

const abi = [{"inputs":[{"internalType":"address","name":"_signerAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_PER_TRX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PUBLIC_MINT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WHITELIST_MINT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PUBLIC_SALE_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WHITELIST_SALE_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"isValidData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"mintToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"message","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"recoverSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCostPublic","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCostWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPB","type":"uint256"}],"name":"setMaxPB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxTrx","type":"uint256"}],"name":"setMaxPerTrx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxWL","type":"uint256"}],"name":"setMaxWL","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPublicSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setReveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriPrefix","type":"string"}],"name":"setUriPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"splitSignature","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalPublicMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalWhitelistMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uriPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uriSuffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whiteListSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

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
			  document.getElementById("tokens_available").innerHTML = totalSupply + "/" + "5000";
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
	  else { if (WL) { document.getElementById("phase").innerHTML = "WHITELIST MINT | MAX " + maxPerTx + " PER TRX"; }
	  else { document.getElementById("phase").innerHTML = "PUBLIC MINT | MAX " + maxPerTx + " PER TRX"; }
	  }

	  document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "5000";
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
  '0x1b36a4e50158fe95927449f672459c445d64f604129b34ddf9c0e3bf0f5676a15431ec2985c148011cf289d836dae37a659b2485c623348ba5814760f6c279df1b',
  '0x4755D63F5b81BBBf72804F6F15B69F2920A24D82',
  '0xcb1130d57f7976737d669473379a598555ed3c0ebc544ed8fb40477b5dfc08dd743a5d32aa43856cdb7f438870d6ca9899100ef786fe3140c9cb0a5a60bbffa81b',
  '0x5a68E99BEE36B45Af3BE30b45e76bD7c02F4128f',
  '0x8353af162598bedf5627998cc35c543a49704f7ce5b9cb36a4513716290159605f089711c961e7c011c9d0bd26ec789db65897db9c9375d75a6b0ac530c2e7f11b',
  '0xa3422586d5FEa8e1189E06dDFC08ba7aF423B9F4',
  '0x68e4359206e6c6effadcd63f58f33126436efc439382fe64e9b64ddb8e7e165f38fc36a4734ea9ca059c8900bffd2b5e00c569fb02ae6b1bc9cdb2bbbd29960c1b',
  '0x2Bc65829e53c38889B16B4b7846d49B573c1916c',
  '0x640428388553bfda1755313cfff0102777d402f884dc99772ad976a7ef84ba9575b4c7b73de0b1ab2c2265e5e00057dcb1fa23af10b5a1a56710380627019a941b',
  '0x1603Abc39AB33b95E3323D52eE41C41069Ba01Fc',
  '0x82e59ce354f7cac1aed196d667fc9465bc6e3a56e52d0743b5f97e5743d8aebb7fc19f6ee7c54474af5aea8ce52f3d2f7716a7e876b014c82b0665ab8ff7a6111c',
  '0x5647c4e7d4a12AB9cBc0067212D49eAF4888f988',
  '0x34693fbe4a711966c5d1fd8db31ad3349cfa66a6a41954804b9ba53b4c5001be7c4418af9ee17fbbb0d6a24115ce262599e61da1ec870ebc84c047884b450dd01b',
  '0x041d366C8a182D9B7f09A3Fe230fA4E97D776DFb',
  '0x52e901849d648f82bb5fed5a719ae906c4f1a30bc61f69c53a8edface09f7515485378e0d034c0ff5ef0d55664112dc805f42c1918c69ff0db1311bdec8163161b',
  '0x424ffda72e684AeBF071f1d3a59498B688999d2E',
  '0x0bb82ecb6e29bb5fcf2adf94d51b83444c5fa36ceb7aca4ea0feb75791b14cc36038cf426dbd9a16305f21a3367a35628bbea07a0a19ab0da02ab5662e26e1411c',
  '0x31f630C6bcE03795220239D2467F7F0844454f37',
  '0x48cd8d0dc22f4295dc2883ebfc5a785e085ec93d8b9e3018a1b3c931e76929bf5ad04f60fa8a2538085ab184c08363e9470232e04355f7aa2bea877cc7f9a3831c',
  '0xe56E3f3017C04caA3b83847324b4067166DE8fFc',
  '0x12fa6399a20daba2c76e0a6d90a0c5d699aa2b2644532d1e6d3b8dc06781f9f34e502b424ce15cf0da02884fff7f4be67ea8ed101a00bca0b3b4c8261011ff3b1c',
  '0x66Ca45e79746984385d185dCC000FAE482123072',
  '0xc21cabcbb9b7c9049c4c47d45944c9bc5590e4139899ef6f1598fa4e956edd6864988fc318cf94ccb9ca79e39561fb8985a2af77a9e7c5a142dad4d3082140321c',
  '0x25e7601BA5FEC254E0834008CF40594EdfD08b0f',
  '0x57e8ace58b3d8bb096ffd5560e7cd50c0464c07ebff112e8ecf9818751e077d616daa8e5d53214e9ef9865f55a776223e15115eba61d534a38335f56c1e29bc11b',
  '0x4A610ac6091176326cD7D0193C647cd3C38A6D66',
  '0x2c77791c41205c709621bfb1d7055b3a4adf4041d7a3682de773f8dc0e97f8215f1a2157f16ead03e8e50ae19e04b4153c6d6bb67351b21bc864c244244e566a1b',
  '0x8028407DDEdb611686446edA47619754e299E005',
  '0x3c6b0dfe3b600a372de98bcd3dd452b96f9e1dc161d8674bce78b9a0a6f1176176facafd3cb4d5a2ec830ebf1fb96e411e1bf132054869d5712c10d3c846cb2f1c',
  '0xAd49076be626DA5B48b317f2B4fac09092Fd7ad9',
  '0xec83c934e5655e6204a82155e823b8af8a351c36830719b71cfd60bcab622ae63997ca948db3c952f7f36a6eeb02a78ae04691d39482d716c4e16186e4579cdd1b',
  '0x19743E1a9D2f16CC87d36ACC243E5232c8A7B3c7',
  '0x0a704de591521969d0eff41d633cb13c98f9d7f9050a8cc96982ca86cd1c1a5c2acc924fa18b208f325f135d04f3d19831fa9a43a2c385f9de2ef234a1b29cd21c',
  '0x38395321aa7e0f5Bf2d6De007dfb293988Ec6Ee0',
  '0xeb2dd144dac94a32824f59a91b72e2b6f30a676e42ad9894693dcb0bc66b26b175fe0b6ea1212a018e5f625774d6cef43feca4d47b7087eb5ab7cd946fd3dff11b',
  '0x6838ed1Fd9b7200499e117fD4383BcF7aeb527BA',
  '0xfed287f019cb5d3360d194d9d9e5f7271d16915546a286a53d4ba44beb27e51b2e8e8fa01c78bb9e8b92eb627a2fc8f457f43d6b11a8da6517600b801271928f1c',
  '0x7444eFD31d6d451372FDd340dE3612Be7679fABD',
  '0x12f6e0d095a5e0664ed5354295df1f70255a350aace22ab261a00cb6e45e5973457ca0dc4785aa182e43ea1147c6eb1aa7e2078b7acc322b1ca44d0b6cf1e6ae1b',
  '0xd93e4775daF33cEE3Bd60d2e7aD868989FA0fE68',
  '0x6599b736768e0eba162638bf0094689ae91d96598e44b7c08580c5280dea0a2168e44aa9f6a68ebac90b67fbd4b4185202a38dd81dd2ca8f72747d2df8360aae1b',
  '0x2ee68A69AD1ce8fc984A77E4B796e268B6d5071e',
  '0x31425bbe1240868cde5e26acca1afd99574110f7e3b5b2b78033d65c02f14358534684547e299ffc8f07f7e342d56ee8eb62d11b03c40e08be3da5a5f53997e51b',
  '0x06a876607ea04571dde2ba2fef1d5cdbcd3ecd95',
  '0xeb76c624b8f73a4aa12c84acfc1414a5811132afeb4bd5deb46eef41d0baee9741687a9c9c581cdd8876c5308d59db6b6bf24466406b6cf04dbc6e1105e4cb1a1c',
  '0x6b94138781772BcbB34FeF5bF6CA3dcFC549fa25',
  '0x97b7a4f36d450e211747086caa12126d3063ad2284999ca20814f0963acafde300339f99d7c54dd51c2ede4cd661106fe19b9a5e5aa2d3aa2aa1c2262a5ce9f21c',
  '0x8230b13E37a3a8EE5BD24Ca399Ed8db0Dd397a59',
  '0x8ba95073bfd4a9d06b598daa5cfed98092f008bebeeb944cdc8c128c61b7b7b372f1d9f4c8ba3bf0ea99e27b427722f31f74836fbf74494ec6daeef7d279f4e21b',
  '0xf6F6Ff9B0cd1B939DD58184755484C161EC9699C',
  '0x4eef8bb7de893ffb59f4ed38f5ef98f7f20a3c3aeee90f349d0318dd10d4da78639656f82c3c7ba467a6f30092625206506ef93ee3151a4f3bec9a01b89e07081c',
  '0x3D11D0dA96c4b3E0a9C902d38391fdF2Ff76A556',
  '0xa73533b3179ed8d4b20c4325e9e9ed63232325fbede5736125837e7822758e722e18d84553f66212ee3c76be2a2ef740d5972fb6d28573f528f727652a131e4a1b',
  '0x06714A2A843daa939132Dc22F4138D3E9db191eF',
  '0x978c84e2ecdbcf4124b6546d2bcf2683881a79e4a90a517d0df18d233717f4fc10d02085f310550fb47f6814aca006917c5f8c52237524bedba1d232579e22fa1c',
  '0x370c6ffa5FBD9A57DAC2D20509032B70BaBA6577',
  '0x85c1fa2a1c07e5d93867e71a0edd20ba74574186d11844f7790b3c4a5abf39373c5621ba604df2ba133d9f26d26b9e19335a9512abc155cfcfb51b832f57289b1b',
  '0xA9F4c53091CF79adF527Aa94AE2212aac4450485',
  '0x4301620a3c0cba2a9fcc23961c44ea54aa30fef082547def8527541c4ee586510b76a2bee0e116e0f53e71d038bf0cfee5e0801c4f38ac686953c8e169492a2e1b',
  '0xbcF02472A295F99e3753fD74Fc666ef0EA0A8770',
  '0x6a0b1db344a9f299705718a468537b5e03cbf2c9ab73629baec3315c71fce1aa77081b3f3a8871cd1a24521f52f90b1cbe8a15e429615c2d1111b5629de597d11b',
  '0x7058686AD433E5d8af6bC0e23bAAC4fD52312ddF',
  '0x79ffc54112db96fe59844eeee98a2019bcd54cf86291514c489d72cd3b42faf74a1f7752bc4fd690327a8d2a20109369408f62a6a7726f429d87b668e20f9d001c',
  '0xC6E6e1b159f60fa5fc3Cdc9Dd7385fb8dd61b24d',
  '0xcc01343771a01085a1f3dcededa5967031c566e75a45089407a520b4ce5b34663ef93234a1f171c121cd01c906b473f115b4a60a8240b2eb9fb693d1e478fc3d1b',
  '0xe470890a7F8B8d74fbF3A05d73732827C7f9c8cE',
  '0x2f87c78e0cadf145f8d74c2d84db7781cdf819ac42001ac74194a53b66abc89414c6f7bc22729e93bf276d5bcd7ff8a005f9e0f528f74f17c324df19b269906e1c',
  '0xe426f30edd69afb1ce67dd11fe04e75de0b610ad',
  '0x7b2b03e1108f6890ce647e479816e0a8ba7d69676ec49da307c83e2fc41351a57691a9a403adf7a20a3a656ab4ff04ec67487dbd4ffe43953c5448d2773e29631c',
  '0x32131Dd672EC67d2E8e301aE392b5ebef2789353',
  '0x0f7e8f91c483bde413dbe21017ba98f1be870146fb0607628670e8246cd072544aa632652ce7bb1f9b4ab340cd38cb03f4d1b92d99cfff8420cce33eea78dd7e1c',
  '0xB0Cd10CC36667a5eB8901046252E5185c1Cf9AC5',
  '0x8dbe821472d576644a416e0988b071e711c950cb58fff2e9ca47da6f27d3cbea1754c1236bbaa137e9a65e4c17a604764a30134b3260e960b76c72d4b21d35ba1c',
  '0xb5fc32dd1F6401ad53B3aDf42D174826BAB9CfDb',
  '0x8d9c343a7e2ac5dd173974a9d0f0c81094f6d24742b0a77e99d7beba6449755347ffbb2a1a428aa4c776cc1aa5caa983ff5760ce10cfb1cf3abe5976717d80df1b',
  '0x5de7Ce0332A6C1485D36aEA6b2cEfe29Ce2109cC',
  '0xfd24196d0f09d67ff7b6a64987546970dc688c31ae31727d343cd2995196947646481a0cb22bbe25c7f6e54b1344d6b632491a9d681a76a3c2bc79741865c07e1c',
  '0x4b3DcC15a8ab43128210fE3327BC830c36a15541',
  '0x697998b70050e157fbca1017e4c7fd89d97414f0c07f6abbe8654ed7162d0198749e4ea29f425caf572d2fce235ce2237f7ea553f653ed46eafae4bf5e8801851c',
  '0xDcb67bE028fB41f5EeAB1E3E5AbDaFE533E1b408',
  '0xc1f65f02af6649a3e6cca72f7378acfcb264b6d2d10e466a4d7dc2e57ddf3d9927d3193bd06d996a7147583a8fe07b1f5e28ad1fc3894fb7dc0eaa48386947441c',
  '0xA403d15bC039c7dB1a87C636958bcD4a0052BC0F',
  '0x8d29e486479be4ab2e7cb0590a170885c9a222a9324cfa36265259819d6a0a1617d6bdaee908f7c3ba241b102cf863cbe400d4444ece36f8fd7f27cfa545e4021b',
  '0xa3451276eCFB50088B97eC6F76197AF4fD8A1548',
  '0x02e3f4a76c3e5334ac8e5fe0cf7fd804d4b1e1fbe35f22a23378bb9bece7ddf10f841ee8b7bb9ea9a2f6cf8a3a240fdcdac6315f032e535cd35b685cd85b0a4f1b',
  '0xa11B8Bd68E749010d4D28fD516a363E766BE9E99',
  '0x8d1d5827930c87035202219d1fe0c656a15109182cf7cb146afd6718b9101eac710c631c009604def75145159ee7d9d740bcf94ecbcba78bdaed478c967ca10d1c',
  '0x9Dd7C823C759B48192306D59a05A352de3ef188f',
  '0x6c68d43acc27055a8d4ec8b1be457072696378eea7786c54688db2969abf022567f35bdbe2c92f6c9c274676c011c950ff939bd7d66e8edc608ae2544ea9abd71c',
  '0x97Cf2E2BBB9300504e235814077fEca675d21524',
  '0xa63d484659eb79da8eaa57928347420943f6ddc7482994da0cbde978b25d11bf2c1a9928871054ba7f45d65f74fcbc4b9e19807294d16a98bcd0ffe6a486ba301c',
  '0x8d34d8B0d13eB91Ae1A0F093b13C676852F2a22C',
  '0xde0cba6ed694844f68bd6786d329fe14f1f2ad133c12788d8cc9f75e6e62a8753fbb91893a62d69d8b339cd3b24a6941b48d95d8ae7ccef73758ecb47d1376251c',
  '0x7531913Faf725Ca035A833ac7A7dA896dD85D603',
  '0xd25c28fe1e365937f62d1fda4432c7aa02ebaf3532285aae96eb5fb93a4e2d4671c0b193ebb555e708c26da4f310a13665e828c2262f228db3e317808a4094601b',
  '0x3B994C5d6689F6b7fd00743b6Bcc82363581466E',
  '0xce37ab3eeaff250835ee24803c31752740eebcda98d8594a76f0e9078cc2a4836bfda57fea804784cc0fc24fbf91ddaa2e638181e8f97c92736dee2e49b1320d1c',
  '0x4668F8db524799F896663EfcAFd860123953744E',
  '0xb1d99328344c0e0c3b1e160242aa7ae5bd1b7c559983fa002b6ca5f6212637b06b3519fe045145a6ddd3c70f61ae850a6cb82755eb883204c1e9e249542b03781b',
  '0x62786884B5c40B4B12774055a6c40f41926EAe15',
  '0x16c9eee9575d4d9508289a37da3a90064263b47a3a459f4a08b371a34d04a3fc477b37082fea28c6779b457a61f6594921e1dd79b436050c3615ba8a9d4dc4e21b',
  '0x17921B58902a5EB485eEba82fB93Ae9A5B38F0fa',
  '0x7d6b8e0a0dcd57489ce3243940d07eec279684c5b9fae01785a12eeb4597e70e500116e2a373adf4d1125edf2021985871b0e1d35d5cc63651ae32436512925e1b',
  '0xbfc63b805176BC32f796669A9C5e5DEA4797865a',
  '0xdd8d6a4645b85c08ac3a044600692b9b15a677fa5e293ac58af264c53e97d21174826c3745ffb1883d663e8f0800c13c400426a4914ff6de1b47cf6b7b815ec41b',
  '0xB54A407B18e5f36D15E7208D27752dB68d4085eA',
  '0x44ff9034e9ebe1d4b11034b2cba2e95f67173416efb2431d3aa4031371bb33c01afcfa2d16ca652ae9898a0b34270d1d4c54c4711bcb674efc7c16974a011d8e1c',
  '0xf187B56ff92BeaF75dA2Ed2C7F1d77781EEc6Dce',
  '0x8ebef548f118d656f0438f27ee4e06370232dd52f2f4ca19c9757f46f1939670127088bd62a48660929fc765a57d48a8c2b178bbe65d1c13308869ea6fcd3bea1c',
  '0xD8b43036de030D512829201CFDA57c8386CC8A7B',
  '0xef16c1602c50c537e8de884f62c6f3af57d43ec06011df6033b710ceb0205ff77f40cc2009f0d0758f78a59423408dd0b3794e9bc8230d3667b351864b9f71d71c',
  '0x52DA39325E7B4e185fA7b041082Ee11B9c823B34',
  '0xc841011179fc4c39cb78a789acfd46ef9509f618d926fcfca38b686e31b82188215a36a6c95feca7bc642d4136847d62739c1527988e4201bf47f87afc1a83941c',
  '0x14026e9027e1430A686cE5Bda65D23Ba53959E11',
  '0x27421d9f3c8d43411db8d5ec863f615833fdcc1c2e6c4d4414e5c9fc6515d80f127455b318a670366899fd31657e76784ed4bdf9e2e0ff00b70c345c6a3bfcd31c',
  '0x12D75814604865C2e9dD988F43b3d75afb0D47F2',
  '0x0ab5a5559e5144a34a388b7bea6bf259845a3b4e346db5b0de33b9c1c34f0bd11acf67650e242c55136de3ac7efc60dc73626b9295fc589c16cfbd561c47de0a1c',
  '0x800Abecb04a65F13C254Af97Ec42F84694ce4c3a',
  '0x59dc24ca999875c00ac1df2e321b880954a13f5d09fcb6570c3a9bdf18dfda426e7ba392583ce15a955852a05ff75e7bd2f6eae7bc3b8824a9ba2808ca4a0eb01b',
  '0xCeBCfDDc9f5881A055b82d9318d7b376dC1E1190',
  '0xb4f81d7234fc8a292a6b5f2758b40cd4493e6de6770acc684869310f17afd51032b15bb878959930db7a53bea9ff2f94372b1a72049967c1195ad3aec86b740c1b',
  '0x2f642D963A1428e82CD9F229C781eCF689e9c9F0',
  '0xb575b6d5935e9a4f90f92add994550bbc93b00eed6bfd1b59d285d41955bb0d518fe6de3b9255bb4f670efdff2681bb4d3507ddb93bc5f422595d163f9f5b9051b',
  '0x28B23078039e71C82A797f2B8DFe5c699f5AA73E',
  '0x9976eb184e87ffb9c0c94e0c95bbd194af18a0553617ea59dfcb54638bdf8d4911d9a25dced412b58fcc543951f902304c3216ccdfa01a5b2e2fa0d9f7ebbbb21b',
  '0xbe82F82692a0a5c38E7bb20b5E498DAc9B6E32Cb',
  '0x2f5417c41b6a3cac4f6d2da227850c66f1836ee8b4d38e9f95ba73f4db0966205f3f3ba1b0e97c861bf3a94108b9be0e1e97a28a4b32172c37e26e1a2ccf62c31b',
  '0xbAFa0ecd146C524bF4033b2Ec04Cb5774B08F75d',
  '0xc411a9f00835bd1a871c215e6e2f488d86e330c3a323d1d2cdaaa027493b4ec7204b4dc7602c22ca69d5a60c2336eec5f5f6fb9dd7172889426ee3758fe183db1b',
  '0xF8571199B2Ec966C9497683205520A5D7DCcDBc7',
  '0xc6bbd4f600a5d0a6bfd25c350e1eb0cd2bec63111c7e0502870cbc0b22506758082523bea1d3365cf8aad3ba28350ba59cda0dda1463543596a2c5c90ff326d61c',
  '0x5F3Bf71Aef44E5C9dc152D001c5A88b2502057E8',
  '0x1b36a4e50158fe95927449f672459c445d64f604129b34ddf9c0e3bf0f5676a15431ec2985c148011cf289d836dae37a659b2485c623348ba5814760f6c279df1b',
  '0x8122f9bCd4F39a84C5de0810389E4f2187dc9E77',
  '0x2e9bef74e9e5d1f26933450a8a0796362695f2440556d7cea4f106e8a150ba89107fc79d975b58a3ba061caca033ba9311eae01123f8e145b84b73c21469ce1c1c',
  '0xa477f058a9EC8e40BF1419349fa07D629881CDe1',
  '0xe7bd926f198f6bef55eb9f166389781abde84e626870308f1ef58fc0fc11ac1d06410ad0f3d177c6de72d8b332fc0697a86e46d0d8d75f2bc5700b14f6f888bd1c',
  '0xC2D26Dc400825440D18c7b1B1242Ce951b65EA5c',
  '0x397ff3ef54c24b2ddd6bbb1e1b3ba4928cc62e98553697b6bdd05537014324d143699ce3b4a4f65649cff2985790bbac5550958aadaf2cd0e65e2e200e2fd3bd1b',
  '0xF683EB44B163A949Eb20B0E62C62DBbdd52c5CA5',
  '0x8f0afbe3fcdaaac1bf71a7dca8dd16143658ab1980d28ed5b4f24d842eead01b2f71e13c18c1daa0897006f4f650d8813c079f4c1e17e500887b33223ffb0b051b',
  '0xB943a07e6c30Bd35042d6C1140c1f0c9066B4f7e',
  '0xdc824772fc0592bf6aa09cfa3028a4e82517418184f9b8437f751f27205c806c6e69fdc7ee1d24775aa3cd81ea0a5decf1abe10263e25090a8d870656e83708f1c',
  '0x7962970C36307dA648f56A215ac65cFf3858e130',
  '0x48ff718ae1ce919b9905d587aaf43e42c35fbe4a73f4863bfda8481fa92960dd7f7cebf22e8b3a159117838f85cedc3ca23952d6208bd98bbdba3b8bf8d707631b',
  '0x0D00B939EA1E4E070a1E4f0B36aF5d64A958775B',
  '0x6cf8680be98ce18a3cefb91b58a05fbd2b842bc2ceb330c08ee3664cc1bf4b3f7297b4d406a53836bc73bb8a2142788e78d9b2f9182ba3814409b187c5c1e9901c',
  '0xD266944C111E381d1d2E71f415134D9852efd6d5',
  '0xf8eb8b1ecc22b1ff3533c72f39ec08e9464e21a257079fa06a953d450a24a4c96f733d87b16986fdb688fb5e525ebc0a8037eca900132b267d94da522006a4fa1b',
  '0x2Bc65829e53c38889B16B4b7846d49B573c1916c',
  '0x640428388553bfda1755313cfff0102777d402f884dc99772ad976a7ef84ba9575b4c7b73de0b1ab2c2265e5e00057dcb1fa23af10b5a1a56710380627019a941b',
  '0xD8b43036de030D512829201CFDA57c8386CC8A7B',
  '0xef16c1602c50c537e8de884f62c6f3af57d43ec06011df6033b710ceb0205ff77f40cc2009f0d0758f78a59423408dd0b3794e9bc8230d3667b351864b9f71d71c',
  '0xA877c30e246b54aEA14f862d70d6Bd4066f4AF66',
  '0x99158841aa144d7d258ef8f57b6135b7354397d287047a8dd94a86f9f26a2aa9519b4b9a3a832a648db4b706228bf6a41b0973cfa4da495bbda1ee4364d31c0d1b',
  '0x2a3d58E657B4Dc0f346017b6566c64E465749A24',
  '0x6213c32c1328ba6136850f5c0412de9664fb4d27bea1987451d14e24ddb8bd7c204e475597adf3425041ee6d85d685ddba596637b87e66146ff0983f346907a01c',
  '0xDe8027Ec2F6CbfC5c783186B8daDF231166f53DD',
  '0xa049751102d9359206a9330c2e3d98a64992e51990fc9e7a51b0c8ded24918ef18eef23d47f9222cc0de2c2ccb12eeb2b8e963cd655a5a317a606197a5d529411c',
  '0x78BF28c0784caae4Fd5BDE59679f673689cAC351',
  '0x05644eea1b6c51f7b2625c5bf8c40d62ff2e8d114e376810fc71c0c73e4fe8483addb192c5dfd56958a43d98d8d923d76cdb0e3e59c689fc427ae387e8daf2821c',
  '0xd6d260d29d1784c8Abc9E3A4824897a70390C2BF',
  '0x8dd971cd2fb1804c0d52e3820fe13aab8adee7cf7899eff2e2d9136fbb5fb4be4530d2419e77bd682b1d305a2cf1e7a9c67c0af9cd516f7cd48fc5a23e89e7b41b',
  '0xaF25041a2c0E4597748786bb285D3Bfb17b26457',
  '0x852ecdec9df6492797098d4449ce2e832099f374080580a3204ba34bf1cf95927ecdf6658cbfe2ffcda8004e78318b15dd282ba3071b78b347490c3c48fbcd101c',
  '0x014Ba17bBfEF59f9D7001E40B058C60e6D9340D4',
  '0x4c0f474b80ebe1e59ee2cb5ba254bf9445fa1d08acd2df290e92ce0154a0543405d9f8eb6f26f5702d11920724dde033cc6a328e5a9e082cc5dc04a2a68f99d41c',
  '0xCeBCfDDc9f5881A055b82d9318d7b376dC1E1190',
  '0xb4f81d7234fc8a292a6b5f2758b40cd4493e6de6770acc684869310f17afd51032b15bb878959930db7a53bea9ff2f94372b1a72049967c1195ad3aec86b740c1b',
  '0x142a9c07bc9fA2Cde9751fF5b1E5655742D61A97',
  '0xac4af0e2720601a5a1d621ad399328c4da466ac618b6eb7ba5c7d9a5d2e8a1924345ab9be92aa5673f3c1d747cfc4a38edcc49560532a2a376e1754e1eb165f31c',
  '0x4537e0EDb819E78da86935087F7A0acD8Ba90470',
  '0xe88002ec4ffca56e58b5d5ca7b1678dac2cd807a251aab0f04e5b669874953af3f81413e000d627e8ac0c872c8eee4f6560ec9e85bb0f0c1b84f926c8314733e1b',
  '0x284633C7A14Efa6329b8656B05EC711b5d4aC12c',
  '0x2584eeecb0853ac205435fae7ac44dacb7b63fa92691b23feb49e204e7cd1aec599b64485d9f9bacd032690dd537c08d558529462cb093f47d5cfed6f2232ffe1b',
  '0x89576b9eC814B5C12c16599CaF08F0793C23A5Fb',
  '0x6a01ca84f8d2de6249220d0808f4b3df6f222a1c32fb7459c7554627ad888425200e1104243526c65268a281248c6dbbdf0513b72003861f1da5b458ced0d8671c',
  '0xbfc63b805176BC32f796669A9C5e5DEA4797865a',
  '0xdd8d6a4645b85c08ac3a044600692b9b15a677fa5e293ac58af264c53e97d21174826c3745ffb1883d663e8f0800c13c400426a4914ff6de1b47cf6b7b815ec41b',
  '0x41d1f03e4724db3ced38296200405b69df4fff1b',
  '0x09d50583e08676089fecb2666f767fb17fe2fbb15a493c1a50e8256a7778bd5725e914141a77abee526522d6273351313ea1c732b2b1a8322d8009982de237521b',
  '0x4eb93d6d5a3ff002703a8fd025739288b5aa8500',
  '0x1e866debd194f2ba5425ca51acb64f47e4badaa123fa2dad6e0fdcd39ea8b8215d9c3bf3200edc02b127d42b3eef0630fba58169d1496afdb7bd0799f241662f1b',
  '0x8f2563b2324ad824648d79458c95f445d814f503',
  '0xbb9a9feb7f1af4c3bd27960360ee6c2bb6766281f80d2931ca4afce64291cf7e3a49f29ee51a16ed9f71146bb77f6083aae0a4485a1d1a13dc7b8c2758eaf7861b',
  '0xcafeda8f64c06cc8ca22103200dd7d69bcb56ccd',
  '0xa3a0e1f371820f26d2c34e71c7de9affe2759190bb5e26b7666046e8ff4f3b683f1aaf4e0b44a2e52880b4a142cbfaca7bab4e81c870875f7fdd789ddadc523f1c',
  '0x92df1c5d829949cbb9a136a99d68fa6f9ffb924f',
  '0xad7547d7f241eeff572343a01c917ac433e265fee02483c023665c1c1a8a72357c92b59aabe0c8e0aae288af431ec876068a2d0a5540947ef16b88cc9c5985cb1b',
  '0x139af71eee8f8049a388b50e205b90112680acef',
  '0x4e464fe9ee6b11e245db2702ebad2df9f0c10efc81f8b78c9896f7fe1d69b3d939ef5416485181c89bb22bb221a7fd1263352a3d682c55afe0bb2066832f9bf71b',
  '0x5070901d0bf531ca7627f713d301c00bbb98b424',
  '0x58fb19ddb0fe9b5766a1a7a1cb0b343703ee74b39bcadbce2b34b9732c3ae1a070c34f49087435af11a2c11054bb8c76c98852aa46f7d7952fbffca77cfa375e1c',
  '0x291f3cbc989457892c266cec911d0be3dff24ccf',
  '0x498df8a58c59490ee703abd061feb61d8e7cf268cf91edc8fec16d9293350852781a6e26e7ccb26c34417eecfe9344c28320d3b39724946e2190cfa849dce8451b',
  '0xbb9909ce6bef7e026e087b3bb7f7634842ad8ebc',
  '0xb2d2372eeed9b2284e2522699948c3fc91a84f94b68a94ef6a4a1deb1b4785de70f7663b878d02ace962506cfbf89d8cabef4a05f82d13db525f97badc2d58ee1c',
  '0x5424f263af0436d2342145e1b13443ba84e1cdcd',
  '0x16eae1ec04bfb410305193b5c411185f3e8e35e8ccbf82cb26b98885cfba88b93ead80ff175d17327c9e25b324e0cc100a8cf8427966d9ede09c9fcb23850cf11b',
  '0x4668f8db524799f896663efcafd860123953744e',
  '0xb1d99328344c0e0c3b1e160242aa7ae5bd1b7c559983fa002b6ca5f6212637b06b3519fe045145a6ddd3c70f61ae850a6cb82755eb883204c1e9e249542b03781b',
  '0x531841ddbda6dc08619bc7fb73f2605275be26c8',
  '0x7b43085a95fc51af647820b20b557f8e2f66ed7dcc34e42eb3b346dab2c6145331546988373f9ffec7e0eade249c0baef15394ab7faa1acc2c56ea2d0860eeba1c',
  '0x9520027e25cc18e5f48dcb02c8d80a2940f11c14',
  '0xcaad32f9552d2cae62971f51c6747b7de368881385906dfc682865f26fd23b5a78e48f799c0f5213310aa6a86d0ceb44f19b3f29fb7464ac13e0ab68f16947c81b',
  '0xa3422586d5fea8e1189e06ddfc08ba7af423b9f4',
  '0x68e4359206e6c6effadcd63f58f33126436efc439382fe64e9b64ddb8e7e165f38fc36a4734ea9ca059c8900bffd2b5e00c569fb02ae6b1bc9cdb2bbbd29960c1b',
  '0x3b07a952eb51c16571d60cc50d8f83ed14d5995d',
  '0x861be6d351ffb5fcfb0e3f3311839e74c07f24559b831154b8c320e07fe8d57a0e390accbe1a3f69c5e553c41bd8fe69d68c9232f94dbd632d2fbb79e3ba25ac1c',
  '0x9921f3b354c9a1ebdc0ba466e84ef0afc0d86686',
  '0x5e97eb8fcc2237ba053fd3127de735a7504411350a1e47f8feb7c28987fc45b8022f8b4091056e73df4be9e36bc22821a7bb914260d03e45562c52614547369b1c',
  '0xf922ac64c6554c971e08a31a5f47fcecb0a6b1d3',
  '0x36e3fb85d590dfa4f13271b5d03d1864d3304203527e289faad4ba3ccfcbcad04f1c67c8de57213d570c1bf8af4df5e89ab9f0e6362f658a22faa8a225e9f99d1c',
  '0x89f0b57aa299baf63a6410733b944aa1cc968888',
  '0xe0a155b6fac6d23f9232ed4b9b505bb306d78d923c55afc03c149fdadf6d8cd94e608b686cfc7e454d9198fa75e1f4ccb41feca5666498330f08c20bd8d7e1ce1b',
  '0xbc54f0d6b26d45b44f3de412fedf1aba9e1d19e4',
  '0x7aa099ff3b9e4ea22ecde5027235bf5ce2001f83caacdba730aef1d43a701ece58ff54b6076d39f0955152ae91cdf8aa254d2ea3ebe086bd3217efde79285c451b',
  '0x7abcf29da5e0633ce9acc959405e0238592133da',
  '0x873b9a0441d3a332892dc9c368327afe25de747efe495bc270e087b242af77b565428aeebeeb1fa0bbd34e96d6912a7b69a32dc4e814c0046a0ab04206bdfcd91c',
  '0xafbd81559dabbc22dca2e9988460e4f96333bd65',
  '0x3d0ce048410875b1d431215c8c45715b54c74c8be93464c927a830284ade48e81811c7e6b78b0226ff684efcbb459dc24995d765004e2b07f2f25c20c3f4928b1b',
  '0x61a4940a191db244ab4acb07b1198a48aee43852',
  '0x27c87426f0e47e3fd883a958c57958f9157c5133a4d5ca02bbbd45663ea8ffdf492b311c9bcd16a5ffa71cb1042a85f241d91876e87abef042d65414ed9007691b',
  '0x9fa3c87eb4668984b87e185b24ae08759b0f50bd',
  '0x2410b9834dd41cc8dc3860e573fd0b96f5a3f8017c42a3ce72173bde8c2b0a246ee403b7311db0a2f7624fdde091138f0eb569011f6aaeebe1cf220e223a49411c',
  '0xcafeda8f64c06cc8ca22103200dd7d69bcb56ccd',
  '0xa3a0e1f371820f26d2c34e71c7de9affe2759190bb5e26b7666046e8ff4f3b683f1aaf4e0b44a2e52880b4a142cbfaca7bab4e81c870875f7fdd789ddadc523f1c',
  '0x2097b2eb3c151fb3035f9806024701b6aba0e52a',
  '0x54776783b1d7fdf625e6d6258e1158c0dd7c8dd4d3c367d62cb42656ba4cc97b2c3be626b845315532ab39f51750a58bf95ce48cdeda9aa7282cbcc928275d641b',
  '0xe24a157fc29799a7e3417d27fee4da1f028d132b',
  '0x8a37e5dbf06da125f869f11f567f598c7f249bfd4fc140befd82d61b2c4dc8d5522e59ff5d246744a440d4deeb0e18bdded21568794218b64364e3bf3507da5f1b',
  '0x9300614f448a4fd4512ba5586e41528019bf266d',
  '0xebd26d72040893e1b487645903a42d96533bfce4394a0b42df138c5a98af0d5c2d864b17431f17fd51929af62e925cf4eeab8db58fdb816c3e9d86356f56fd1d1b',
  '0x8b9155af0d7f48a9f9789b9fb94abc2139a9eee5',
  '0xf3e7922861a068c1a62a9ed15da51b8a2d6c0022d0fbd3b382d96431b732ee1f6272cf5727d85ccf9e4f7b8685009431aee89f8eaf587ed40fe94281e5763c501c',
  '0x14ba3e6b5a3abe6a778297434dbe45f0c47e12c7',
  '0xf91bded7647f13ac6ba59e83333f0c3254d667a4153d925000ac69daf0a78d173a2ae648706036bd019510478295dd8bdd114b6bc92f2c01e7d84f0e7fba26541b',
  '0x69704f4b0a3d5183a9dde62c2807bd124159334a',
  '0x2540f88f84fc1a9913304733946a1a091a04cd568a16c1eb38c5f450363e2a736afb997f9ae7c7a5ad6ada889425e237788ace2bca3ec549ee3756cc5fece3ef1c',
  '0x6c42c30c87081a53abbfcd1d6adfc4816a371f30',
  '0x8d9aa342ababc2d4b669eca1bca0fe4991f7caad299c6a3c39c6a724746fb8fb4335a6ad67c921b78b76bad4fce21a881698c8d555f012bd5caec6f5fceb3a611c',
  '0xc457ac7de3170d476e74d9c9a1a116555138420f',
  '0xabfa73f9cace74eff9579a5486fe476be75d19bc4d1840dbc668e9ae8bf1074a1f7ae67c03709cf1f737ad194bcf50c1f7a473beeffebe79269442df711a0e091c',
  '0xd72c4196f98af2dc99d588560d48381f067eb19c',
  '0x8fe75b5f2712f156e2d55787ddefad80963591ca785cbeb9cf3ae834a6d349bd2549887b00149e26714668caca22afcf496d95254ee2f6e5ddc2dfac118e5c071c',
  '0xc4ae404232e28427ca7db22d86dd0cae6d3c6dbb',
  '0xe8aa9d7ccb1a50df5b0a0753f99d8d9bab8abceea8cbfab33d8f1f9bb3b569bc6149f91f94a19e94b0e7c81449733f4aa146fadc8d0542e8ae631e0458b8d0401b',
  '0x58d3d6ec4967958ccd33498370a4c393679354ba',
  '0xfa887f0e2fbd839b2ee21cb395232aa4d4cad64a78f652a8cc1c1faaacfcf28a3e1ae274608713c88c6d73db80f266ea3af42635dc20fd566a11ef08dac062021b',
  '0x20c127e13dee3e5e80d2ac4cfe96905238ea9b8c',
  '0x986496552cadcee75706667a2f7dd9187e49c363621f23fd6736b617caa2e38629f33dca8a33f776fc7668c2ef7d8c33467fac18d2f162d272ec6758848989c91c',
  '0xac35ddfbdaeb568d165c2f78fed58f4bed734eab',
  '0x9ee252eef586f38da37ad78b8e0a88e5b5ce0afe3ac2479865498579348d21bb0d54e340c0aad089e52c94632762c8ff23b7126a453fd7f6bb7ae4433cefe62d1c',
  '0x207a1868c0063039461b953b811ebe84d14da5bf',
  '0xb5208961d78412ae50647b387f953b93719b51525843cb8a66ccdacb50d279953ae4836b92a3d3fa4956b73182eff48d0c68e51a312a9894083bb2c7caade18a1b',
  '0x148ef7b21d7b7dd1ab919d3d5e63a61c133b9f64',
  '0xc3464a40c01d0ddcd6768eec828b3a4a56646d80ac9543b73aca5c4699f9bace794c34bf9878df872690cc03663f81aadc301c854013c3dab120cdf165b36d0f1b',
  '0x566cdc799ef1637a8b31ad3066f901bdc2095205',
  '0x8ededeab6440beac2e3cbdd3342f266730e492320104acd97cfdadaa50cd0c7528390b3a735172f1ce38327cf54f097bfee8820df527a42de0f66603487861241c',
  '0x9cd61186115468da3e9495b2df4c7b2a56f2ed68',
  '0x6c98d4e3ae25580966a620262f5c915c35f88ef1ea5fed71b4f4e075f36f2a9872de01181f712ee78715e037aaee6580d6d03795b6ca64d5f58616fb06348fe71b',
  '0x2a09ccfd1b4c61fe5281e1e497bcae7880a146c7',
  '0x78ae81f009258d1b6a15f0eb3b8bbc038a83c1b1a092f1e096034cc186696f7c0edd01262e484b1d8bde7188bfdf7bff7b221c52a4514dc62f74b309a0e202d91c',
  '0x1bbf55970042fc7d1d66cb5658cabd30aa72e3ec',
  '0x6dd54f234e65f5033db9030f7a1c9a809290ce0cf233406e77602c3d3080542977e866423f0993da64924b42ae787d4c3a1bbf9267bf8743019cb7989a2a1b4e1c',
  '0xb98296c9b2d75c6c358cc9367acb4ff433f0a742',
  '0xe930be7adfe2d688b42e514a61d39af5734bb4150a3109450f7f1cfa0978316e190e2006348a803f96c319982884bc9ace58ae494cddb63dc7a8db6db492536b1b',
  '0xcd11abbc370dbce80b81a250df87b3226f2b1a49',
  '0x6c2e6fd90b4f92fb988def842618644b4a10eeb455e92c96202d6b94966a2b84494df8a56b1b1ab03e22fb97a1aa80065068e164a146e8d6a1421d29ec2d17061b',
  '0x2bc6ec6fe1ea53b319ff293497e2389f259e7e39',
  '0x64d5db6b56209326aa6a58afe06535eed61deb16147c9cadecce2e1f96cf31723697f2b858079ac37060c40b5b9bb7b3a0dbe5be43cff8aee33769c40870a0711b',
  '0x06b5fd9f8cdb62a1303253484c05619f76a012b3',
  '0xc7d7b2416997a5010e0f7d3739bd78597405a45756fd9c6ced999fdf6a9bc1d61458a82fe92fac1071c4e9c66b96324ec53d900d2b1396856db8167a8c4230051c',
  '0xe4B76869e6A75AF15721dA6Debe652666f905b35',
  '0xfee4fff3996c2d8921b8be9cf332f17a5777dbfd58da46d92399bf4d17bb0a812a94f12f450a01d6960b2f9f254bf5fa504b5a7dd75cdd1fdf905598a407593a1b',
  '0xf367236d56338ac780267ac09217b02746607cae',
  '0xd5b6b454d98163eaa3d62fdca5ce7aa4406256ac591f4936251998276f41bacd70afc71b9e810d872387b7d00ab02cf6211698466ccac6b8041d8c394f97bc831b',
  '0xaff55c7a5149477ea02c7dce7f40d9cb4d622777',
  '0xd2d38c9fd564ecebdaa3919f9322b891a8551d035e93d6cba1778a8106ee763417844dd0b02095fd2e4c5846785ef000bfe2598b227923f2a62e0369d820f09b1c',
  '0xddf6de3a7ecf342fa3af23a1a796829a5e3afc93',
  '0x0ed339d870b83e766f9433dfa39977be21ab7c75da2b38a30954b5ffe3a513dc1bcfae024da31be673c4047297ce00831eb52312009c4df81d877991fe3240d11b',
  '0x5FC2E9c6E1F32FcbFDdf5BDCd7cb9AF59bdC9b4B',
  '0x53605643df2d38852edcb3445f0a8bfcaa3190e94bdd51fe32c513408003418d73ec2ecb551fa2c8dd1ecdbec9b81e34a5ecb6e5b2338c61ac9be4b0aad085dd1c',
  '0xec225a1fd31603790f5125ab5621e80d8047e901',
  '0xee4190b1327c333c5433acff2b209f4255cdaf3506c2266b735d83397e14dbce5d39cce2becd7cfd9a105b9b20a3bccc1a271359fca847ac30dc72eeb72713a51b',
  '0x7fc4caa51e07cc7e25e34314e9881e88616e9e37',
  '0xd0c56b9e7e61023c073c0fec44b9eec37d0a2dd4e0ab8df1fbbda50eee105f5f6d39a9a1415775dfd15b29019297147308788b653e37697a22dd88bc9f4801f61c',
  '0x90ff60dc045c861ddd77e1451329100f2c6041d7',
  '0x416f2a7c29776b74f7ea692200fe690cb80c1107529ba1a61b73c6dde276ec33477d2944f51a29003601b0e92c53b5f3bf9830207039cf453d233f50ab3d0baa1c',
  '0x66ca45e79746984385d185dcc000fae482123072',
  '0xc21cabcbb9b7c9049c4c47d45944c9bc5590e4139899ef6f1598fa4e956edd6864988fc318cf94ccb9ca79e39561fb8985a2af77a9e7c5a142dad4d3082140321c',
  '0x9e3d381facb08625952750561d2c350cff48dc62',
  '0x00eadba2d55644f601bbba13dc0dc2554a67b940462023e5ad784d8bef6acca9572b72f931a5bcdce166890fb13f9a191e6ddf1da2d9d577fc1a86714ea837ab1c',
  '0x91752f5d0ec6d3032861941071dbe0bdc3de7361',
  '0xfd3bdeece2a431246452c3bc2560b32c101dcf29248bdf64b3fc86da19ef928906f2728a52c768537ea04591f63c820b74e53be78b1695f4b9931629d09f9b941c',
  '0xd74a91ad3613f1fa188396a38a898df31e6be89a',
  '0x983df37c0bda6eab7057797b5fcdb52f76e211b2fd5c06eaa55b7d2905666edd76246db655b5a95432ce86ffbc75cc72284ae7c2342a3189de7e12839e63b1231c',
  '0xd98d839275cf356ec9e34a146c7edaaa69f29022',
  '0xf67e6a1c54543c21499eba597eaeb36959672f14b4c28398f586159202af094054977afd15499a53550e15c181ff96603edd22409fd0995529a1c41fc75bcb821c',
  '0xd6d260d29d1784c8abc9e3a4824897a70390c2bf',
  '0x8dd971cd2fb1804c0d52e3820fe13aab8adee7cf7899eff2e2d9136fbb5fb4be4530d2419e77bd682b1d305a2cf1e7a9c67c0af9cd516f7cd48fc5a23e89e7b41b',
  '0xbcf02472a295f99e3753fd74fc666ef0ea0a8770',
  '0x6a0b1db344a9f299705718a468537b5e03cbf2c9ab73629baec3315c71fce1aa77081b3f3a8871cd1a24521f52f90b1cbe8a15e429615c2d1111b5629de597d11b',
  '0x4167b32bb11907f400d510bf590aac413c9195a0',
  '0xf52f865a57aa4179d54c7614bec061ea06ae3e0543edbf240d361831c843e41a5a060435fd384d62b2041b7cded521d98aa12b3881d69ce91e5e1514d438f7b51b',
  '0xf162cda1bf55187c14a2b8b3863476da92f79dfb',
  '0x8f36a0a60828c7ea2517394219b7a39b4cac000865dfef7f29b4718638df6a8f72d36c7f94f7708d0b9f1a0c0c3a8d80007cac2148587233fede61a59bfded0b1b',
  '0x232ae9f78b73eb4687a14f0240f76464065bf436',
  '0x05b886e3f8419a2597e6cf28cd16395c7b78de00e61cd6c195a6fb71dc9dd0ea56951912405e6883c523b7ab3ff5adb6ce67aa8f0c39544870c1f5fd23d0f8871b',
  '0x59ac17b102f663321ffd9e9be0e57a4ce3e59dce',
  '0xfb3d0e44343258b52fd328113bf216f5febfc0a5681bcc81bf4714db661c990661b5bec730febbbd40e972b3aff12375cefa8699d6434fbe15d14121eb284b691c',
  '0x6828ddd7aa5a88e154b67040fc682625cee63e42',
  '0xc8d4acb6219839cc82864832c21c2bcbc0862e78b139dcb1f82ff91ea87e01b0328999c90f22467e7438ff29271c3899d785a3431f75e147c56509c47f29d63f1b',
  '0x9574152fa4d6c5dd04bbd3f672c6861a0e975fb3',
  '0x1c7e25346b5d770bc583687c91fca37197e86de3b9066c700e97af98a5716bec7d8bc0d5e5460bce0fbef64311f828ca3a12aeca3bd118a5255e1e8c77f06bb21b',
  '0xfc98b088552c060856cd93d1344822daaf835eb8',
  '0x224f80d0879db19a736b783fe895b348a41d6b9d98cd979fb37ac347e52a2a1a01eded9874926ee51ef9ddf3cafda91a303b9c7c968de587a93ade60ba006e901b',
  '0xdf2b3d6b9654a140fe7fc97265e578dcdf8c1737',
  '0xa9dd9ac9c65ad64fea3b7e306413a0b7bc1afb5c511325cd1b5af3ab32db27aa5921120d44d7838d83630b86ae90a7c6c634865f6663ab9b9ece02eece11908a1c',
  '0x83d47df7006aa94b205de7a3832eafb311674b74',
  '0xf36ad4b4725d347297746ca9fda54c8bd9287c2fee3fb45278bbc23f4c99e1765bb4cb9ccbcd7e4b78f26f906b0118243783f00362ca6e8fa29728d43bfef7f81b',
  '0xe5919152a8880ba3f39a1b8787b82261bbde4471',
  '0x4d5b1214c31b6523f0419018a256cdd6e3cf22bc1caab92bf0f8a4dc8f3fd24c7858c36389479c7d6e0515269104cbbc5065f69c9e6c67ae21fdc87b902582c51b',
  '0x131fe52815bd0dfb503d4c69a47cf19a0f40ea9b',
  '0x8028e6f222a89cade12aff919df0330c2459cd96d3f623182f0f0406cac3579956d8b6095c19deb19ef94c2e87a3bbbe297bfdc86ff9e27272524e4da91552811b',
  '0x47e3d2174c40dba8ae0f7059c8159245f0ab2139',
  '0x5749e33e4c1815aefffa30612a7e4acbb40b812da06c66147b674fd399cbf74100cfb540f29c160a68744205a7c7dd0773d77578b60caa096b4097985e8d064d1c',
  '0xae697710e46671de4d4ce2f8b596082a8e5d0217',
  '0xb578156b7d4f6ee14ba0099ae31cb1be1355ad89d7570b1ca00b66a71824ef68157e25b71cb0edebec0d6d1f98988b82491d99151fb959a6010df6ffc988ce131c',
  '0xb45e03e2b06ca01e9f8c19479df0ce3874218e91',
  '0xc9c5c40ec9139c02eef51d3def79a8c881212460951f4c41947e17e3aae9aa171e4b34dc683fcfb32136be817fd04b64901f6221cd9d99dfb6bf197e688f22eb1c',
  '0x28566c6758e4724dd05980b414fb3c24182618d7',
  '0x02e78629836bbee6e68c8571f62c6b25d1cb2692de0405b8946f16d8a089cacb0fd22c81c67d4dc53a3744f271027746ec086ddb68b49e0826da30ee54fe41061b',
  '0x331a72725f9038bfb8a96f5b10abc2da04095893',
  '0x27f520aada907edd429324762d015591e206f2ac9e5c6c69a01d86f85bb87c1721491ba29972e3e6b5355d06005cfb28b03f372a9c602e357c8bac5c3ba184341c',
  '0xdd9d8407f632287566f6a1b41a7bd2d94cfd4afc',
  '0x6ac2ea5e9d6e1bb51b9d87d7d0c17502d50eae67c3dd19568050bd4d1060725939cd136d26fdea573681acdce55c9953ef0c8088a51d10c00c35cf336e283d2b1b',
  '0x2e5d9552eb7e449465528e02774fbc1785677f88',
  '0x03c90cd7eb72d0fabd22320119868279adcaa9c3ea15b89cbcf041a1356941795ca40a6b10e30a1a3285e353181c32f025258602a2b2d613fd7ea3c82b70b5181b',
  '0xb13dd6baa767e193f56af63956c258338f42d6b3',
  '0x6bd3388e728875674ff67846ce00950d7fceef643c5abbfb6f670fe28f917c61395b3bd3fc9c5b97926b6e12b6b9c92b862c891d842896650260b7d3bd76f44c1b',
  '0xc1876bb98df09206a7929350e40eb0b970b2c05a',
  '0xf644db34e33baa2b102d3f4db377d7149136d76a01366c73d567acdee70f33143a65acae8da80d5684cbcfbf8bfec82358d0cbbc6a28515ec636629254dceb091b',
  '0xb915d1e50b237a1c3a12a1487f3510cddb466dd6',
  '0xe6f63512fd37403e05f491e58f408a88097b419ed107dc0f13fc0032151ebfc26f50b04cb1f306b6c76e7f8124e8cfa26124d6f25067978c767e9b4d75243c6b1b',
  '0x17921b58902a5eb485eeba82fb93ae9a5b38f0fa',
  '0x7d6b8e0a0dcd57489ce3243940d07eec279684c5b9fae01785a12eeb4597e70e500116e2a373adf4d1125edf2021985871b0e1d35d5cc63651ae32436512925e1b',
  '0x7239804f2d9eea18840dfbff78b348de96c0d0b4',
  '0xd3a29238412eed7a8b135650a875095b6f638963301ba0220a722f3db07f422e72d66d13d9caddd04a0f3ad67921b5f368367625e93e5b951bcbd7281e2098751b',
  '0xd112071a5837ac1f69e40fac7a25caaa9baafbcd',
  '0x8353c0161ae2083729bc8d62398870a034d5649c81a40605214639cb19ca565f311eff70aeeffa32c95f434587673cf8a775bec24d7ea2c7e3a3bc5348b2cdf61c',
  '0x46edcfa49bbf3e3173c02a077937c9df4d48172e',
  '0x96e7b95f4163db9b58948cf637ebc6df518c878b23590ba38832d75a58070ea629fc5b32575fefe7402f1590addcddd97655decb8d05bfc69580ff4c7503c9951c',
  '0x312005302c73cfa23d5d8569799ae21402fb7cbb',
  '0xce1b93f61c51140e70cb7bee641040882d4b52439596b157c6b22282a0a73ea656ae85a013456de305d804bb32936eca40c7ba321b997a038c7a90d39e5858801b',
  '0x254f006129ad8f9f17e8d4b10c46fcba72096b24',
  '0x7a6090ffc0568e5720a1c884695fc3feb4f26b267a166ce9505408e2ccb30df376af77f48fbf344fa833ef3c86bf55a0217e8fdb42cbd1ea5ac7097912989fc21c',
  '0x09be63125f8f671d79e3db8e8bbea7430a9debd9',
  '0x67c67d9241042b00180377ccee17666887863e3c1d8901c04b31fb296d4c6fd000f5493438156e13689a6c6fad087e21723cd08b9d7f1e34b687ce31e33139cb1b',
  '0x0ad1736cc024da05d91791cc7ab0def95b7f4eac',
  '0x2d18a79b81b6b7ef7368b4e57e09f449352a1a93798c62a41a98d7eafea85c4616dc33fa837d1716d832b528d1d06265edd21ebd3cbd16e3fc7cd5c883a925e21b',
  '0x3067421ccd1a67d875ad29055185742201363949',
  '0xddd6c375842ded9a76e0425bb6644245991f9b7babd721d6c1ebe1b80fc733d5585a48b08d2918f2575da803104b0e7a460c026ff01bf7dff9cff530446d7e9e1c',
  '0x11f1f206a69692955237c7ff492f851c40655c03',
  '0x47ca4b4dd3a2035acf499220eacd0e6ba54b24dbfb07eadb2b91610c8ef35fde748dbd84e7c9f91a6dc2ca5ffa2c1777a572400f78bb7d7a52ed95c87d505ef71c',
  '0xa7835dca5ed50692922a895309f2cee09e9facaa',
  '0xb9fd6aef79e39c7983c2620c3f587310750bc6887b5b0363729c23ee66b417a8159c8b1c258113a19559abcd9d8fc038e9cda2c8c2e057806f4f9ac16cd6a5d01c',
  '0xf14049e3a833ca7bf7a451335b2ee512c604baae',
  '0x0df40d5baf6dd11eed5deb755632976a19b69480378a3beee7beee7c4e29e1d821d4ea09c12469eaa44f2c7941c8839575e041de9deba458ee09068043cc4ebe1b',
  '0x0804718357d372a96aacae8ebc8d0f615c370a1f',
  '0x6c78958299d7e1c96bd1bb49e389cd69673abcde5d011322b75835ccb372ad73553eef776e1ce83cb30393cd2b298888776e54f36aba03809a0e4dd49dc63fa61b',
  '0x8988e4f12247bac780158ce5bbc055603101d79c',
  '0xd521a21e83338056d6a0688ce6af84a782587da2e59fc760f145271113794667206e34aa179c92e4cc629089ebd6bec39af3a7e0a30c439193f75eb550f0c6ff1c',
  '0xc2eacfbb2fe0064523758687fe3dde3baa76de4c',
  '0xa653acf013b95679a87519cca30b454a20bcb4d58b93ef2635102c047619231e14cf09de8ae4bde9cf39f1203cc5e9d833996825e966599de3f9ed8489ff0f1e1b',
  '0x8148007281a59b009d91c71abf5bf8b99f0b3126',
  '0xfd24539b3d8e205a4226ce121a936d3d071464e3a84c6c8c01e18a6d966e9d3d7d5140c1918d98bc26787ba17bc8f549c2898a383745fcff20f392d84c1535cd1b',
  '0xb9ad158e0392b4809de8edcd9676df4d88fadf2e',
  '0xa2c3ee516fe5634c720e664dd86c7dd70e38d0d294a2df0afd401274837f0fc830dc2af7afb5b70063b1923b5025fa72da95af9c2cf76deaeca8f732ea8e29a21c',
  '0x98cef38de2e17be744b69da3d730e94166308dfd',
  '0x3e8567ceb4e674de1323bbe79a03e3594708e685e905db1a39a94d0cf14ae1c41d1a8d98d55adb0df000048a70434ba738758af5ae41cf4c528690ccddff52141b',
  '0x9ef6da5d76b03d0199feceb8fa6edfc3c71930ff',
  '0xfebd523fab0a2a6a8fff10d5be0582d29fdfa4c1218be8c2a4fdbcf1b23e103d2f328c532582f90d116239ed8d33e0f0742552e9cfb5831f5a01774e315378311c',
  '0xa47b57d928738ba937760838525b58b41c11d5ea',
  '0xfee5de44a8d55401ee1f2acfb60a73c8ccfada0f2695137ac0040b49fe48cbff25237218e853e7b663597f86b090ab9a582e05e470b6a981cf9882201fe755511c',
  '0x47930bdde395566658b31f7462645fab4b47c902',
  '0x03d1832957ae6cd53ef5260dfb672a5a9332778902390373edd470248adc709e741053d0769b02a784aa5a90ebcf6286d0b4b6b65a1c1f1e436a9aec9d40cd311b',
  '0x72c71cd40b664ab00f771d9d8b74bce764ca24c5',
  '0x0533134c6bd26183eeb60cdf0cc4210c276c3140883215bedf3e66933c97497e26173da767b5440596d09d0a655a5dfda8e7d49ea21b04e74ec57281761d05a01b',
  '0x18c6a47aca1c6a237e53ed2fc3a8fb392c97169b',
  '0x6415da547eb64dc7ec1c36abb6abc19c19b29b45818597a61fffaee88f61652f59a4bf64f7bd3638e11582ca1ef035cc7af75d69eef54de06cc8a2d290d33b111c',
  '0x0c9b85c9997a8466f996168f6374c1af1d76f1a3',
  '0xf9c2fc7f5233bb7d9df5c8d19b723dd7c45c7303a69590bf38daa9b4b556c23415abee86b900f58fad83600dd048b709a0f8cfced732c9bb4addb5bcb63836541b',
  '0x2be97c5474b250d986d8243b7f77f52183d12bd8',
  '0xacf41cc1e1a20211ee10cbba345481c3fffbe33cd17782dc84cc434d72cb3f5854abc23d27e3ef54e8bf742540961b1dfe9c0e7f57545cf815e732a6d62cd6c51c',
  '0x10bbad85b0d79f279edbb10b3db5444c2e222c80',
  '0x77abad73862ca8214a22193f59f4baed54f711b8005b1fce25b514a658c9f63053847ef471e2af5aebaa82c3267930cd9503df497926882b08267b2f5ec1f69a1c',
  '0x095d02a9c07bcf24834ea3cbdaecc4b0359a4d14',
  '0x0476fd00e2188faefc3ff1444ef34acf821e872830e559c75e0dd2fb09b755ce596d854e80c47e5b00ddf761b41725907d96c2e1ed4dc881345254bbc041a1f91c',
  '0xd57ccca520179ff46422df1a9408d15f94e24520',
  '0x1b9c3eebad8f4024d08c0e53e1e0b36fcfa075c854679b1e2216518c99b6924a116054c6a13f439dfd482da2fb90aab414f9f49cb1ffd86537807942d0e2ee4b1c',
  '0x95d5aa80db67e765962c677c9d6cc6feb33fa56b',
  '0xfc5c70d75f951e6d406ef45281b1b0ddd6605567c6400e5b14b3a3dd7b6e78b363d0d56d430873f192fabb0b5352efb19b30815d6eef6f34c41a4a562c1453181b',
  '0x8d7b0ce5917ba82a52ec700fcee70b6fdfccc03b',
  '0x5b80f1080fa85eeb53ebb85bba6c2b5685fe9aab367bf83eb238c15656b9f7596933c50e48e5339e6362c6d25bbb0e0b6a05af3b5d64beddd7859bacd2f2f8e71b',
  '0x17a454dd12385b7fb11ff013519592794b0ac6db',
  '0xf72f0ca9026b148da4b250122f2a84a1750fe285f57ee39120ba82e5a646bb0d1b6839c4608356fed875c59158015a5d918778093e352b87b212f592aa3223321b',
  '0x79864b719729599a4695f62ad22ad488ab290e58',
  '0xc137a4a1a3c7485a9fb343dd91a4b584175864e3379c3a98e989b55370098d3229d8ce286d40f531802a44413f80c1f720edc5b2055ba2a8d813099d85af8e3d1b',
  '0x87af25da616dbb0987644afd2bd7f3c6b4fe644b',
  '0x338da051f6f21d368b1ccba193bed896dd088f8d52f71bb2455514e34d9703d14b1779a0af24fd3e45be6833bdd1292ae91bfefc3b61c4a705640676f7f291c21c',
  '0x2dd4f2b0062bfd2372f617af1efcdebb07e7a7b0',
  '0x7e28d14483806546907b65f6f4771f27f075996509c261ba7789b3a9c9bf8f0d1acbeb8a8ff9bf3b0bb0d33c5ec5e3aee239771409db39301f2b69d379bf23f81b',
  '0xcbe1b7c5bacc4981bd53cf7b8e5faf9efba06b2b',
  '0x89851ac7424235178be81d069e76e5c65692149dbd9ac5e87f3649202523e55a36832dc1133d45f63dcd991f520bf3bc379fe9fbf04581f1e0311ec47a2bf5871c',
  '0xc0ad9eb831ad7f835d9477d939cf85b8813634c5',
  '0x011f362602254c798bb9412bc660701a6cc6daa768a42399059f680f13c1329a6295fb59d3229785d755cb2deeaf6e540637375cd6beea5a8ff9bbc4e71657891c',
  '0xd88b2b20bd378a9e9d209bcce52bc614f3824858',
  '0x13e5672ba64e55cf58b6d2bd420e5363d756927fe7a781ade312bfad601e1529683af4b12bc5e7bc5252a9f414b3bca8bd9a20952f14fb9423d4932912f90a411c',
  '0x017ef327bea9aed5580a82eb6e84eafe17a581c1',
  '0x4058eaa387bdd8e98d4ff03c584bfa9568ebcbaf86e1bd384261deba651d9c70015f4781b7aa9ff3015984863ecf67d05c36c91cc578129fef1964bcb9f185481b',
  '0x571bc9181fbdc3b4d298ce025b7ce69dd5a0d4d9',
  '0xbbb11409ae598d3ea6d66b3cff969af86e03e6abdad3f7d9a88f5e8d8922cd8934a85032c6c79ca2a2054fb000996bea914df3fd66467598e8feb8682c1c33761c',
  '0x75b9b86dae8faec51d41092feda0cfb58a49fab4',
  '0xcbe686c5ec904bbcf560f231e3d9b29c0940649a2477410cecbcad9b09a4501778a4a8941785f0b81496dbcbe768dfdc97a76ce56e3908db7a59620c190be9f01c',
  '0x24819ce13ce8ebd4a9cbedc9763df4cb73c112db',
  '0x787d6e8a38d4141a171d78939ef075074fc8ec680d48ba1a0016697f80fac37e7b7bfd769db0f454929ab236217166d0bb27e3b460796eca94357646bb3542721c',
  '0x014ba17bbfef59f9d7001e40b058c60e6d9340d4',
  '0x4c0f474b80ebe1e59ee2cb5ba254bf9445fa1d08acd2df290e92ce0154a0543405d9f8eb6f26f5702d11920724dde033cc6a328e5a9e082cc5dc04a2a68f99d41c',
  '0x0d00b939ea1e4e070a1e4f0b36af5d64a958775b',
  '0x6cf8680be98ce18a3cefb91b58a05fbd2b842bc2ceb330c08ee3664cc1bf4b3f7297b4d406a53836bc73bb8a2142788e78d9b2f9182ba3814409b187c5c1e9901c',
  '0x490132355cb7a7273238e6fe87a0cc31751e816e',
  '0x963faba3d1a3f8338bc9275b1ecea41ac7a97d550028c2de3b3b10ba3409fc7c5ba5453148cec9ee9c8749d174c6412f36ecda415af16cf07194b8dce5abf4be1b',
  '0xeb70b22f024acf5c3ff7834512ce4ad4ddd8c005',
  '0x9d38d023fcf3666e24f4ecdd3c20a8ea83fe81bef8ecbf9e5f5d959a90b94bfc046cee88af1b72a4cfdd3c18cd10521e046224e4d064bf0eb19be71eeaf70dd81b',
  '0x8c059e23890ad6e2a423fb5235956e17c7c92d7f',
  '0xfd635573b6138994438cf8637a1017d7feebf0a3e67d6ca0569ae9841a44be2e177dabbb2336bc6abd9196efaf1e7cc3b608fa7c6895a774acfafe8659afbc0a1b',
  '0xab4652e4e2ff9dc4fea51d65375198c360133530',
  '0xa06b37bc69055f3508d0a9d957ca56cb7e95d6cda5f873fcb05ab20b8b16acdc0d8af0de8d9c48addf6edae2f10651121b6018980992664906d51822798a95ad1c',
  '0x613731c4eb5a0f3a1d5a98e6e88603b65355cffb',
  '0x8f919af8b6fbfa5f5edefc147b698f5886fe4de72daad227b1721e80965309df6dacf37d75f4d94ecc405ec2425ab116f9bdee0f20d8cdab8c786b48bd749b321b',
  '0x4af7aea6c737e870d5bd0e2365f780e1ebc5f6ea',
  '0x0490eb36d9a81853564460c4fc2e4d8ee6510ab980778a6010c5642e90ea731a26962709b82d637d210a3a88423c5038758a9511231fdab973d3e49abc34b2711b',
  '0xea888017a2252708f0187d338237c98bb000694a',
  '0x14436fca1fa8e58c9b5b1560921abd36e0d59d37fac49b171dd574b9f7f8189b0ca24fed1471056ef55b1dd1fe9a29929b26c439b0a242845f77848a908d84b71c',
  '0x302ee0f36c50fb915429e0a915ac83aeb23e398d',
  '0x3369beebea5638b42e9d421add3e4b9842c819d059a3d80260df7655d1c152725d18344ada10c3debf50e5cb8f721a57f41cd14cc7427ba2f7fc943b02aa92ff1b',
  '0xe1d8ac6508d1ef3e4644a52d6aa8f1eae8ef80ab',
  '0x23acd31e069fce455d372e3be867185e817e442aa5000ab0b67791f5ebaa4d6b1aa08e6b71a24e35d196f5efdfaccc441f9344c55374b30d2fd7d4f29cb8035e1c',
  '0xfbf160c95cabb99e291640d48e6fcac787bca830',
  '0xc25cc8c9ea9c2ecc0ae2664a574a46b7a8088315cece1405ab08c8abe62001ee54f5f73ea5a2ecfc34617d81af021d4775bd3ca4258d2b4d68bfbb77c9a961b21b',
  '0xd0107e57074536596c6c25485253f8ad9de3afa8',
  '0xb849d5203fca1bbcaf0f20fbfef3154bb0f989d2e010445c2f30666adfdc26b4023f3257a110afb4457443164ef8998a9d639468388afc03179354ca25455abe1b',
  '0xbfd1fec1d68fe87fce1dd9b290a3a3a61b839e89',
  '0x7929cc52819425e30b2d8d3376df288de141e3097fb1aa3aba66b3eb8355d768453275530fec127fd10d99df0e993f840a8f91f765bea98d3cd651531eb118b41c',
  '0xab7f01ad6cb0d5086f8bcf083523a1db0d93c244',
  '0xb5eddd016800bbf06b2a67f7b41f000f2a0710c62dd7db58d2b353c41a3e6443251e9511a8a68a9223d4c2d48f4444d213560e587674e5481b2812e3d87bdf451b',
  '0xe6a212ffbcc9813c832ac8ef832a4cf40ec8125f',
  '0xed433c78c9a53b8216d2e96ff05ce5ebcd23813e1031fac4efd41f195b37117a449ca4920a3f2f7da2af893ef71529f220c2be896a9e74c341eecfcff7030b471b',
  '0xf1c531cf1e014a30ca0ccc9944ef0a37833c2ab3',
  '0xf092ecd90e20ef5e8df62dfd83dd11a14918fd7dd8c5466eba8e25d89a17b6705cd4a7bc18b46fbf29708bb37c60abf9dca48e440110de603444ec931da7db891c',
  '0xaf25041a2c0e4597748786bb285d3bfb17b26457',
  '0x852ecdec9df6492797098d4449ce2e832099f374080580a3204ba34bf1cf95927ecdf6658cbfe2ffcda8004e78318b15dd282ba3071b78b347490c3c48fbcd101c',
  '0x7114d5918f545fe838ec5ae00b76a73dc434cd22',
  '0x5faaeed361e99af022d543955301a0239eda7c88c7eaca5de9ef1e01b3b72bc10a93b1c2ad67beaecf45ff61329190d81a63de0b49eaebca44bc733434b409db1b',
  '0x2E43ED0d34A1D3FFb0FDDbC832b0a731d6Ad3d3e',
  '0x3743e4dc131f3797efe4fad3b46e9e37f142f0c4a32d4af3e23418013e82e2cb45091e2c6bcf0de77f427728e38d8f3bd6517d36fa341da4a6f1ccb1e7dbc7d61c',
  '0xc27487467c0F84BDD33C09D0A70b86F83552bE8E',
  '0x19cac78db8945f8e48714d705be503d49a6f142e2717c6d88fbccf297cc7806500ce10f6b8e1ddbf2bce28c0b3dfacc96e5923c114435085dbbc7c1875eedc421c',
  '0x875915BdD62885604AacDa3B166d756a379D646D',
  '0xcbe733720d3c2ae10f619c38f879722e6bc69e43b7459f6499e8f319fa9bc6b40e4a130f716736dafc4ff1a79f3f267411f8d17d9da2c940b7306380460138071b',
  '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
  '0x16d50bbca62472e4fb1dc056e41fdab3b471016bd4ca571b90668853f03ff6f704129bd7a53f3e6208fb8cca2e4ffeef8e0cf573b677e5d1c0132f0b268a629f1c',
  '0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2',
  '0xcef4ced6786977cffad0f225a3d7c2ffa37691b72ff56fba3a5d26291176e49a67cc6b12f2f0d636171b42f55b53ac4a179ea94a10969a5712afee9500c5cd3b1b',
  '0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db',
  '0x402c5ee51ceae93064efe1a95c7fd8f2c6b111a4dbd49096a3180a5ca18a1f223dbca7170b49195792b9ae9773748dd62999cf64faf763c93c2e67f847b403bc1b',
  '0x442A09BCD6D2a367b7aa74a54790a249c549e136',
  '0x3dbfcab3d0fc756477b0217d756ce3e684f428f781a2e9fb351babf72ce0798203a35a07e9a98afbdd6c400b1167983b5cbfe54ae007da8086dc47a43237bba01b'
];
