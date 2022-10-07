class HomeController {
  static async home (req, res) {
    res.render('index');
  }
};

module.exports = HomeController;