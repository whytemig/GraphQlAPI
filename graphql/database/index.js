import mongoose from "mongoose";
const uri =
  "mongodb+srv://miguel:miguel@cluster0.cr9rfdw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

export async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version

    await mongoose.connect(uri, clientOptions);
    const data = await mongoose.connection
      .useDb("sample_mflix")
      .collection("movies")
      .find()
      .limit(10)
      .toArray();
    return { data };

    return { data };
  } catch (err) {
    console.log("Mongoose connection Error!!", err);
    return {};
  }
}
