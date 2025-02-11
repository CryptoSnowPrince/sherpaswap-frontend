import getLpAddress from 'utils/getLpAddress'
import { bscTokens } from './tokens'
import { FarmAuctionBidderConfig } from './types'

export const whitelistedBidders: FarmAuctionBidderConfig[] = [
  // Those farms changed their project wallet address.
  {
    account: '0xA6D19C2A2EA13e9eF02d795155F6c335af764955', // Auction #19
    farmName: 'HAPPY-EVT',
    tokenAddress: '0xF5d8A096CcCb31b9D7bcE5afE812BE23e3D4690d',
    quoteToken: bscTokens.wbnb,
    tokenName: 'HappyFans',
    projectSite: 'https://happyfans.club/',
  },
  {
    account: '0x4eeD6e51544Ef967A24A86F318A6779ed85cF0e6', // Auction #23
    farmName: 'HAPPY-EVT',
    tokenAddress: '0xF5d8A096CcCb31b9D7bcE5afE812BE23e3D4690d',
    quoteToken: bscTokens.wbnb,
    tokenName: 'HappyFans',
    projectSite: 'https://happyfans.club/',
  },
  {
    account: '0xB8614FABf4bbA416b9dB620e12272AD63b14387E', // Auction #20
    farmName: '8PAY-BUSD',
    tokenAddress: '0xfeea0bdd3d07eb6fe305938878c0cadbfa169042',
    quoteToken: bscTokens.busd,
    tokenName: '8PAY',
    projectSite: 'https://8pay.network/',
  },
  // Below farms was the latest.
  {
    account: '0x9Ed5a62535A5Dd2dB2d9bB21bAc42035Af47F630',
    farmName: 'NAV-EVT',
    tokenAddress: '0xBFEf6cCFC830D3BaCA4F6766a0d4AaA242Ca9F3D',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Navcoin',
    projectSite: 'https://navcoin.org/en',
  },
  {
    account: '0x33723811B0FCa2a751f3912B80603Fe11499D894',
    farmName: 'WSG-EVT',
    tokenAddress: '0xA58950F05FeA2277d2608748412bf9F802eA4901',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Wall Street Games',
    projectSite: 'https://wsg.gg/',
  },
  {
    account: '0xD1C35C3F5D9d373A3F7c0668Fbe75801886e060f',
    farmName: 'SWIRGE-EVT',
    tokenAddress: '0xe792f64C582698b8572AAF765bDC426AC3aEfb6B',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Swirge Network',
    projectSite: 'https://swirge.com/',
  },
  {
    account: '0x58092273a044D6e1d23B5095AE873F6E24E906ed',
    farmName: 'rUSD-BUSD',
    tokenAddress: '0x07663837218A003e66310a01596af4bf4e44623D',
    quoteToken: bscTokens.busd,
    tokenName: 'RAMP DEFI',
    projectSite: 'https://www.rampdefi.com/',
  },
  {
    account: '0xfAd3B5FeAC1aAF86B3f66D105F2fa9607164D86b',
    farmName: 'FEED-EVT',
    tokenAddress: '0x67d66e8Ec1Fd25d98B3Ccd3B19B7dc4b4b7fC493',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Feeder Finance',
    projectSite: 'https://www.feeder.finance/',
  },
  {
    account: '0xfCcA771Dc22359E4D6e9e9daC743EAb38f51EECe',
    farmName: 'BBT-EVT',
    tokenAddress: '0xD48474E7444727bF500a32D5AbE01943f3A59A64',
    quoteToken: bscTokens.wbnb,
    tokenName: 'BitBook',
    projectSite: 'https://www.bitbook.network/',
  },
  {
    account: '0xAe126B90d2835c5A2D720b0687EC59f59b768183',
    farmName: 'WOW-BUSD',
    tokenAddress: '0x4DA996C5Fe84755C80e108cf96Fe705174c5e36A',
    quoteToken: bscTokens.busd,
    tokenName: 'WOWswap',
    projectSite: 'https://wowswap.io/',
  },
  {
    account: '0x88F0A6cb89909838d69E4E6e76eC21e2a7bdcA66',
    farmName: 'BREW-EVT',
    tokenAddress: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    quoteToken: bscTokens.wbnb,
    tokenName: 'CafeSwap Finance',
    projectSite: 'https://app.cafeswap.finance/',
  },
  {
    account: '0x0Cf86283ad1a1B7D04669696eD13BAE3d5925a0a',
    farmName: 'SAKE-EVT',
    tokenAddress: '0x8BD778B12b15416359A227F0533Ce2D91844e1eD',
    quoteToken: bscTokens.wbnb,
    tokenName: 'SakeSwap',
    projectSite: 'https://bsc.sakeswap.finance/',
  },
  {
    account: '0xCe059E8af96a654d4afe630Fa325FBF70043Ab11',
    farmName: 'XBLZD-EVT',
    tokenAddress: '0x9a946c3Cb16c08334b69aE249690C236Ebd5583E',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Blizzard',
    projectSite: 'https://www.blizzard.money/',
  },
  {
    account: '0x3069270fE50c6dc9c5D1B38Ec7b767B2FE7B981D',
    farmName: 'HERO-EVT',
    tokenAddress: '0xD40bEDb44C081D2935eebA6eF5a3c8A31A1bBE13',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Metahero',
    projectSite: 'https://metahero.io/',
  },
  {
    account: '0x46D8e47b9A6487FDAB0a700b269A452cFeED49Aa',
    farmName: 'MCRN-EVT',
    tokenAddress: '0xacb2d47827C9813AE26De80965845D80935afd0B',
    quoteToken: bscTokens.wbnb,
    tokenName: 'MacaronSwap',
    projectSite: 'https://www.macaronswap.finance/',
  },
  {
    account: '0x1bA962acab22Be9e49C4cEBE7710c9201A72dFcc',
    farmName: 'BABYYAK-EVT',
    tokenAddress: '0xdB8D30b74bf098aF214e862C90E647bbB1fcC58c',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Babycake',
    projectSite: 'https://babycake.app/',
  },
  {
    account: '0xCCcC0b22799E82A79007814Dbc6A194410DCcEA5',
    farmName: 'BMON-EVT',
    tokenAddress: '0x08ba0619b1e7A582E0BCe5BBE9843322C954C340',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Binamon',
    projectSite: 'https://binamon.org/',
  },
  {
    account: '0x71eE6DE14c90700eE06C81aaBdBacD684cfe30fe',
    farmName: 'BMON-BUSD',
    tokenAddress: '0x08ba0619b1e7A582E0BCe5BBE9843322C954C340',
    quoteToken: bscTokens.busd,
    tokenName: 'Binamon',
    projectSite: 'https://binamon.org/',
  },
  {
    account: '0x6cfA3ff4e96abe93a290dc3d7A911A483C194758',
    farmName: 'ANY-EVT',
    tokenAddress: '0xF68C9Df95a18B2A5a5fa1124d79EEEffBaD0B6Fa',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Anyswap',
    projectSite: 'https://anyswap.exchange/',
  },
  {
    account: '0xe596470D291Cb2D32ec111afC314B07006690c72',
    farmName: 'PHX-EVT',
    tokenAddress: '0xac86e5f9bA48d680516df50C72928c2ec50F3025',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Phoenix Finance',
    projectSite: 'https://www.phoenixprotocol.net/',
  },
  {
    account: '0x8f8c77987C0ea9dd2400383b623d9cbcBbAf98CF',
    farmName: 'GMR-EVT',
    tokenAddress: '0x0523215DCafbF4E4aA92117d13C6985a3BeF27D7',
    quoteToken: bscTokens.wbnb,
    tokenName: 'GMR Finance',
    projectSite: 'https://www.gmr.finance/',
  },
  {
    account: '0x786B313b01A25eddbF7f7461b48D60AF680d758C',
    farmName: 'BP-EVT',
    tokenAddress: '0xACB8f52DC63BB752a51186D1c55868ADbFfEe9C1',
    quoteToken: bscTokens.wbnb,
    tokenName: 'BunnyPark',
    projectSite: 'https://www.bunnypark.com/',
  },
  {
    account: '0x70d7eCEE276Ad5fDFc91B3C30d2c1cDb9dD442Fb',
    farmName: 'DPET-EVT',
    tokenAddress: '0xfb62AE373acA027177D1c18Ee0862817f9080d08',
    quoteToken: bscTokens.wbnb,
    tokenName: 'MyDefiPet',
    projectSite: 'https://mydefipet.com/',
  },
  {
    account: '0x8aC06b55C9812e3E574CF5A5F3b49619dF33099C',
    farmName: 'NMX-BUSD',
    tokenAddress: '0xd32d01A43c869EdcD1117C640fBDcfCFD97d9d65',
    quoteToken: bscTokens.busd,
    tokenName: 'Nominex',
    projectSite: 'https://nominex.io/',
  },
  {
    account: '0xd27E57Ff5dD3d78B03c85e2A2bB8dc37E67c5140',
    farmName: 'POOLZ-EVT',
    tokenAddress: '0x77018282fD033DAF370337A5367E62d8811Bc885',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Poolz Finance',
    projectSite: 'https://poolz.finance/',
  },
  {
    account: '0x0767a2f9c644b364Bc88Eea5a535afE506Ba6802',
    farmName: 'ODDZ-EVT',
    tokenAddress: '0xCD40F2670CF58720b694968698A5514e924F742d',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Oddz Finance',
    projectSite: 'https://oddz.fi',
  },
  {
    account: '0x2B6b2701d7F7b65BA2E1ec2d2dAa17d46B85A4fe',
    farmName: 'UBXT-BUSD',
    tokenAddress: '0xBbEB90cFb6FAFa1F69AA130B7341089AbeEF5811',
    quoteToken: bscTokens.busd,
    tokenName: 'UpBots',
    projectSite: 'https://upbots.com/',
  },
  {
    account: '0x875831249bA511a6f1E49c84D66E1A6F5601f7C6',
    farmName: 'DND-BUSD',
    tokenAddress: '0x14c358b573a4cE45364a3DBD84BBb4Dae87af034',
    quoteToken: bscTokens.busd,
    tokenName: 'DungeonSwap',
    projectSite: 'https://dungeonswap.app/',
  },
  {
    account: '0xb7d303BbaE2573513801C5F94aE0B61Fa5b3426F',
    farmName: 'ZOON-EVT',
    tokenAddress: '0x9D173E6c594f479B4d47001F8E6A95A7aDDa42bC',
    quoteToken: bscTokens.wbnb,
    tokenName: 'CryptoZoon',
    projectSite: 'https://cryptozoon.io/',
  },
  {
    account: '0x22d56946c6cc1d4ed09f02858ddb990fcc981c55',
    farmName: 'HGET-BUSD',
    tokenAddress: '0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731',
    quoteToken: bscTokens.busd,
    tokenName: 'Hedget',
    projectSite: 'https://www.hedget.com/',
  },
  {
    account: '0x027D50F36fe3b64630170B3ba82FC64BfC9bc088',
    farmName: 'FAN-EVT',
    tokenAddress: '0xFAc3A1ED2480Da8F5c34576C0Da13F245239717d',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Fanadise',
    projectSite: 'https://fanadise.com/',
  },
  {
    account: '0x73f9eb8eB7109b171396C8cbffcb29839c8b3064',
    farmName: 'PKMON-BUSD',
    tokenAddress: '0x609D183Fb91a0fce59550b62ab7d2c931b0Bb1BE',
    quoteToken: bscTokens.busd,
    tokenName: 'PolkaMonster',
    projectSite: 'https://polkamonster.game/',
  },
  {
    account: '0x88Dba2cF8911A80cc50A1B392b5fF6b47B930330',
    farmName: 'SFUND-EVT',
    tokenAddress: '0x477bC8d23c634C154061869478bce96BE6045D12',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Seedify',
    projectSite: 'https://launchpad.seedify.fund/',
  },
  {
    account: '0xf1dD352EF3a94F60b3047B607C2Bd976401F538c',
    farmName: 'GNT-EVT',
    tokenAddress: '0xF750A26EB0aCf95556e8529E72eD530f3b60f348',
    quoteToken: bscTokens.wbnb,
    tokenName: 'GreenTrust',
    projectSite: 'https://www.greentrusttoken.com/',
  },
  {
    account: '0x3992D7D9Ed721257d8bD7501d280b857eD7F9C24',
    farmName: 'TT-BUSD',
    tokenAddress: '0x990E7154bB999FAa9b2fa5Ed29E822703311eA85',
    quoteToken: bscTokens.busd,
    tokenName: 'ThunderCore',
    projectSite: 'https://www.thundercore.com/',
  },
  {
    account: '0x2Ef317299888DD4a4F57FFf99FF2685D544fEAf1',
    farmName: 'TT-EVT',
    tokenAddress: '0x990E7154bB999FAa9b2fa5Ed29E822703311eA85',
    quoteToken: bscTokens.wbnb,
    tokenName: 'ThunderCore',
    projectSite: 'https://www.thundercore.com/',
  },
  {
    account: '0xB9a32da7F33731FfDa8e7ecCB91325eee8A524AC',
    farmName: 'SMG-EVT',
    tokenAddress: '0x6bfd576220e8444CA4Cc5f89Efbd7f02a4C94C16',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Smaugs NFT',
    projectSite: 'https://smaugs.com',
  },
  {
    account: '0x5ed6B80F0e8b1c7fdB783202d4a926BbED2d49ee',
    farmName: 'TENFI-EVT',
    tokenAddress: '0xd15C444F1199Ae72795eba15E8C1db44E47abF62',
    quoteToken: bscTokens.wbnb,
    tokenName: 'TEN Finance',
    projectSite: 'https://ten.finance/',
  },
  {
    account: '0x75015B56dA228A5367d313866f6520495344C65c',
    farmName: 'BNX-BUSD',
    tokenAddress: '0x8C851d1a123Ff703BD1f9dabe631b69902Df5f97',
    quoteToken: bscTokens.busd,
    tokenName: 'BinaryX',
    projectSite: 'https://www.binaryx.pro/#/',
  },
  {
    account: '0xCbD932aC66f645a3764733aACD30Ce50e522Fac1',
    farmName: 'DVI-EVT',
    tokenAddress: '0x758FB037A375F17c7e195CC634D77dA4F554255B',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Dvision',
    projectSite: 'https://dvision.network/',
  },
  {
    account: '0xeA96c1970b9E3d4258620F68Af95ddDEB5fbD68F',
    farmName: 'SALE-EVT',
    tokenAddress: '0x97bb08ba41f033beaac315169fc566ac9e0daf52',
    quoteToken: bscTokens.wbnb,
    tokenName: 'DxSale Network',
    projectSite: 'https://dxsale.app',
  },
  {
    account: '0xaDB2d11817Cd16595E4454aD03F95575c3B388f2',
    farmName: 'MONI-EVT',
    tokenAddress: '0x9573c88ae3e37508f87649f87c4dd5373c9f31e0',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Monsta Infinite',
    projectSite: 'https://monstainfinite.com/',
  },
  {
    account: '0xDa6e741A7f7d4d88d4210340069348704FDf21bf',
    farmName: 'PROS-EVT',
    tokenAddress: '0xed8c8aa8299c10f067496bb66f8cc7fb338a3405',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Prosper',
    projectSite: 'https://prosper.so/',
  },
  {
    account: '0xB651A851819638Cb120A46Db0E01Fa89006eE290',
    farmName: 'CART-EVT',
    tokenAddress: '0x5c8c8d560048f34e5f7f8ad71f2f81a89dbd273e',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Cryptoart.ai',
    projectSite: 'https://cryptoart.ai/',
  },
  {
    account: '0x73a4C2d21282dd9f9f2DF2aD3e06fd25aB487C9c',
    farmName: 'XWIN-EVT',
    tokenAddress: '0xd88ca08d8eec1E9E09562213Ae83A7853ebB5d28',
    quoteToken: bscTokens.wbnb,
    tokenName: 'xWIN Finance',
    projectSite: 'https://xwin.finance/',
  },
  {
    account: '0x7Db4456a73a9C94a381d244E9dfC76E83C05913E',
    farmName: 'SWAPP-EVT',
    tokenAddress: '0x0efe961c733ff46ce34c56a73eba0c6a0e18e0f5',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Swapp Protocol',
    projectSite: 'https://swapp.ee',
  },
  {
    account: '0xB93A33f4cA46c1E1D65387313706cB8728B75703',
    farmName: 'AIRT-EVT',
    tokenAddress: '0x016cf83732f1468150d87dcc5bdf67730b3934d3',
    quoteToken: bscTokens.wbnb,
    tokenName: 'AirNFTs',
    projectSite: 'https://airnfts.com/',
  },
  {
    account: '0x377056416332d017D2c2d140A097Ba8c2872bb60',
    farmName: 'XMS-EVT',
    tokenAddress: '0x7859b01bbf675d67da8cd128a50d155cd881b576',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Mars Ecosystem',
    projectSite: 'https://marsecosystem.com/',
  },
  {
    account: '0x6ff9B88eb94A976b0e1Db7713d8D765B8bE437a7',
    farmName: 'LIGHT-EVT',
    tokenAddress: '0x037838b556d9c9d654148a284682C55bB5f56eF4',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Lightning',
    projectSite: 'https://lightningprotocol.finance/',
  },
  {
    account: '0x235540Bd639308E51Efa89AbF2A9AF8bC1DEc877',
    farmName: 'GENS-BUSD',
    tokenAddress: '0x2CD14cbA3F26254beeD1d78158cd2B6F91809600',
    quoteToken: bscTokens.busd,
    tokenName: 'Genshiro',
    projectSite: 'https://genshiro.equilibrium.io/en',
  },
  {
    account: '0xc55A7183F6D060271010A4441c106f6a81D46E34',
    farmName: 'WSPP-EVT',
    tokenAddress: '0x46d502fac9aea7c5bc7b13c8ec9d02378c33d36f',
    quoteToken: bscTokens.wbnb,
    tokenName: 'WolfSafePoorPeople',
    projectSite: 'https://wolfsafepoorpeople.com',
  },
  {
    account: '0xC1d204015268CD808B765f024e04CE01d5Bff58D',
    farmName: 'SHEESHA-EVT',
    tokenAddress: '0x232fb065d9d24c34708eedbf03724f2e95abe768',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Sheesha Finance',
    projectSite: 'https://sheeshafinance.io',
  },
  {
    account: '0xb2bef43cb487bFc89770e2e88C23f6a2163133EE',
    farmName: 'BSCS-EVT',
    tokenAddress: '0xbcb24afb019be7e93ea9c43b7e22bb55d5b7f45d',
    quoteToken: bscTokens.wbnb,
    tokenName: 'BSCStation',
    projectSite: 'https://bscstation.finance/',
  },
  {
    account: '0x47e947F01A17F8004D486fC7E37222B205a4c20b',
    farmName: 'ARV-EVT',
    tokenAddress: '0x6679eB24F59dFe111864AEc72B443d1Da666B360',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Ariva',
    projectSite: 'https://ariva.digital/',
  },
  {
    account: '0x8595c4Ad15D51c5Bf920c249869Ec5b3250c2D4d',
    farmName: 'ULTI-EVT',
    tokenAddress: '0x42BFE4A3E023f2C90aEBFfbd9B667599Fa38514F',
    quoteToken: bscTokens.wbnb,
    tokenName: 'ULTI Arena',
    projectSite: 'https://ultiarena.com',
  },
  {
    account: '0x1723D77Afde343323b769271a83d5Aecada25e01',
    farmName: 'ZOO-BUSD',
    tokenAddress: '0x1D229B958D5DDFca92146585a8711aECbE56F095',
    quoteToken: bscTokens.busd,
    tokenName: 'ZOO Crypto World',
    projectSite: 'https://zoogame.finance/',
  },
  {
    account: '0x8b519cD36b6a3179a4C560FcE987203E33df0366',
    farmName: 'HERA-EVT',
    tokenAddress: '0x49c7295ff86eabf5bf58c6ebc858db4805738c01',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Hero Arena',
    projectSite: 'https://heroarena.app/',
  },
  {
    account: '0xaCc34268f5D7Cb9B11BfB1ba4D8bD2bc2B49EE4E',
    farmName: 'DPS-EVT',
    tokenAddress: '0xf275e1AC303a4C9D987a2c48b8E555A77FeC3F1C',
    quoteToken: bscTokens.wbnb,
    tokenName: 'DEEPSPACE',
    projectSite: 'https://deepspace.game',
  },
  {
    account: '0x050F559cD756cA09FC46988B6cf19ebF01256268',
    farmName: 'BCOIN-BUSD',
    tokenAddress: '0x00e1656e45f18ec6747F5a8496Fd39B50b38396D',
    quoteToken: bscTokens.busd,
    tokenName: 'Bomb Crypto',
    projectSite: 'https://bombcrypto.io/',
  },
  {
    account: '0x6524b3B11979D5b5c354D5A804be9711d767f38F',
    farmName: 'XEUS-BUSD',
    tokenAddress: '0x4E141769366634D9c4e498257Fa7EC204d22b634',
    quoteToken: bscTokens.busd,
    tokenName: 'XEUS',
    projectSite: 'https://xeus.finance/',
  },
  {
    account: '0x1Aa800bE7e9829DDF97C54EF750F5E42C2a6a884',
    farmName: 'SHARPEI-EVT',
    tokenAddress: '0xfE3AF7376e412a377358d5894C790bB3e00D0dc1',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Shar Pei',
    projectSite: 'https://sharpeitoken.io/',
  },
  {
    account: '0x2c32E56756964aCdB650521c1F10bdb939D5Ff7B',
    farmName: 'PID-BUSD',
    tokenAddress: '0x1215Ed20aa507578ca352E195016F289e7A17f3A',
    quoteToken: bscTokens.busd,
    tokenName: 'PIDAO',
    projectSite: 'https://www.pidao.finance/',
  },
  {
    account: '0x4AD72A0841808b431525de29a7781d948675bAC7',
    farmName: 'HTD-BUSD',
    tokenAddress: '0x5E2689412Fae5c29BD575fbe1d5C1CD1e0622A8f',
    quoteToken: bscTokens.busd,
    tokenName: 'HeroesTD',
    projectSite: 'https://heroestd.io/',
  },
  {
    account: '0xFfD8457466bAa1f11Bb585c7fD772Ad1A8b82b64',
    farmName: 'GMEE-EVT',
    tokenAddress: '0x84e9a6F9D240FdD33801f7135908BfA16866939A',
    quoteToken: bscTokens.wbnb,
    tokenName: 'GAMEE',
    projectSite: 'https://token.gamee.com/',
  },
  {
    account: '0x820E53c3198dB5904938Bec31B3Ec3864a754c31',
    farmName: 'ANTEX-BUSD',
    tokenAddress: '0xCA1aCAB14e85F30996aC83c64fF93Ded7586977C',
    quoteToken: bscTokens.busd,
    tokenName: 'Antex',
    projectSite: 'https://antex.org/',
  },
  {
    account: '0x5905A1F7BAf19844874B8B16E5FC4cde639b7a32',
    farmName: 'SIP-BUSD',
    tokenAddress: '0x9e5965d28E8D44CAE8F9b809396E0931F9Df71CA',
    quoteToken: bscTokens.busd,
    tokenName: 'Space Sip',
    projectSite: 'https://sip.space/',
  },
  {
    account: '0x20C99830967a18563D2D3eD51094aDD9FBE06e2A',
    farmName: 'SDAO-EVT',
    tokenAddress: '0x90ed8f1dc86388f14b64ba8fb4bbd23099f18240',
    quoteToken: bscTokens.wbnb,
    tokenName: 'SingularityDAO',
    projectSite: 'https://app.singularitydao.ai/',
  },
  {
    account: '0x304dDD664C961141B9C11F0ab597244306e021F4',
    farmName: '8PAY-BUSD',
    tokenAddress: '0xfeea0bdd3d07eb6fe305938878c0cadbfa169042',
    quoteToken: bscTokens.busd,
    tokenName: '8PAY',
    projectSite: 'https://8pay.network/',
  },
  {
    account: '0xb8Ce421729232eCD5DFc7BD0adFe1f4DAd9D9CcE',
    farmName: 'BATH-BUSD',
    tokenAddress: '0x0bc89aa98Ad94E6798Ec822d0814d934cCD0c0cE',
    quoteToken: bscTokens.busd,
    tokenName: 'Battle Hero',
    projectSite: 'https://battlehero.io/',
  },
  {
    account: '0x3591b656D753226dE239d2b9A48221daf0751Fca',
    farmName: 'HE-EVT',
    tokenAddress: '0x20d39a5130f799b95b55a930e5b7ebc589ea9ed8',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Heroes & Empires',
    projectSite: 'https://heroesempires.com/',
  },
  {
    account: '0xCbEd1a5c8847de8B284f7cf5cf752b3b2E3b5112',
    farmName: 'AOG-BUSD',
    tokenAddress: '0x40C8225329Bd3e28A043B029E0D07a5344d2C27C',
    quoteToken: bscTokens.busd,
    tokenName: 'AgeOfGods',
    projectSite: 'https://ageofgods.net/',
  },
  {
    account: '0xCb70F0B3791D05D0D2Aec36805fd2411a89f3aa1',
    farmName: 'PRL-BUSD',
    tokenAddress: '0xd07e82440A395f3F3551b42dA9210CD1Ef4f8B24',
    quoteToken: bscTokens.busd,
    tokenName: 'The Parallel',
    projectSite: 'https://theparallel.io/',
  },
  {
    account: '0xe60035673BAFDaD24C5B14E9556F5793dFFb3362',
    farmName: 'LOA-BUSD',
    tokenAddress: '0x94b69263fca20119ae817b6f783fc0f13b02ad50',
    quoteToken: bscTokens.busd,
    tokenName: 'League of Ancients',
    projectSite: 'https://leagueofancients.com/',
  },
  {
    account: '0x05Adabb0f3bff63F5f7712f05F04F509494A18F3',
    farmName: 'HOTCROSS-EVT',
    tokenAddress: '0x4fa7163e153419e0e1064e418dd7a99314ed27b6',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Hot Cross',
    projectSite: 'https://hotcross.com/',
  },
  {
    account: '0x8e762609CEa5Ddd3234B9d41Cf8D0d8b4f2581a6',
    farmName: 'TEM-BUSD',
    tokenAddress: '0x19e6BfC1A6e4B042Fb20531244D47E252445df01',
    quoteToken: bscTokens.busd,
    tokenName: 'TemplarDAO',
    projectSite: 'https://templar.finance/',
  },
  {
    account: '0xE9ab352015928CBE21771564E97bDAA3F5fbCBAC',
    farmName: 'GRAV-BUSD',
    tokenAddress: '0xa6168c7e5eb7c5c379f3a1d7cf1073e09b2f031e',
    quoteToken: bscTokens.busd,
    tokenName: 'Graviton Zero',
    projectSite: 'https://gravitonzero.com/',
  },
  {
    account: '0x5Be8ed8EbCF5215A45E84B864526EfdF6F584152',
    farmName: 'BABY-EVT',
    tokenAddress: '0x53e562b9b7e5e94b81f10e96ee70ad06df3d2657',
    quoteToken: bscTokens.wbnb,
    tokenName: 'BabySwap',
    projectSite: 'https://home.babyswap.finance/',
  },
  {
    account: '0x73e60b46908319B17f1De07C5d38437BFf684E50',
    farmName: 'GEAR-EVT',
    tokenAddress: '0xb4404DaB7C0eC48b428Cf37DeC7fb628bcC41B36',
    quoteToken: bscTokens.wbnb,
    tokenName: 'MetaGear',
    projectSite: 'https://metagear.game/',
  },
  {
    account: '0xF113b815e24Cc866137c4933b39fe2878ED1F2d2',
    farmName: 'RDR-BUSD',
    tokenAddress: '0x92da433da84d58dfe2aade1943349e491cbd6820',
    quoteToken: bscTokens.busd,
    tokenName: 'Rise of Defenders',
    projectSite: 'https://risedefenders.io/',
  },
  {
    account: '0x38408A0D905930f44fe6C53321684824b22c30c5',
    farmName: 'FIGHT-BUSD',
    tokenAddress: '0x4f39c3319188A723003670c3F9B9e7EF991E52F3',
    quoteToken: bscTokens.busd,
    tokenName: 'Crypto Fight Club',
    projectSite: 'https://www.cryptofightclub.io/',
  },
  {
    account: '0xadF88A1eDC8F15CeA27F2674ED2BA1382F46A8A5',
    farmName: 'DOME-EVT',
    tokenAddress: '0x475bfaa1848591ae0e6ab69600f48d828f61a80e',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Everdome',
    projectSite: 'https://everdome.io/',
  },
  {
    account: '0xdE78F42bff7EDF1e70450e7BCFd8aBCF94e3a65e',
    farmName: 'TINC-EVT',
    tokenAddress: '0x05ad6e30a855be07afa57e08a4f30d00810a402e',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Tiny World',
    projectSite: 'https://tinyworlds.io/',
  },
  {
    account: '0x71F36803139caC2796Db65F373Fb7f3ee0bf3bF9',
    farmName: 'BLP-BUSD',
    tokenAddress: '0xfe1d7f7a8f0bda6e415593a2e4f82c64b446d404',
    quoteToken: bscTokens.busd,
    tokenName: 'Bull Perks',
    projectSite: 'https://bullperks.com/',
  },
  {
    account: '0x5735BB4e439474828235a5F4048eDf0240dcA7F2',
    farmName: 'YEL-EVT',
    tokenAddress: '0xd3b71117e6c1558c1553305b44988cd944e97300',
    quoteToken: bscTokens.wbnb,
    tokenName: 'YEL Token',
    projectSite: 'https://yel.finance/',
  },
  {
    account: '0x638fBD99Fe8CC28535Fa05D3825a028c0a1E430d',
    farmName: 'MNFT-BUSD',
    tokenAddress: '0x36953b5ec00a13edceceb3af258d034913d2a79d',
    quoteToken: bscTokens.busd,
    tokenName: 'ManuFactory',
    projectSite: 'https://manufactory.gg',
  },
  {
    account: '0x00b4565008cD3f71DECf5DCa5e8Ebfc859eED35B',
    farmName: 'DFIAT-BUSD',
    tokenAddress: '0xF64eD9Ad397A1Ae657F31131d4B189220A7f1cc7',
    quoteToken: bscTokens.busd,
    tokenName: 'DeFiato',
    projectSite: 'https://defiato.com/',
  },
  {
    account: '0x7a837dE1Aa84E60273864025eaffecE8D9e51FFe',
    farmName: 'HAPPY-EVT',
    tokenAddress: '0xF5d8A096CcCb31b9D7bcE5afE812BE23e3D4690d',
    quoteToken: bscTokens.wbnb,
    tokenName: 'HappyFans',
    projectSite: 'https://happyfans.club/',
  },
  {
    account: '0x0888406F1091D18e941F3Fe74ee0286963FFAc48',
    farmName: 'WZRD-BUSD',
    tokenAddress: '0xFa40d8FC324bcdD6Bbae0e086De886c571C225d4',
    quoteToken: bscTokens.busd,
    tokenName: 'Wizardia',
    projectSite: 'https://wizardia.io/',
  },
  {
    account: '0x83e0dE1c6dD34e07D5b1BAF36b367e22C8b6fDdF',
    farmName: 'XCN-EVT',
    tokenAddress: '0x7324c7C0d95CEBC73eEa7E85CbAac0dBdf88a05b',
    quoteToken: bscTokens.wbnb,
    tokenName: 'Chain',
    projectSite: 'https://chain.com/',
  },
  {
    account: '0x4D85770FD4d42060d3A8075eF781830954b5C93F',
    farmName: 'eLunr-BUSD',
    tokenAddress: '0x37807D4fbEB84124347B8899Dd99616090D3e304',
    quoteToken: bscTokens.busd,
    tokenName: 'LunarCrush',
    projectSite: 'https://lunarcrush.com/',
  },
  {
    account: '0x4acD36243d2cdE7865CA13E827ede5fBFF1ADe3d',
    farmName: 'ETM-BUSD',
    tokenAddress: '0x75bDEd6BF44bb01527138673dCc064DBe3E7d96d',
    quoteToken: bscTokens.busd,
    tokenName: 'Etermon',
    projectSite: 'https://etermon.io/',
  },
  {
    account: '0x3b8eA037356CfD867c2191FD11614FA97BAB2772',
    farmName: 'NBT-USDT',
    tokenAddress: '0x1D3437E570e93581Bd94b2fd8Fbf202d4a65654A',
    quoteToken: bscTokens.usdt,
    tokenName: 'NanoByte',
    projectSite: 'https://www.nanobyte.finance/',
  },
  {
    account: '0xf2110Fb93F8Ed4528A5849C9fDEDC589349a07dc',
    farmName: 'SB-USDT',
    tokenAddress: '0xB7258450681f4aAd0ab24E336648d44A6696B30f',
    quoteToken: bscTokens.usdt,
    tokenName: 'DragonSB',
    projectSite: 'https://dragonsb.finance/',
  },
  {
    account: '0x3846e7A1A5dEA3F43104ed89ff0E6FfD1Cc74b6E',
    farmName: 'PEAK-EVT',
    tokenAddress: '0x630d98424eFe0Ea27fB1b3Ab7741907DFFEaAd78',
    quoteToken: bscTokens.wbnb,
    tokenName: 'PEAKDEFI',
    projectSite: 'https://peakdefi.com/',
  },
  {
    account: '0x6587515802FF7f9cD7442EAE8dfAE20f9d71306F',
    farmName: 'SHELL-BUSD',
    tokenAddress: '0x208cfEc94d2BA8B8537da7A9BB361c6baAD77272',
    quoteToken: bscTokens.busd,
    tokenName: 'SHELL',
    projectSite: 'https://metaapesgame.com/',
  },
  {
    account: '0x1170852F4C69d458f6ef7375EF7fa7c74AdD3F04',
    farmName: 'MHUNT-EVT',
    tokenAddress: '0x2C717059b366714d267039aF8F59125CAdce6D8c',
    quoteToken: bscTokens.wbnb,
    tokenName: 'MHUNT',
    projectSite: 'https://metashooter.gg/',
  },
  {
    account: '0x6a2d41c87c3F28C2C0b466424DE8e08FC2E23eDc',
    farmName: 'AOG-YAK',
    tokenAddress: '0x40C8225329Bd3e28A043B029E0D07a5344d2C27C',
    quoteToken: bscTokens.cake,
    tokenName: 'AOG',
    projectSite: 'https://ageofgods.net/',
  },
  {
    account: '0xe01935Ef7BEF076eE0257C4D5601940490a8d266',
    farmName: 'XCAD-BUSD',
    tokenAddress: '0x431e0cD023a32532BF3969CddFc002c00E98429d',
    quoteToken: bscTokens.busd,
    tokenName: 'XCAD',
    projectSite: 'https://xcadnetwork.com/',
  },
].map((bidderConfig) => ({
  ...bidderConfig,
  lpAddress: getLpAddress(bidderConfig.tokenAddress, bidderConfig.quoteToken),
}))

const UNKNOWN_BIDDER: FarmAuctionBidderConfig = {
  account: '',
  tokenAddress: '',
  quoteToken: bscTokens.wbnb,
  farmName: 'Unknown',
  tokenName: 'Unknown',
}

export const getBidderInfo = (account: string): FarmAuctionBidderConfig => {
  const matchingBidder = whitelistedBidders.find((bidder) => bidder.account.toLowerCase() === account.toLowerCase())
  if (matchingBidder) {
    return matchingBidder
  }
  return { ...UNKNOWN_BIDDER, account }
}
