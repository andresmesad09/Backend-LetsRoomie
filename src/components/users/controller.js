const db = require('../../lib/db')
const usersController = {}

usersController.getAll = (req,res, next) =>{
    db.ref('users').once('value', (snapshot) =>{
        const data = snapshot.val();
        console.log(data)
    })
    res.send('Hi Castor,you are really  welcome!!! xD',)

} 
usersController.getOne = (req,res, next) =>{
    res.send(`Hi Castor,are you search specific user? is ${req.body}?`)
} 
usersController.post = (req,res, next) =>{
    newUser = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    }
    db.ref('users').push(newUser)
    res.send(`Hi Castor,are you add user? this ${req.body.firstname}?`)
} 
usersController.delete = (req,res, next) =>{
    res.send(`Hi Castor,are you delete user? is ${req.body.firstname}?`)
} 

module.exports =  usersController 
