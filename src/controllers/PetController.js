const Pet = require("../models/Pet");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const pet = await Pet.create(req.body);
    await User.updateOne({ _id: pet.user }, { $push: { pet: pet._id } });

    return res.json(pet);
  },

  async index(req, res) {
    const petId = req.params.id;
    const pet = await Pet.findOne({ _id: petId }).populate("user");

    return res.json(pet);
  },

  async list(req, res) {
    const pet = await Pet.find();

    return res.json(pet);
  }
};
