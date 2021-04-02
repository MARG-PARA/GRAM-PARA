const User = require('../models/index.js').user


module.exports = {
    getUser:   (req, res) => {
        User.find({}, (err, result) => {
            if (err) {
                console.error(err)
                return
         } 
        res.send(result)
    })
},

 getUserById :  (req,res) => { 
     User.findById(req.params.id,(err,result) => {
        res.send(result)
    })
},


addUser :  (req,res) => {
   const  user = new User({
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       email: req.body.email,
       password: req.body.password,
       city: req.body.city,
       address1: req.body.address1,
       address1: req.body.address1,
       zipCode: req.body.zipCode,
       role: req.body.role,
    })
     user.save(() => {
    res.send(user)
})
},

 editUser :  (req,res) => {
     User.updateOne(  {'_id': req.params.id },  req.body, (err, result) => {
         if (err) {
             res.status(400).send('id dont exist')
             return
         }
         res.status(200).send('message updated')
     })
},


 deleteUserById :   (req,res) => {
     User.deleteOne({ '_id': req.params.id }, (err, result) => {
         if (err) {
             res.status(400).send('id not found')
             return
         }
         res.status(200).send({"message":"User deleted successfully"})
     })
             }
}

