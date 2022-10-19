const mongosse = require("mongoose");
//connect to database
const connedb = async () => {
  try {
    await mongosse.connect(
        "mongodb+srv://raed:raed@cluster0.dlv9nnr.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("the world can see us");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connedb;
