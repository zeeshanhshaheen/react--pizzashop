const functions = require("firebase-functions");

exports.sendUserEmail = functions.database
  .ref("/orders/{pushId}")
  .onCreate((order) => {
    console.log("sending user email..");
  });
