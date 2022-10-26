//Importes libreries
const express = require("express");
//Importes controllers
const { undefinedError, addArticle ,getArticles,getArticleById,deleteArticle, editArticle } = require("../Controllers/article");
const { createUser, login } = require("../Controllers/user");
//Define Route
const appRoute = express.Router();

//Request Methodes 
appRoute.get("/",undefinedError);
appRoute.post("/newarticle",addArticle);
appRoute.get("/getAll",getArticles);
appRoute.get("/getarticle/:id",getArticleById)
appRoute.put("/editarticle/:id",editArticle)
appRoute.delete("/deletearticle/:id",deleteArticle)

//Add new user
appRoute.post("/createuser",createUser);
//Login 
appRoute.post("/login",login);








module.exports = appRoute