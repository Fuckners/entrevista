const multer = require('multer');
const upload = multer({
  storage: multer.diskStorage({

      destination(req, file, callback) {
          
          callback(null, 'src/public/avatares');

      },

      filename(req, file, callback) {
          callback(null, Date.now() + file.originalname);
      }
  }),

  fileFilter(req, file, callback) {
      file.mimetype === 'image/jpeg' ?
          callback(null, true) : // somente aceita imagens jpeg
          callback(null, false);
  }, 

  limits: {
      // tamanho máximo de 2mb
      fileSize: 1024 * 1024 * 5 // 3mb
  }
});

const User = require('../models/User');

class UserController {
  static async register(req, res) {
    res.render('register');
  }

  static async create(req, res) {
    const { nome, email, password, data_nascimento } = req.body;
    try {

      upload.single('avatar')(req, res, async e => {
        if (e) {
          res.redirect('/register');
  
        } else {
          const arquivo = {
              nome: req.file?.originalname,
              path: req.file?.path
          };
          console.log({
            nome,
            email,
            senha: password,
            data_nascimento,
            avatar: arquivo
          });
          User.createUser({
            nome,
            email,
            senha: password,
            data_nascimento,
            avatar: arquivo
          });

          res.redirect('/');
        }
      });
      
    } catch (error) {
      console.log(error);
      res.redirect('/register');
    }
    
  }
};

module.exports = UserController;