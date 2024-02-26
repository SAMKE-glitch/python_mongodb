class AppController{
  static get(req, res) {
    const { user } = req
    if (user)
      return res.send(user.email)
    res.send('welcome')
  }
}


module.exports = AppController;
