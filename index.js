import dotenv from "dotenv"
import express from "express";
import connectDB from "./config/db.js";
import dataRouter from "./routes/router.js"
import scheduleCryotoDataFetch from "./config/cronScheduler.js";

dotenv.config({
    path: '../.env'
})

const app = express();

app.use(express.json({
    limit: "16kb"
}))
app.use(express.urlencoded({
    extended:true,
    limit: "16kb"
}))
app.use(express.static("public"))

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
    })
    scheduleCryotoDataFetch();
})
.catch((err) => {
    console.log("MONGODB connection failed :: ", err);
})

app.use("/api", dataRouter);

export { app }