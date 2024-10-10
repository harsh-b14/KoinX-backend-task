import { CryptoData } from "../models/cryptoData.js";

async function saveCryptoData(cryptoArray) {
  try {
    for (const crypto of cryptoArray) {
      const newCryptoData = new CryptoData(crypto);
      await newCryptoData.save();
    }
    console.log("Crypto data saved successfully!");
  } catch (error) {
    console.error("Error saving data:", error);
  }
}

export default saveCryptoData;