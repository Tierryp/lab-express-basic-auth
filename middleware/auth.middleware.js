const isLoggedin = (req,res,next) => {
if (!req.session.user){
  res.redirect("/")
  return
}
next()
}



const isAnon = (req,res,next) => {
if  (req.session.user) {
    res.redirect("/private")
 return
}
    next()
}

module.exports = {
isLoggedin,
isAnon,
}