var firebase = require("firebase-admin");

var serviceAccount = require("../../secret/hackathon-de00f-firebase-adminsdk-fw1qm-6e6c261352.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

module.exports = firebase;
