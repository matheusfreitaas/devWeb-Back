const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profSchema = new Schema({
   name: {
      type: String,
      required: [true, "Um professor precisa de um nome."],
      unique: true
   },

   email: {
      type: String,
      required: [true, "Um professor precisa de um email."],
      unique: true
   },

   password:{
      type: String,
      required: [true, "Um professor precisa de uma senha."]
   }
});

module.exports = mongoose.model('Professor', profSchema);