const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = Schema(
   {
      name: {
         type: String,
         required: [true, 'Um curso precisa de nome.']
      },

      class: {
         type: Number,
         required: [true, 'Um curso precisa de uma classe para identificá-lo.'],
         unique: true
      },

      professor: {
         type: Schema.Types.ObjectId, 
         ref: '../professor/professor.model',
         required: true
      }
   });

   const course = mongoose.model('course', courseSchema);
   module.exports = course;