const admin = require('firebase-admin');
const { config } = require('../config/config')


admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: config.dbUrl
});

const db = admin.database()


module.exports = db