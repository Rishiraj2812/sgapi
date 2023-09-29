const mongoose = require("mongoose");

const url =
  "mongodb+srv://rishiraj2812:rishiraj2812@cluster0.nqskxmo.mongodb.net/?retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
