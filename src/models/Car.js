const { Schema, model } = require("mongoose");

const CarSchema = new Schema(
  {
    model: {
      type: String,
      required: true
    },
    pet: {
      type: Schema.Types.ObjectId,
      ref: "Pet"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Car", CarSchema);
