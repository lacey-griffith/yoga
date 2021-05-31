

const isLoggedIn = (req, res, next) => {
    // console.log(req.session.user_id, 'auth')
   if(req.session.user_id === undefined || !req.sesssion.user_id) {
    res.redirect('/')
} else {
    next()
}
}


module.exports = isLoggedIn