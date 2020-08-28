const db = require('./db');
const args = process.argv.slice(2);
const query = `UPDATE belajar_user
            SET nama = '${args[1]}',
                no_hp = '${args[2]}',
                email = '${args[3]}'  
            WHERE id = ${args[0]}`;

db.run(query, function (err) {
    if (err) throw err;
    console.log('Update Berhasil!');
});