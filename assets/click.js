let isAccessed = false;

function daerahCorona() {
  const kecamatan = document.getElementById("kecamatan").value;
  const kecamatanLower = kecamatan.toLowerCase(kecamatan);

  if (!kecamatan) {
    return;
  }

  const kotakSatu = document.createElement("div");
  const kotakDua = document.createElement("div");
  const kotakTiga = document.createElement("div");
  const kotakEmpat = document.createElement("div");
  const kotakLima = document.createElement("div");

  const kotakSatuLagi = document.querySelector("#satu");
  const kotakDuaLagi = document.querySelector("#dua");
  const kotakTigaLagi = document.querySelector("#tiga");
  const kotakEmpatLagi = document.querySelector(".empat");

  kotakSatu.setAttribute("class", "satu");
  kotakDua.setAttribute("class", "satu");
  kotakTiga.setAttribute("class", "satu");
  kotakEmpat.setAttribute("class", "empat");
  kotakLima.setAttribute("class", "empat");

  kotakSatu.setAttribute("id", "satu");
  kotakDua.setAttribute("id", "dua");
  kotakTiga.setAttribute("id", "tiga");
  kotakLima.setAttribute("id", "lima");

  if(isAccessed) {
    if (kecamatanLower === "depok") {
      kotakSatuLagi.innerHTML = `
      <h3>4</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>25</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>184</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "sleman") {
      kotakSatuLagi.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>10</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>185</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "ngaglik") {
      kotakSatuLagi.innerHTML = `
      <h3>5</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>23</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>65</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "kalasan") {
      kotakSatuLagi.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>11</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>102</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "gamping") {
      kotakSatuLagi.innerHTML = `
      <h3>2</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>10</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>65</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "godean") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>8</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>65</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "mlati") {
      kotakSatuLagi.innerHTML = `
      <h3>3</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>11</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>55</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "ngemplak") {
      kotakSatuLagi.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>8</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>55</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "moyudan") {
      kotakSatuLagi.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>3</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>53</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "prambanan") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>4</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>31</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "berbah") {
      kotakSatuLagi.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>5</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>23</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "minggir") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>0</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>28</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "cangkringan") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>0</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>27</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "turi") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>2</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>22</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "tempel") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>3</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>20</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "pakem") {
      kotakSatuLagi.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>7</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>13</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "seyegan") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>3</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>17</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "umbulharjo") {
      kotakSatuLagi.innerHTML = `
      <h3>2</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>10</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>98</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "gondokusuman") {
      kotakSatuLagi.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>5</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>51</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "kotagede") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>1</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>44</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "mergangsan") {
      kotakSatuLagi.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>5</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>31</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "wirobrajan") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>6</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>30</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "mantrijeron") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>6</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>24</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "jetis") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>6</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>18</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "kraton") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>1</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>22</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "gedongtengen") {
      kotakSatuLagi.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>0</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>22</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "tegalrejo") {
      kotakSatuLagi.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>4</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>15</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "gondomanan") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>3</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>15</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "ngampilan") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>4</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>13</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "danurejan") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>1</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>14</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "pakualaman") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>1</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>9</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else {
      kotakSatuLagi.innerHTML = "<h1>Maaf</h1>";
      kotakDuaLagi.innerHTML = "<h1>Mohon</h1>";
      kotakTigaLagi.innerHTML = "<h1>Maaf</h1>";
      kotakEmpatLagi.innerHTML = `
      <p>Kecamatan yang disebutkan belum tercatat. Mohon maaf :(</p>
      `;
    }
  }

  if (!isAccessed) {
    if (kecamatanLower === "depok") {
        kotakSatu.innerHTML = `
        <h3>4</h3>
        <p>Positif</p>
        `;

        kotakDua.innerHTML = `
        <h3>25</h3>
        <p>Pasien Dalam Pengawasan (PDP)</p>
        `;

        kotakTiga.innerHTML = `
        <h3>184</h3>
        <p>Orang Dalam Pemantauan (ODP)</p>
        `;

        kotakEmpat.innerHTML = `
        <h2>Status: <span id="siaga">SIAGA</span></h2>
        <h3>Apa yang harus anda lakukan?</h3>
        <ol>
          <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
          <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
          <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
          <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
        </ol>
        `;
    } else if (kecamatanLower === "sleman") {
        kotakSatu.innerHTML = `
        <h3>1</h3>
        <p>Positif</p>
        `;

        kotakDua.innerHTML = `
        <h3>10</h3>
        <p>Pasien Dalam Pengawasan (PDP)</p>
        `;

        kotakTiga.innerHTML = `
        <h3>185</h3>
        <p>Orang Dalam Pemantauan (ODP)</p>
        `;

        kotakEmpat.innerHTML = `
        <h2>Status: <span id="siaga">SIAGA</span></h2>
        <h3>Apa yang harus anda lakukan?</h3>
        <ol>
          <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
          <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
          <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
          <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
        </ol>
        `;
    } else if (kecamatanLower === "ngaglik") {
      kotakSatu.innerHTML = `
      <h3>5</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>23</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>65</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "kalasan") {
      kotakSatu.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>11</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>102</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "gamping") {
      kotakSatu.innerHTML = `
      <h3>2</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>10</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>65</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "godean") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>8</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>65</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "mlati") {
      kotakSatu.innerHTML = `
      <h3>3</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>11</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>55</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "ngemplak") {
      kotakSatu.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>8</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>55</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "moyudan") {
      kotakSatu.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>3</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>53</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "prambanan") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>4</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>31</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "berbah") {
      kotakSatu.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>5</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>23</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "minggir") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>0</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>28</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "cangkringan") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>0</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>27</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "turi") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuLagi.innerHTML = `
      <h3>2</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>22</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "tempel") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>3</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>20</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "pakem") {
      kotakSatu.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>7</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>13</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "seyegan") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>3</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>17</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "umbulharjo") {
      kotakSatu.innerHTML = `
      <h3>2</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>10</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>98</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "gondokusuman") {
      kotakSatu.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>5</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>51</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "kotagede") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>1</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>44</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "mergangsan") {
      kotakSatu.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>5</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>31</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "wirobrajan") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>6</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>30</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "mantrijeron") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>6</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>24</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "jetis") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>6</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>18</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "kraton") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>1</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>22</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "gedongtengen") {
      kotakSatu.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>0</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>22</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "tegalrejo") {
      kotakSatu.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>4</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>15</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "gondomanan") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>3</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>15</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "ngampilan") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>4</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>13</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "danurejan") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>1</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>14</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "pakualaman") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>1</h3>
      <p>Pasien Dalam Pengawasan (PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>9</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="awas">AWAS</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li><i class="fas fa-house-user"></i> Kurangi aktivitas di luar dan sebisa mungkin <strong>tetap berada di kosan</strong></li>
        <li><i class="fas fa-people-arrows"></i> <strong>Jaga jarak</strong></li>
        <li><i class="fas fa-hands-wash"></i> <strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li><i class="fas fa-stethoscope"></i> Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else {
      kotakSatu.innerHTML = "<h1>Maaf</h1>";
      kotakDua.innerHTML = "<h1>Mohon</h1>";
      kotakTiga.innerHTML = "<h1>Maaf</h1>";
      kotakEmpat.innerHTML = `
      <p>Kecamatan yang disebutkan belum tercatat. Mohon maaf :(</p>
      `;
    }
  }

  kotakLima.innerHTML = `
  <h4>Kontak yang dapat dihubungi:</h4>
  <table>
    <tr>
      <th>RS Sardjito</th>
      <td>(0274)631190</td>
    </tr>
    <tr>
      <th>RS JIH</th>
      <td>(0274)4463535</td>
    </tr>
    <tr>
      <th>Hotline Pemda DIY</th>
      <td>(0274)555585</td>
    </tr>
    <tr>
      <th>Polda DIY</th>
      <td>(0274)884444</td>
    </tr>
  </table>
  `;

  if (!isAccessed) {
    document.getElementById("jadisatu").appendChild(kotakSatu);
    document.getElementById("jadisatu").appendChild(kotakDua);
    document.getElementById("jadisatu").appendChild(kotakTiga);
    document.getElementById("jadidua").appendChild(kotakEmpat);
    document.getElementById("jadidua").appendChild(kotakLima);
  }

  isAccessed = true;
}