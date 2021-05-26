const isLoggedIn = (req, res, next) => {
   if(!req.sesssion.user_id) {
    res.redirect('/login')
} else {
    next()
}
}

module.exports = isLoggedIn