const Pet = require("../models/Pet");

module.exports = {
  async store(req, res) {
    const pet = await Pet.create(req.body);

    return res.json(pet);
  },

  async index(req, res) {
    const petId = req.params.id;
    const pet = await Pet.findOne({ _id: petId }).populate("user");

    return res.json(pet);
  }
};
