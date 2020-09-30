let conn = require('./db.js');
<<<<<<< HEAD
let path = require("path");
=======
let path = require('path');
>>>>>>> 00222ae3b738a8aa33b6a122b43bb122fdc56801

module.exports = {
    getMenus() {
        return new Promise((resolve, reject) => {
            conn.query(` 
              SELECT * FROM tb_menus ORDER BY title
            `, (err, results) => {
              if (err) {
                reject(err);
              }
          
              resolve(results);
            });  
        });
    },

    save(fields, files) {
      return new Promise((resolve, reject) => {
        fields.photo = `images/${path.parse(files.photo.path).base}`;
<<<<<<< HEAD

        conn.query(`
          INSERT INTO tb_menus(title, description, price, photo)
          VALUES(?, ?, ?, ?)
=======
        conn.query(`
          INSERT INTO tb_menus (title, description, price, photo)
          VALUES (?, ? , ?, ?)
>>>>>>> 00222ae3b738a8aa33b6a122b43bb122fdc56801
        `, [
          fields.title,
          fields.description,
          fields.price,
          fields.photo
<<<<<<< HEAD
        ], (err, results) => {
=======
        ], (err, results) =>{
>>>>>>> 00222ae3b738a8aa33b6a122b43bb122fdc56801
          if(err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    }
}