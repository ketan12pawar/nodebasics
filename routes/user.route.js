const express = require('express');
const Router=express.Router();

//require homeApi from home.controller
const homeApi = require("../controllers/home.controller");


const checkFields=require("../middleware/checkFields");
const emailHandler = require("../helper/email-sent");
//require rootApi from root.controller
const rootApi = require("../controllers/root.controller")
Router.get("/",rootApi );
Router.get("/home", homeApi);  
 //require getUsersApi from get-users.controller
 const getUserController = require("../controllers/get-users.controller");
Router.get("/get-users", getUserController.getUsersApi); 

//require register.controller
const {registerApi} = require("../controllers/register.controller")
//register-api
Router.post("/register",registerApi );

//require loginApi from login.controller
const loginApi = require("../controllers/login.controller");
//login-api
Router.post("/login",loginApi);

//require emailApi from email-sent.controller
const emailSendApi = require("../controllers/email-sent.controller")
//email-sent api to the user
Router.post("/api/email-sent",checkFields,emailSendApi);



//require user-update by email.controller
const userUpdateApi = require("../controllers/user-update.controller")
//user-update by email api
Router.post("/api/user-updatebyemail/:email",userUpdateApi);

//require user-delete by email.controller
const userDeleteController = require("../controllers/user-delete.controller");
Router.post("/api/user-deletebyEmail/:email",userDeleteController.userDeletebyEmailApi);
Router.post("/api/alluser-delete",userDeleteController.alluserDeleteApi);

//require getspecific user by email.controller
Router.get("/api/get-specific-user/:email",getUserController.getSpecificUserApi);

//require user-password by email.controller
const userForgotPasswordController = require("../controllers/user-forgot-password.controller");
//forgot-password api
Router.post("/api/forgot-password",userForgotPasswordController.userForgotPasswordApi);

module.exports = Router;
