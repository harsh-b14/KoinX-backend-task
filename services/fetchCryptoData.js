import axios from 'axios';

async function fetchCryptoData() {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price", {
        params: {
          ids: 'bitcoin,ethereum,matic-network',
          vs_currencies: 'usd',
          include_market_cap: 'true',
          include_24hr_change: 'true'
        }
      }
    );

    const data = response.data;
    console.log(data);
    
    return [
      {
        coin_id: 'bitcoin',
        name: 'Bitcoin',
        price_usd: data.bitcoin.usd,
        market_cap_usd: data.bitcoin.usd_market_cap,
        change_24h: data.bitcoin.usd_24h_change
      },
      {
        coin_id: 'ethereum',
        name: 'Ethereum',
        price_usd: data.ethereum.usd,
        market_cap_usd: data.ethereum.usd_market_cap,
        change_24h: data.ethereum.usd_24h_change
      },
      {
        coin_id: 'matic-network',
        name: 'Matic',
        price_usd: data['matic-network'].usd,
        market_cap_usd: data['matic-network'].usd_market_cap,
        change_24h: data['matic-network'].usd_24h_change
      }
    ];
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export default fetchCryptoData;