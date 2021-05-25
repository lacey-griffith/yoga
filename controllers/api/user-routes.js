const router = require('express').Router();
const { User } = require('../../models');


//GET all users
router.get('/', (req, res) => {
    User.findAll({

    }).then(userData => res.json(userData))
    .catch(err => res.status(400).json(err))
});

//GET one user by id
router.get('/:id', (req,res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then(userData => {
        if(!userData){
            res.status(404).json({message: 'User not found'})
            return
        }
        res.json(userData)
    })
    .catch(err => res.status(500).json(err))
});

//UPDATE user information
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    }).then(userData => {
        if(!userData[0]){
            res.status(404).json({message: 'No user found, try again!'})
            return
        }
        res.json(userData)
    })
    .catch(err => res.status(500).json(err))
});

//POST new user
router.post('/', (req,res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(userData => res.json(userData))
    .catch(err => res.status(500).json(err))
});

//login a user
//change route to dashboard?
router.post('/login', (req, res) => {
    User.findOne({
        where: {username: req.body.username}
    }).then(userData => {
        if(!userData){
            res.status(404).json('User not found.')
        }
        const correctPw = userData.pwCheck(req.body.password)
        if(!correctPw){
            res.status(400).json({message: 'Incorrect password!'})
            alert('Incorrect password!')
            return
        }
        res.json({ user: userData, message: 'Login successful!'})
    }).catch(err => res.status(500).json(err))
})

//DELETE user by id
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if(!userData){
            res.status(404).json({message: 'User not found.'})
        }
        res.json(userData)
    })
    .catch(err => res.status(500).json(err))
})
module.exports = router;