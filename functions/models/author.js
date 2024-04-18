const mongoose = require("mongoose");
const authorSchema = require("../schemas/author");

const AuthorModel = mongoose.model("Author", authorSchema);

module.exports = AuthorModel;
