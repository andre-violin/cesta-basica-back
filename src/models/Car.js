const { Schema, model } = require("mongoose");

const CarSchema = new Schema(
  {
    model: {
      type: String,
      required: true
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
