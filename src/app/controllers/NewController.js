class NewController {
  index(req, res) {
    res.render("news");
  }

  //detail news
  detail(req, res){
      res.send("Detail news");
  }
}

module.exports = new NewController();
