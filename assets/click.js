function daerahCorona() {
  const kecamatan = document.getElementById("kecamatan").value;
  const kecamatanLower = kecamatan.toLowerCase(kecamatan);

  const kotakSatu = document.createElement("div");
  const kotakDua = document.createElement("div");
  const kotakTiga = document.createElement("div");
  const kotakEmpat = document.createElement("div");

  kotakSatu.setAttribute("class", "satu");
  kotakDua.setAttribute("class", "satu");
  kotakTiga.setAttribute("class", "satu");
  kotakEmpat.setAttribute("class", "empat");

  kotakSatu.setAttribute("id", "satu");
  kotakDua.setAttribute("id", "dua");
  kotakTiga.setAttribute("id", "tiga");

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
  }

  document.getElementById("jadisatu").appendChild(kotakSatu);
  document.getElementById("jadisatu").appendChild(kotakDua);
  document.getElementById("jadisatu").appendChild(kotakTiga);
  document.getElementById("output").appendChild(kotakEmpat);
}