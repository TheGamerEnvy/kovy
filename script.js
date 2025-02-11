function showKomik(komikId) {
  // Sembunyikan semua komik
  var komikContents = document.querySelectorAll('.komik-content');
  komikContents.forEach(function(komik) {
    komik.style.display = 'none';
  });

  // Tampilkan komik yang dipilih
  var selectedKomik = document.getElementById(komikId);
  selectedKomik.style.display = 'block';
}
