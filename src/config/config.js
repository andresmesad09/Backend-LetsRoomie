require('dotenv').config()

const config = {
  port: process.env.PORT || 4000,
  host: process.env.HOST || 'http://localhost',
  firebaseJson: process.env.FIREBASEJSON ,
  urlFirebase: process.env.FIREBASEURL
}
 
module.exports = { config }
