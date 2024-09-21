require('dotenv').config();  // This should be at the very top of your file

const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;  // Make sure the variable name matches exactly

if (!uri) {
  console.error("MongoDB URI is not set. Check your .env file.");
  process.exit(1);
}

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.error);
