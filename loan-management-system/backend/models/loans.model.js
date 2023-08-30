const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  loanName: String,
  loanType: String,
  loanAmount: Number,
  loanIssueDate: Date,
  loanStatus: String,
});

const loanModel = mongoose.model("Loan", loanSchema);

module.exports = loanModel;
