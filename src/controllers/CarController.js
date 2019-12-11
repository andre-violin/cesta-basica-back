const Car = require("../models/Car");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const car = await Car.create(req.body);
    const user = await User.update(
      { _id: req.body.user },
      { $push: { cars: car._id } }
    );

    console.log(user);

    return res.json(car);
  },

  async index(req, res) {
    const car = await Car.findOne({ _id: req.params.id }).populate("user");

    return res.json(car);
  },
  async list(req, res) {
    const car = await Car.find().populate("user");

    return res.json(car);
  }
};
