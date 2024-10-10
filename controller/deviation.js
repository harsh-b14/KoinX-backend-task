import { std } from "mathjs";
import { CryptoData } from "../models/cryptoData.js";

async function deviation(req, res) {
    const coin = req.query.coin;

  if (!coin || !["bitcoin", "ethereum", "matic-network"].includes(coin)) {
    return res.status(400).json({ error: "Invalid or missing 'coin' query param" });
  }

  try {
    const records = await CryptoData.find({ coin_id: coin })
      .sort({ timestamp: -1 }) 
      .limit(100);

    const prices = records.map((record) => record.price_usd);

    if (prices.length === 0) {
      return res.status(404).json({ error: `No records found for ${coin}` });
    }

    const deviation = std(prices).toFixed(2);

    return res.status(201).json({
      deviation: deviation,
    });
  } catch (error) {
    console.error("Error fetching records or calculating deviation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default deviation;