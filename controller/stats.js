import { CryptoData } from "../models/cryptoData.js";

async function stats(req, res) {
    const coin = req.query.coin;

  if (!coin || !["bitcoin", "ethereum", "matic-network"].includes(coin)) {
    return res.status(400).json({ error: "Invalid or missing 'coin' query param" });
  }

  try {
    const latestRecord = await CryptoData.findOne({ coin_id: coin })
      .sort({ timestamp: -1 })
      .limit(1);

    if (!latestRecord) {
      return res.status(404).json({ error: `No data found for ${coin}` });
    }

    return res.status(200).json({
        price: latestRecord.price_usd,
	    marketCap: latestRecord.market_cap_usd,
	    "24hChange": latestRecord.change_24h,
    });
  } catch (error) {
    console.error("Error fetching latest data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default stats;