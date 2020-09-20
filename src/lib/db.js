const admin = require('firebase-admin');
const config = require('../config/config')


const serviceAccount = require('../config/hola.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://folderlet.firebaseio.com'
});

const db = admin.database()


module.exports = db