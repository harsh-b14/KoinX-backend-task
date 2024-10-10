import cron from "node-cron";
import fetchCryptoData from "../services/fetchCryptoData.js";
import saveCryptoData from "../services/saveCryptoData.js";

const scheduleCryotoDataFetch = () => {
    cron.schedule("0 */2 * * *", async () => {
        try {
            console.log("Fetching crypto data...");
            const cryptoData = await fetchCryptoData();
            if (cryptoData) {
                await saveCryptoData(cryptoData);
            }   
        } catch (error) {
            console.error("Error in cron job:", error);
        }
    });
}

export default scheduleCryotoDataFetch;