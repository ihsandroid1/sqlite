const db = require('./db');

db.all('SELECT * FROM belajar_user', function (err,belajar_user) {
    console.log(belajar_user)
});