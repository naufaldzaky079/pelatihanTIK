//1. Pilih tombol berdasarkan IDnya
const tombolSapa = document.getElementById('sapaButton');
//2. Tambahkan 'event listener' untuk aksi click
tombolSapa.addEventListener('click', function() {
  //Jalankan kode ini ketika tombol di klik
                            SweetAlert2('Halo! Terima Kasih Sudah Mampir!');
});
