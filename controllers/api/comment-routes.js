const router = require('express').Router();
const isLoggedIn = require('../../utils/auth')
const { Comment } = require('../../models');

//get all comments
router.get('/', (req, res) => {
    Comment.findAll({

}).then(commentData => res.json(commentData))
.catch(err => res.status(500).json(err))
})

//get comment by id
router.get('/:id', (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id
        }
}).then(commentData => {
    if(!commentData){
        res.status(404).json({message: 'Comment not found.'})
        return
    }
    res.json(commentData)
}).catch(err => res.status(500).json(err))
})

//create new comment
router.post('/', (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        pose_id: req.body.pose_id,
        user_id: req.body.user_id
    })
    .then(commentData => res.json(commentData))
    .catch(err => res.status(500).json(err))
});


//update comment
router.put('/:id', (req, res) => {
    Comment.update({comment_text: req.body.comment_text}, {
        where: {
            id: req.params.id
        }
    }).then(commentData => {
    if(!commentData){
        res.status(404).json({message: 'Comment not found.'})
        return
    }
    res.json(commentData)
    }).catch(err => res.status(500).json(err))
})

//delete comment
router.delete('/:id', (req,res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
}).then(commentData => {
    if(!commentData){
        res.status(404).json({message: 'Comment not found.'})
        return
    }
    res.json(commentData)
}).catch(err => res.status(500).json(err))
});

module.exports = router;