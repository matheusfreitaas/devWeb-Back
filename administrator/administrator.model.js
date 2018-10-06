const moongose = require('mongoose'); 
const Schema = mongoose.Schema;

const adminSchema = Schema(
   {
         name: {
         type: String,
         required: [true, 'O administrador precisa de um nome.'],
         unique: true
      },

      email: {
         type: String,
         required: [true, 'O administrador precisa de um email.'],
         unique: true
      },
      
      password: {
         type: String,
         required: [true, 'Toda conta precisa de uma senha.']
      },
});

const administrator = mongoose.model('administrator', adminSchema);
module.exports = administrator;  