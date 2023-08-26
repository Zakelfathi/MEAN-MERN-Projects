const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "product price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: [
        "ArtisanatMarrakech",
        "MeublesRabat",
        "ArtisanatFes",
        "MeublesTanger",
        "ArtisanatOujda",
        "MeublesFes",
        "ArtisanatCasablanca",
        "MeublesCasablanca",
        "ArtisanatTanger",
      ],
      message: "{VALUE} is not supported",
    },
  },
  image: {
    type: String, // Store the filename of the image
    required: true, // Assuming each product must have an image
  },
});

module.exports = mongoose.model("Product", productSchema);
