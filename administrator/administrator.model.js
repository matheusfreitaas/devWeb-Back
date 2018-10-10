const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
   name: {
      type: String,
      required: [true, "Um administrador precisa de um nome."]
   },

   email: {
      type: String,
      required: [true, "Um administrador precisa de um email."],
      unique: true
   },

   password: {
      type: String,
      required: [true, "Um administrador precisa de uma senha."]
   }
});

module.exports = mongoose.model('Admin', adminSchema);