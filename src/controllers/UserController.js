const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = await User.create(req.body);

    return res.json(user);
  },
  async list(req, res) {
    const users = await User.find({});

    return res.json(users);
  },

  async index(req, res) {
    const user = await User.findOne({ email: req.params.email }).populate([
      "pets",
      "cars"
    ]);
    if (user) {
      return res.json(user);
    }

    return res.status(400).json({ error: "User not found." });
  },

  async destroy(req, res) {
    await User.deleteOne({ _id: req.params.id });
    return res.json({ message: "User deleted." });
  }
};
