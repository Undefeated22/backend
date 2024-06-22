import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

// Load environment variables
dotenv.config({ path: './env' });


const app = express();


connectDB()
  .then(() => {
    
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.error("MONGO db connection failed !!  : ", error);
  });

/* 
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {console.log("error: ", error)});
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
