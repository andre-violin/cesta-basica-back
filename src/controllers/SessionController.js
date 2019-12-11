const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({ error: "User not found." });
    }

    if (!(await user.compareHash(password))) {
      return res.json({ error: "Invalid password." });
    }

    const { _id, name, isAdmin } = user;

    return res.json({
      user: { _id, name, isAdmin, email },
      token: User.generateToken(user)
    });
  }
};
