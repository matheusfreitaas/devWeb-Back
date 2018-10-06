const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = Schema(
   {
      name: {
         type: String,
         required: [true, 'Todo estudante deve ter um nome.'],
         unique: true
      },

      course: [{
         type: Schema.Types.ObjectId,
         ref: '../course/course.model',
         required: [true, 'Todo estudante deve ter pelo menos uma disciplina.'],
      }]
});

const student = mongoose.model('student', studentSchema);
module.exports = student;