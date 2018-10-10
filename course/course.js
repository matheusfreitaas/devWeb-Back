const Course = require('./course.model');

exports.getCourse = function(req, res, next){
   Course.findById(req.params.id, function(err, course){
      if(err){
         res.status(400);
         res.send('Ocorreu um erro.');
      }else{
         res.json(course);
      }
   });
};

exports.createCourse = function(req, res, next){
   let course = new Course(
      {
         name: req.body.name,
         class: req.body.class,
         professor: req.body.professor
      }
   );
   course.save(function (err){
      if(err) {
         res.status(400);
         res.send('Ocorreu um erro.');
      }else{
         res.json(course);
      };
   });
};

exports.updateCourse = function(req, res, next){
   Course.findByIdAndUpdate(req.params.id, req.body, function(err, course){
      if(err){
         res.status(400);
         res.send('Ocorreu um erro.');
      }else{
         res.json(course);
      }
   });
};