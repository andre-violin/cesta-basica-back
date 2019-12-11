const { Schema, model } = require("mongoose");

const PetSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    breed: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: "Car"
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Pet", PetSchema);
