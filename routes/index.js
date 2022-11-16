const router = require("express").Router();


const {
  home,
  signupPostController,
  signupGetController,
  loginGetController, 
  loginPostController,
  profileGetController,
  logoutPostController,
  mainGetController,
  privateGetController,
} = require("../controllers/auth.controllers")

const {isLoggedin, isAnon} = require("../middleware/auth.middleware.js")

/* GET home page */
router.get("/", home)


//SIGNUP
router.get ("/signup",isAnon, signupGetController )

router.post("/signup", isAnon, signupPostController);
//SIGNUP END

//LOGIN 

 router.get("/login",isAnon, loginGetController)

 router.post("/login", isAnon, loginPostController)

//LOGIN END

//PROFILE
router.get("/profile", isLoggedin, profileGetController);
//PROFILE END


//LOGOUT
router.post("/logout", logoutPostController)
//LOGOUT END

//MAIN AND PRIVATE


router.get("/main", isLoggedin, mainGetController)

router.get ("/private", isLoggedin, privateGetController)




module.exports = router;
