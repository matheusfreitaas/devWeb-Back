const Question = require('./question.model');

exports.getQuestion = (req, res) => {
   Question.findById(req.params.id, function(err, question) {
      if(err){
         return res.status(400).send('Ocorreu um erro.');
      }
      res.json(question)
   })
};

exports.createQuestion = (req, res) => {
   let question = new Question({
      title: req.body.title,
   });
   question.save((err) => {
      if(err){
         return res.status(400).send('Ocorreu um erro.');
      }
      res.json(question)
   })
};

exports.updateQuestion = (req, res) => {
   Question.findByIdAndUpdate(req.params.id, req.body, (err, question) =>{
      if(err){
         return res.status(400).send('Ocorreu um erro.');
      }
      res.json(question);
   })
};

exports.deleteQuestion = (req, res) => {
   Question.findByIdAndRemove(req.params.id, (err) =>{
      if(err){
         res.status(400).send('Ocorreu um erro.');
      }
      res.json('Pergunta deletada com sucesso.')
   })
};

exports.getAllQuestions = (req, res) => {
   Question.find({}, (err, questions) => {
      if(err) {
         return res.status(400).send('Ocorreu um erro.');
      }
      res.json(questions);
   })
};

