const mongoose = require('mongoose');

const connectDB = async ()=>{
    await mongoose.connect( "mongodb+srv://jaisandeep1559:QP9XXU3eddIXmXdE@namastenode.96dfgzo.mongodb.net/devTinder");
}

module.exports = connectDB;



