const articleSchema = require("../Models/article");

exports.undefinedError = (req, res) => {
  try {
    res.send("Something Went Wrong");
  } catch (err) {
    console.log(err);
  }
};

exports.addArticle = async (req, res) => {
  try {
    const newArticle = new articleSchema(req.body);
    await newArticle.save();
    res.status(200).send({ msg: "Article has been added Successfuly" });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

exports.getArticles = async (req, res) => {
  try {
    const articles = await articleSchema.find();
    res.status(200).send(articles);
  } catch (err) {
    console.log(err);
    res.status(400).send("there is no articles");
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await articleSchema.findById(id);
    res.status(200).send(article);
  } catch (err) {
    console.log(err);
    res.status(400).send("can't find article ");
  }
};

exports.editArticle = async (req, res) => {
  try {
    const {id} = req.params;
    const oldArticle = await articleSchema.findByIdAndUpdate(id,{$set:{...req.body}})
    res.status(200).send("article is Updated Successfuly !")
  } catch (err) {
    console.log(err);
    res.send("can't edit the article")
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const {id} = req.params;
    await articleSchema.findByIdAndRemove(id)
    res.status(200).send("article has been removed Successfuly !")
  } catch (err) {
    console.log(err);
    res.send("can't delete the article")
  }
};

