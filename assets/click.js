let isAccessed = false;

function daerahCorona() {
  const kecamatan = document.getElementById("kecamatan").value;
  const kecamatanLower = kecamatan.toLowerCase(kecamatan);

  const kotakSatu = document.createElement("div");
  const kotakDua = document.createElement("div");
  const kotakTiga = document.createElement("div");
  const kotakEmpat = document.createElement("div");

  const kotakSatuLagi = document.querySelector("#satu");
  const kotakDuaLagi = document.querySelector("#dua");
  const kotakTigaLagi = document.querySelector("#tiga");
  const kotakEmpatLagi = document.querySelector(".empat");

  kotakSatu.setAttribute("class", "satu");
  kotakDua.setAttribute("class", "satu");
  kotakTiga.setAttribute("class", "satu");
  kotakEmpat.setAttribute("class", "empat");

  kotakSatu.setAttribute("id", "satu");
  kotakDua.setAttribute("id", "dua");
  kotakTiga.setAttribute("id", "tiga");

  if(isAccessed) {
    if (kecamatanLower === "depok") {
        kotakSatuLagi.innerHTML = `
        <h3>4</h3>
        <p>Positif</p>
        `;

        kotakDuaLagi.innerHTML = `
        <h3>24</h3>
        <p>Pasien Dalam Pengawasan(PDP)</p>
        `;

        kotakTigaLagi.innerHTML = `
        <h3>183</h3>
        <p>Orang Dalam Pemantauan (ODP)</p>
        `;

        kotakEmpatLagi.innerHTML = `
        <h2>Status: <span id="siaga">SIAGA</span></h2>
        <h3>Apa yang harus anda lakukan?</h3>
        <ol>
          <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
          <li><strong>Jaga jarak</strong></li>
          <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
          <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
        </ol>
        `;
    } else if (kecamatanLower === "sleman") {
        kotakSatuLagi.innerHTML = `
        <h3>1</h3>
        <p>Positif</p>
        `;

        kotakDuaLagi.innerHTML = `
        <h3>11</h3>
        <p>Pasien Dalam Pengawasan(PDP)</p>
        `;

        kotakTigaLagi.innerHTML = `
        <h3>185</h3>
        <p>Orang Dalam Pemantauan (ODP)</p>
        `;

        kotakEmpatLagi.innerHTML = `
        <h2>Status: <span id="siaga">SIAGA</span></h2>
        <h3>Apa yang harus anda lakukan?</h3>
        <ol>
          <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
          <li><strong>Jaga jarak</strong></li>
          <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
          <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
        </ol>
        `;
    } else if (kecamatanLower === "ngaglik") {
      kotakSatuLagi.innerHTML = `
      <h3>5</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>23</h3>
      <p>Pasien Dalam Pengawasan(PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>65</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
        <li><strong>Jaga jarak</strong></li>
        <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "kalasan") {
      kotakSatuLagi.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>11</h3>
      <p>Pasien Dalam Pengawasan(PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>102</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
        <li><strong>Jaga jarak</strong></li>
        <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "gamping") {
      kotakSatuLagi.innerHTML = `
      <h3>2</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>10</h3>
      <p>Pasien Dalam Pengawasan(PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>65</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
        <li><strong>Jaga jarak</strong></li>
        <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "godean") {
      kotakSatuLagi.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>8</h3>
      <p>Pasien Dalam Pengawasan(PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>65</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
        <li><strong>Jaga jarak</strong></li>
        <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "mlati") {
      kotakSatuLagi.innerHTML = `
      <h3>3</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>11</h3>
      <p>Pasien Dalam Pengawasan(PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>55</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
        <li><strong>Jaga jarak</strong></li>
        <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "ngemplak") {
      kotakSatuLagi.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>8</h3>
      <p>Pasien Dalam Pengawasan(PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>55</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
        <li><strong>Jaga jarak</strong></li>
        <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "moyudan") {
      kotakSatuLagi.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDuaLagi.innerHTML = `
      <h3>3</h3>
      <p>Pasien Dalam Pengawasan(PDP)</p>
      `;

      kotakTigaLagi.innerHTML = `
      <h3>53</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpatLagi.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
        <li><strong>Jaga jarak</strong></li>
        <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
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
        <h3>24</h3>
        <p>Pasien Dalam Pengawasan(PDP)</p>
        `;

        kotakTiga.innerHTML = `
        <h3>183</h3>
        <p>Orang Dalam Pemantauan (ODP)</p>
        `;

        kotakEmpat.innerHTML = `
        <h2>Status: <span id="siaga">SIAGA</span></h2>
        <h3>Apa yang harus anda lakukan?</h3>
        <ol>
          <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
          <li><strong>Jaga jarak</strong></li>
          <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
          <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
        </ol>
        `;
    } else if (kecamatanLower === "sleman") {
        kotakSatu.innerHTML = `
        <h3>1</h3>
        <p>Positif</p>
        `;

        kotakDua.innerHTML = `
        <h3>11</h3>
        <p>Pasien Dalam Pengawasan(PDP)</p>
        `;

        kotakTiga.innerHTML = `
        <h3>185</h3>
        <p>Orang Dalam Pemantauan (ODP)</p>
        `;

        kotakEmpat.innerHTML = `
        <h2>Status: <span id="siaga">SIAGA</span></h2>
        <h3>Apa yang harus anda lakukan?</h3>
        <ol>
          <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
          <li><strong>Jaga jarak</strong></li>
          <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
          <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
        </ol>
        `;
    } else if (kecamatanLower === "ngaglik") {
      kotakSatu.innerHTML = `
      <h3>5</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>23</h3>
      <p>Pasien Dalam Pengawasan(PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>65</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
        <li><strong>Jaga jarak</strong></li>
        <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "kalasan") {
      kotakSatu.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>11</h3>
      <p>Pasien Dalam Pengawasan(PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>102</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
        <li><strong>Jaga jarak</strong></li>
        <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "gamping") {
      kotakSatu.innerHTML = `
      <h3>2</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>10</h3>
      <p>Pasien Dalam Pengawasan(PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>65</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
        <li><strong>Jaga jarak</strong></li>
        <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "godean") {
      kotakSatu.innerHTML = `
      <h3>0</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>8</h3>
      <p>Pasien Dalam Pengawasan(PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>65</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
        <li><strong>Jaga jarak</strong></li>
        <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "mlati") {
      kotakSatu.innerHTML = `
      <h3>3</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>11</h3>
      <p>Pasien Dalam Pengawasan(PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>55</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
        <li><strong>Jaga jarak</strong></li>
        <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "ngemplak") {
      kotakSatu.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>8</h3>
      <p>Pasien Dalam Pengawasan(PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>55</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
        <li><strong>Jaga jarak</strong></li>
        <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    } else if (kecamatanLower === "moyudan") {
      kotakSatu.innerHTML = `
      <h3>1</h3>
      <p>Positif</p>
      `;

      kotakDua.innerHTML = `
      <h3>3</h3>
      <p>Pasien Dalam Pengawasan(PDP)</p>
      `;

      kotakTiga.innerHTML = `
      <h3>53</h3>
      <p>Orang Dalam Pemantauan (ODP)</p>
      `;

      kotakEmpat.innerHTML = `
      <h2>Status: <span id="siaga">SIAGA</span></h2>
      <h3>Apa yang harus anda lakukan?</h3>
      <ol>
        <li>Sebisa mungkin <strong>tetap berada di rumah</strong></li>
        <li><strong>Jaga jarak</strong></li>
        <li><strong>Cuci tangan</strong> setelah menyentuh barang apapun</li>
        <li>Merasa sakit? <strong>Usahakan menghubungi dokter melalui telepon terlebih dahulu agar dokter dapat mempersiapkan diri</strong></li>
      </ol>
      `;
    }
  }

  if (!isAccessed) {
    document.getElementById("jadisatu").appendChild(kotakSatu);
    document.getElementById("jadisatu").appendChild(kotakDua);
    document.getElementById("jadisatu").appendChild(kotakTiga);
    document.getElementById("output").appendChild(kotakEmpat);
  }

  isAccessed = true;
}