const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
   name: {
      type: String,
      required: [true, "Um aluno precisa de um nome."]
   },

   email: {
      type:String,
      required: [true, "Um aluno precisa de um email."],
      unique: true
   },

   password: {
      type: String,
      required: [true, "Um aluno precisa de uma senha."]
   },

   course: [{
      type:Schema.Types.ObjectId,
      ref: 'Course',
      required: [true, "Um aluno precisa de uma disciplina."]
   }]
});

module.exports = mongoose.model('Student', studentSchema);