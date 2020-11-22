const { MongoClient } = require("mongodb");
const URL =
  "mongodb+srv://arif05rachman:20082009@arif05rachman.pfggb.mongodb.net/test?retryWrites=true&w=majority";
const database = "crud";
const client = new MongoClient(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db;

const checkDb = (cb) => {
  client.connect((err) => {
    if (err) {
      console.log("failled connect to database", err);
    } else {
      console.log("successfully connect to database" + database);
      db = client.db(database);
    }
    cb(err);
  });
};

function getData() {
  return db;
}

module.exports = {
  checkDb,
  getData,
};
