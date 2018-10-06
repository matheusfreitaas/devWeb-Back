const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const professorSchema = Schema(
   {
      name: {
         type: String,
         required: [true, 'Um professor deve ter nome.'],
         unique: true
      },

      course: [{
         type: Schema.Types.ObjectId,
         ref: '../course/course.model',
         required: [true, 'Todo professor precisa de pelo menos um curso.']
      }]
});

const professor = mongoose.model('professor', professorSchema);
module.exports = professor;