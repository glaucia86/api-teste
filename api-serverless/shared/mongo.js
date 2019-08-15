const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const mongoUri = {
  url: "mongodb://localhost:27017/teste-api"
};

let client = null;

function connect() {
  mongoose.set("debug", true);
  return new Promise((resolve, reject) => {
    if (client == null) {
      mongoose
        .connect(mongoUri.url, { useNewUrlParser: true })
        .then(_client => {
          client = _client;
          resolve(_client);
        })
        .catch(err => reject(err.status));
    } else {
      resolve(client);
    }
  });
}

module.exports = {
  connect,
  mongoose
};
