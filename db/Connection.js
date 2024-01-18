const mongoose = require("mongoose");

const Connection = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/portfolio")
        console.log("Connection Successful!")
    } catch (error) {
        console.log("Connection Failed")
    }
}

module.exports = Connection;