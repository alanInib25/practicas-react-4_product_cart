const mongoose = require("mongoose");
const { DBCONNECT } = require("./libs/handleConfig");

const dataBaseConnection = async () => {
  try{
    await mongoose.connect(DBCONNECT);
    console.log(`connect to ${DBCONNECT}`)
  } catch (error){
    console.log(error);
  }
}

module.exports = dataBaseConnection;