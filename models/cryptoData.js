import { Schema, model } from "mongoose";

const cryptoDataSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price_usd: {
        type: Number,
        required: true,
    },
    market_cap_usd: {
        type: Number,
        required: true,
    },
    change_24h: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

export const CryptoData = model("CryptoData", cryptoDataSchema);
