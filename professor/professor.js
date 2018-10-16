const Prof = require('./professor.model');
const Course = require('../course/course.model')

exports.getProf = function (req, res, next) {
   Prof.findById(req.params.id, function (err, prof) {
      if (err) {
         res.status(400);
         res.send('Ocorreu um erro.');
      } else {
         res.json(prof);
      }
   });
};

exports.createProf = function (req, res, next) {
   let prof = new Prof({
      name: req.body.name,
      course: req.body.course,
      email: req.body.email,
      password: req.body.password
   });
   prof.save(function (err) {
      if (err) {
         res.status(400);
         res.send('Ocorreu um erro.')
      } else {
         res.json(prof);
      }
   });
};

exports.updateProf = function (req, res, next) {
   Prof.findByIdAndUpdate(req.params.id, req.body, function (err, prof) {
      if (err) {
         res.status(400);
         res.send('Ocorreu um erro.');
      } else {
         res.json(prof);
      }
   });
};

exports.deleteProf = function (req, res, next) {
   Prof.findByIdAndRemove(req.params.id, function (err, prof) {
      if (err) {
         res.status(400);
         res.send('Ocorreu um erro.');
      } else {
         res.json('Professor removido com sucesso.');
      }
   });
};

//rota para pegar todos os cursos que possuem o id do professor.
exports.getCoursesByProf = (req, res) => {
   Course.find({professor: req.params.profId}, (err, courses) => {
      if (err) {
         return res.status(400).send('Ocorreu um erro.');
      }
      res.json(courses);
   });
};