const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "doit fournir le nom"],
    trim: true,
    maxlength: [20, "le nom ne peut pas contenir plus de 20 caractères"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Tâche", TaskSchema);
