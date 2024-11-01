var userdb = require('../model/model')

//create and save new user

exports.create = (req, res) => {
    if (!req.body) {
        res.status(404).send({ message: 'Content can not  be empty' })
    }

    const user = new userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })
    user.save(user).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message })
    })
}

exports.find = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}

