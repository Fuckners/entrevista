const database = require('../database/database');

class User {
  static async createUser({ nome, email, senha, data_nascimento, avatar }) {
    return new Promise(async (resolve, reject) => {
      try {

        const avatar_id = avatar.name ? await this.createAvatar(avatar) : 1;
  
        await database.insert({ nome, email, senha, avatar_id, data_nascimento, ativo: 1 }).table('users');

        resolve();
      } catch (error) {
        reject(new Error(error))
      }
    });
  }

  static async createAvatar({ nome, path }) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = database.insert({
          nome,
          path,
          updatedAt: new Date() 
        }).table('avatares');
  
        console.log(id);
        resolve(id);
  
      } catch (error) {
        reject(new Error(error))
      }
    });
  }
}

module.exports = User;