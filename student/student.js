const Student = require('./student.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.getStudent = function(req, res, next){
   Student.findById(req.params.id, function(err, student){
      if(err){
         res.status(400);
         res.send('Ocorreu um erro.');
      }else{
         res.json(student);
      }
   });
};

exports.createStudent = function(req, res, next){
   let student = new Student(
      {
         name: req.body.name,
         course: req.body.course,
         email: req.body.email,
         password: req.body.password
      }
   );
   student.save(function(err){
      if(err){
         res.status(400);
         res.send('Ocorreu um erro.')
      }else{
         res.json(student);
      }
   });
};

exports.updateStudent = function(req, res, next){
   Student.findByIdAndUpdate(req.params.id, req.body, function(err, student){
      if(err){
         res.status(400);
         res.send('Ocorreu um erro.');
      }else{
         res.json(student);
      }
   });
};

exports.deleteStudent = function(req, res, next){
   Student.findByIdAndRemove(req.params.id, function(err, student){
      if(err){
         res.status(400);
         res.send('Ocorreu um erro.');
      }else{
         res.json('Aluno removido com sucesso.');
      }
   });
};

exports.login = async function(req,res){
   Student.findOne({'email': req.body.email}).then( async(student) => {
       bcrypt.compare(req.body.password,
           student.password
           );
       if(!student){
           return res.status(404).json({ error: "Usuário não existe*"});
       }else{
           // test a matching password
           student.comparePassword(req.body.password, function(err, isMatch) {
               if (err) throw err;
               if(!isMatch){
                   return res.status(400).json( {
                           error: 'Email ou senha incorreta*'
                   });
               }else{
                   let token = jwt.sign({id: student._id}, process.env.JWT_SECRET_KEY, {expiresIn: 86400});
                   let data = {
                       message: 'Usuário autenticado com sucesso',
                       token: token,
                       studentId: student._id,
                   };
                   return res.status(200).json(data);
               }
           });
       }
       });
}