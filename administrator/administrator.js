const Admin = require('./administrator.model');

exports.getAdmin = function (req, res, next) {
    Admin.findById(req.params.id, function (err, admin) {
        if (err){
            res.status(400);
            res.send('Ocorreu um erro.');
        }else{
            res.json(admin);
        } 
      
    });
};

exports.createAdmin = function (req, res, next) {
   let admin = new Admin(
       {
           name: req.body.name,
           email: req.body.email,
           password: req.body.password
       }
   );
   admin.save(function (err) {
       if (err) {
           res.status(400);
           res.send('Ocorreu um erro.')
       }else{
            res.json(admin);
       };
   });
};

exports.updateAdmin = function (req, res, next) {
    Admin.findByIdAndUpdate(req.params.id, req.body, function (err, admin) {
        if (err){
            res.status(400);
            res.send('Ocorreu um erro.');
        }else{
            res.json(admin);
        };
    });
};

exports.deleteAdmin = function (req, res, next) {
    Admin.findByIdAndRemove(req.params.id, function (err, admin) {
        if (err){
            res.status(400);
            res.send('Ocorreu um erro.');
        }else{
            res.json('Administrador removido com sucesso');
        };
    });
};



