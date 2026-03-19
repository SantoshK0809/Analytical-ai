require("dotenv").config();
const app = require('./src/app.js');
const connectToDB = require("./src/config/database.js");
const port = 3000;

connectToDB();

app.listen(port , () => {
    console.log(`Listening to port ${port}`);
})
