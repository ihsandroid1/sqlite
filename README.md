# Belajar SQLite

1. npm install --save sqlite3
2. isi field data dalam table : node create ihsandroid 081210040505 me@ihsandroid.com (sesuai kolom)
3. Cek semua record : node read
4. Untuk update data : node update (data yang diganti)
5. untuk delete : node delete (pilih id yg mau dihapus)
6. Untuk kekurangan bisa kasih saya saran supaya lebih baik lagi terima kasih.

## Contoh di DBlite Browser

CREATE TABLE "belajar_user" (
	"id"	INTEGER,
	"nama"	TEXT,
	"no_hp"	TEXT,
	"email"	INTEGER UNIQUE,
	PRIMARY KEY("id" AUTOINCREMENT)
);

Biarkan kosong dulu
