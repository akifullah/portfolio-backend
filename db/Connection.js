const mongoose = require("mongoose");

const Connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://akifullah0317:Facepak%40123@cluster0.ho3kd2z.mongodb.net/portfolio?retryWrites=true&w=majority")
        console.log("Connection Successful!")
    } catch (error) {
        console.log("Connection Failed")
    }
}

module.exports = Connection;