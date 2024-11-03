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
    if (req.query.id) {
        const id = req.query.id
        userdb.findById(id).then(data => {
            if (!data) return res.status(404).send({ message: 'User not found with id ' + id })
            res.send(data)
        }).catch(err => {
            res.status(500).send({ message: err.message })
        })
    } else {
        userdb.find().then(user => {
            res.send(user)
        }).catch(err => {
            res.status(500).send({ message: err.message })
        })
    }

}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(404).send({ message: 'Content can not  be empty' })
    }

    const id = req.params.id
    userdb.findByIdAndUpdate(id, req.body, { new: true }).then(data => {
        if (!data) {
            return res.status(404).send({ message: 'User not found with id ' + req.params.id })
        }
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message })
    })

}

exports.delete = (req, res) => {
    const id = req.params.id
    userdb.findByIdAndDelete(id).then(data => {
        if (!data) {
            return res.status(404).send({ message: 'User cannot delete with id ' + req.params.id })
        }
        res.send("Deleted")
    }).catch(err => {
        res.status(500).send({ message: err.message })
    })
}

