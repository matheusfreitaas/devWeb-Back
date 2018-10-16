const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
   name: {
      type: String,
      required: [true, "Uma disciplina precisa de um nome."],
   },

   class: {
      type: Number,
         required: [true, "Uma disciplina precisa de uma turma."],
         unique: true
   },

   professor: {
      type: Schema.Types.ObjectId,
      ref: 'Professor',
      required: [true, "Uma disciplina precisa de um professor."]
   }
});

module.exports = mongoose.model('Course', courseSchema);