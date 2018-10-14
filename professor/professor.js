const Prof = require('./professor.model');

exports.getProf = function(req, res, next){
   Prof.findById(req.params.id, function(err, prof){
      if(err){
         res.status(400);
         res.send('Ocorreu um erro.');
      }else{
         res.json(prof);
      }
   });
};

exports.createProf = function(req, res, next){
   let prof = new Prof(
      {
         name: req.body.name,
         course: req.body.course,
         email: req.body.email,
         password: req.body.password
      }
   );
   prof.save(function(err){
      if(err){
         res.status(400);
         res.send('Ocorreu um erro.')
      }else{
         res.json(prof);
      }
   });
};

exports.updateProf = function(req, res, next){
   Prof.findByIdAndUpdate(req.params.id, req.body, function(err, prof){
      if(err){
         res.status(400);
         res.send('Ocorreu um erro.');
      }else{
         res.json(prof);
      }
   });
};

exports.deleteProf = function(req, res, next){
   Prof.findByIdAndRemove(req.params.id, function(err, prof){
      if(err){
         res.status(400);
         res.send('Ocorreu um erro.');
      }else{
         res.json('Professor removido com sucesso.');
      }
   });
};