/**
 * ==========================================
 * LKPD MATEMATIKA
 * Google Apps Script Web App
 * ==========================================
 */

function doGet(e) {
  const page = e?.parameter?.page || 'Index';

  const allowedPages = [
    'Index',
    'perkalian-pangkat',
    'pangkat-dari-pangkat',
    'pembagian-pangkat',
    'pangkat-pecahan',
    'merasionalkan-penyebut',
  ];

  // Jika halaman tidak terdaftar
  if (!allowedPages.includes(page)) {
    return HtmlService
      .createHtmlOutput(`
        <div style="
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 50px 20px;
        ">
          <h2>Halaman tidak ditemukan</h2>
          <p>Halaman <b>${page}</b> tidak tersedia.</p>
          <a href="?page=Index">← Kembali ke Dashboard</a>
        </div>
      `)
      .setTitle('Halaman Tidak Ditemukan');
  }

  return HtmlService
    .createTemplateFromFile(page)
    .evaluate()
    .setTitle('LKPD Matematika')
    .setXFrameOptionsMode(
      HtmlService.XFrameOptionsMode.ALLOWALL
    );
}


/**
 * Memanggil file HTML lain
 *
 * Contoh:
 * <?!= include('css'); ?>
 */
function include(filename) {
  return HtmlService
    .createHtmlOutputFromFile(filename)
    .getContent();
}