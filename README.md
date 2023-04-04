
# TUGAS JS SKILVUL

tugas ini adalah tugas yang diberikan oleh kak 
Arief Faltah sebanyak 4 soal untuk coba dikerjakan sebagai latihan. 

# Penjelasan Soal No 1

Penjelasan singkat mengenai kode soal no 1:

- Pertama-tama, function akan memeriksa apakah nilai min atau max adalah null. Jika ya, function akan langsung mengembalikan nilai 0.
- Selanjutnya, function akan memeriksa apakah nilai max tidak didefinisikan (undefined). Jika ya, function akan menganggap nilai min sebagai 0 dan max akan mengambil nilai dari min.
- Terakhir, function akan mengembalikan sebuah nilai acak yang merupakan bilangan bulat (integer) antara range min dan max menggunakan function Math.random dan Math.floor.

# Penjelasan Soal No 2

Penjelasan singkat mengenai kode soal no 2:

- Pertama-tama, function akan memeriksa apakah kedua input adalah tipe data number. Jika salah satu atau kedua input bukan tipe data number, function akan mengembalikan pesan kesalahan "Input harus berupa number".
- Selanjutnya, function akan menggunakan method toFixed() pada nilai n untuk membulatkan angka decimal sesuai dengan nilai d. Hasil yang diberikan akan dalam bentuk string, sehingga perlu diubah ke tipe data number menggunakan parseFloat().
- Terakhir, function akan mengembalikan nilai n yang telah dibulatkan angka decimalnya.

# Penjelasan Soal No 3

Penjelasan singkat mengenai kode soal no 3:

- Pertama-tama, function akan memeriksa apakah input adalah tipe data number. Jika iya, function akan langsung mengembalikan nilai true.
- Selanjutnya, function akan memeriksa apakah input bukan tipe data string. Jika iya, function akan langsung mengembalikan nilai false.
- Terakhir, function akan menggunakan method isNaN() dan parseFloat() untuk memeriksa apakah input benar-benar numerik atau tidak. Jika input tidak benar-benar numerik, function akan mengembalikan nilai false.

# Penjelasan Soal No 4

Penjelasan singkat mengenai kode soal no 4:

- Pertama-tama, function akan memeriksa apakah input adalah tipe data number dan bilangan bulat. Jika tidak, function akan mengembalikan pesan kesalahan "Input harus berupa integer".
- Selanjutnya, function akan menggunakan method Math.ceil() untuk membulatkan input ke atas menjadi kelipatan 5 terdekat.
- Terakhir, function akan mengembalikan nilai hasil pembulatan input ke atas menjadi kelipatan 5.
