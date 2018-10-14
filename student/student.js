const Student = require('./student.model');

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