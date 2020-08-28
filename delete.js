const db    = require('./db');
const args  = process.argv.slice(2);
const query = `DELETE FROM belajar_user WHERE id=${args[0]}`;

db.run(query, function (err) {
  if (err) throw err;
  console.log('Berhasil di hapus!');
});