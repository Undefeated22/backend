import dotenv from "dotenv";

import connectDB from "./db/index.js";
dotenv.config({
path: './env'})


connectDB()
.then(() => {
app.listen(process.env.PORT || 8000, () => {console.log(`sever is runnig at port : ${process.env.PORT}`);})
throw error})
.catch((error) => {
  console.error("MONGO db connection failed !!  : ", error);
});







/*(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {console.log("error: ", error)})
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();*/
