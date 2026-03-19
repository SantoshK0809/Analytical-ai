const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB successfully.");
  } catch (err) {
    console.log(`Failed to connect with DB : ${err.message}`);
  }
}

module.exports = connectToDB;
