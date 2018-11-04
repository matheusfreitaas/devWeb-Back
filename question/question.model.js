const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
   title: {
      type:String,
      required: [true, "Uma pergunta precisa ser escrita."]
   },
   
   coment: {
      type: String
   },

   answer:{
      type: String,
   }
})

module.exports = mongoose.model('Question', questionSchema);