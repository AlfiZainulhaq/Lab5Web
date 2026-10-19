// =========================================================================
// script.js — Praktikum 5 Dasar Pemrograman JavaScript (Lab5Web)
// =========================================================================

// -------------------------------------------------------------------------
// Latihan 1 — Menampilkan output di halaman dan Console
// -------------------------------------------------------------------------
function jalankanLatihan1() {
    document.getElementById("pesan").textContent = "Hello World";
    console.log("Hello World");
}

// Jalankan Latihan 1 saat halaman pertama kali dimuat
jalankanLatihan1();

// -------------------------------------------------------------------------
// Latihan 2 — Alert dan prompt
// -------------------------------------------------------------------------
function jalankanLatihan2() {
    const namaPengguna = prompt("Masukkan nama Anda:", "");
    if (namaPengguna && namaPengguna.trim() !== "") {
        alert("Halo, " + namaPengguna + "!");
        document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
    } else {
        alert("Nama belum diisi.");
    }
}

// -------------------------------------------------------------------------
// Latihan 3 — Function dan operasi aritmetika
// -------------------------------------------------------------------------
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}

// Panggil otomatis sesuai modul
operasiDasar(9, 4);

// -------------------------------------------------------------------------
// Latihan 4 — Seleksi kondisi if–else
// -------------------------------------------------------------------------
function jalankanLatihan4() {
    const inputNilai = prompt("Masukkan nilai (0–100):");
    const nilaiMahasiswa = Number(inputNilai);
    if (
        inputNilai === null ||
        inputNilai.trim() === "" ||
        Number.isNaN(nilaiMahasiswa) ||
        nilaiMahasiswa < 0 ||
        nilaiMahasiswa > 100
    ) {
        alert("Input nilai tidak valid.");
    } else if (nilaiMahasiswa >= 60) {
        alert("Lulus");
    } else {
        alert("Belum lulus");
    }
}

// -------------------------------------------------------------------------
// Latihan 5 — Seleksi kondisi switch
// -------------------------------------------------------------------------
function jalankanLatihan5() {
    const inputPilihan = prompt("Masukkan angka 1–5:");
    switch (inputPilihan) {
        case "1":
            alert("Bilangan satu");
            break;
        case "2":
            alert("Bilangan dua");
            break;
        case "3":
            alert("Bilangan tiga");
            break;
        case "4":
            alert("Bilangan empat");
            break;
        case "5":
            alert("Bilangan lima");
            break;
        default:
            alert("Pilihan tidak tersedia");
    }
}

// -------------------------------------------------------------------------
// Latihan 6 — Form bilangan genap atau ganjil
// -------------------------------------------------------------------------
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}

// -------------------------------------------------------------------------
// Latihan 7 — Mengubah warna halaman
// -------------------------------------------------------------------------
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

// -------------------------------------------------------------------------
// Latihan 8 & Eksperimen 10 — DOM dan checkbox menu makanan
// -------------------------------------------------------------------------
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// -------------------------------------------------------------------------
// Bagian F. Mini Project — Kalkulator Nilai Mahasiswa
// -------------------------------------------------------------------------
function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function tentukanStatusKelulusan(nilai) {
    return nilai >= 60 ? "Lulus" : "Belum lulus";
}

function tampilkanHasilKalkulator(nilaiAkhir, predikat, status) {
    document.getElementById("outNilaiAkhir").textContent = nilaiAkhir.toFixed(2);
    document.getElementById("outPredikat").textContent = predikat;
    document.getElementById("outStatus").textContent = status;
    const pesanEl = document.getElementById("pesanValidasiNilai");
    pesanEl.textContent = "Perhitungan berhasil.";
    pesanEl.className = "success-text";
}

function prosesKalkulatorNilai() {
    const inputTugas = document.getElementById("nilaiTugas").value;
    const inputUts = document.getElementById("nilaiUts").value;
    const inputUas = document.getElementById("nilaiUas").value;
    const pesanEl = document.getElementById("pesanValidasiNilai");

    // Validasi tidak boleh kosong
    if (inputTugas.trim() === "" || inputUts.trim() === "" || inputUas.trim() === "") {
        pesanEl.textContent = "Semua kolom nilai (Tugas, UTS, UAS) wajib diisi!";
        pesanEl.className = "error-text";
        return;
    }

    const tugas = Number(inputTugas);
    const uts = Number(inputUts);
    const uas = Number(inputUas);

    // Validasi rentang 0-100
    const apakahValid = (n) => !Number.isNaN(n) && n >= 0 && n <= 100;
    if (!apakahValid(tugas) || !apakahValid(uts) || !apakahValid(uas)) {
        pesanEl.textContent = "Setiap nilai harus berada pada rentang 0–100!";
        pesanEl.className = "error-text";
        return;
    }

    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(akhir);
    const status = tentukanStatusKelulusan(akhir);

    console.log("Nilai akhir:", akhir.toFixed(2));
    console.log("Predikat:", predikat);
    console.log("Status:", status);

    tampilkanHasilKalkulator(akhir, predikat, status);
}

// Contoh pengujian awal di Console sesuai modul
const tugas = 85;
const uts = 78;
const uas = 88;
const akhir = hitungNilaiAkhir(tugas, uts, uas);
console.log("Nilai akhir:", akhir.toFixed(2));
console.log("Predikat:", tentukanPredikat(akhir));
console.log("Status:", akhir >= 60 ? "Lulus" : "Belum lulus");

// -------------------------------------------------------------------------
// Bagian G & H. Eksperimen Mandiri & Tugas
// -------------------------------------------------------------------------

// Eksperimen 1: Ubah Latihan 3 agar menerima dua nilai dari prompt
function operasiDasarPrompt() {
    const inputA = prompt("Masukkan bilangan pertama (a):");
    const inputB = prompt("Masukkan bilangan kedua (b):");

    if (inputA === null || inputB === null || inputA.trim() === "" || inputB.trim() === "") {
        alert("Kedua bilangan harus diisi!");
        return;
    }

    const a = Number(inputA);
    const b = Number(inputB);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        alert("Input harus berupa angka yang valid!");
        return;
    }

    operasiDasar(a, b);
    const pembagian = b !== 0 ? (a / b).toFixed(2) : "Tidak dapat dibagi nol";
    const modulus = b !== 0 ? a % b : "Tidak terdefinisi";

    document.getElementById("hasilAritmetikaPrompt").textContent =
        `Input (${a}, ${b}) -> Tambah: ${a + b} | Kurang: ${a - b} | Kali: ${a * b} | Bagi: ${pembagian} | Modulus: ${modulus}`;
}

// Eksperimen 7: Perulangan untuk menampilkan tabel perkalian angka 7 dari 1 sampai 10
function tampilkanPerkalianTujuh() {
    const wadahTabel = document.getElementById("tabelPerkalian7");
    wadahTabel.innerHTML = "";
    console.log("=== Tabel Perkalian 7 (1 - 10) ===");
    for (let i = 1; i <= 10; i++) {
        const hasilKali = 7 * i;
        console.log(`7 x ${i} = ${hasilKali}`);
        const li = document.createElement("li");
        li.textContent = `7 x ${i} = ${hasilKali}`;
        wadahTabel.appendChild(li);
    }
}
tampilkanPerkalianTujuh();

// Eksperimen 8: Function cekGenap(angka) yang mengembalikan true jika angka genap
function cekGenap(angka) {
    return angka % 2 === 0;
}

function ujiCekGenap() {
    const inputVal = document.getElementById("inputCekGenap").value;
    const outputEl = document.getElementById("hasilBooleanGenap");
    if (inputVal.trim() === "") {
        outputEl.textContent = "Kolom angka tidak boleh kosong!";
        return;
    }
    const angka = Number(inputVal);
    const hasilBoolean = cekGenap(angka);
    console.log(`cekGenap(${angka}) ->`, hasilBoolean);
    outputEl.textContent = `cekGenap(${angka}) mengembalikan nilai: ${hasilBoolean}`;
}

// Eksperimen 9 & Tugas H.7: Validasi form agar nama tidak kosong dan nilai 0–100
function validasiFormMahasiswa() {
    const nama = document.getElementById("inputNamaValidasi").value.trim();
    const inputNilai = document.getElementById("inputNilaiValidasi").value.trim();
    const hasilEl = document.getElementById("hasilValidasiForm");

    if (nama === "") {
        hasilEl.textContent = "Validasi Gagal: Nama tidak boleh kosong!";
        hasilEl.className = "output-box error-text";
        return false;
    }

    if (inputNilai === "") {
        hasilEl.textContent = "Validasi Gagal: Kolom nilai tidak boleh kosong!";
        hasilEl.className = "output-box error-text";
        return false;
    }

    const nilai = Number(inputNilai);
    if (Number.isNaN(nilai) || nilai < 0 || nilai > 100) {
        hasilEl.textContent = "Validasi Gagal: Nilai harus berupa angka pada rentang 0–100!";
        hasilEl.className = "output-box error-text";
        return false;
    }

    hasilEl.textContent = `Validasi Berhasil: Data ${nama} (Nilai: ${nilai}) valid dan siap dikirim.`;
    hasilEl.className = "output-box success-text";
    return true;
}

// Eksperimen 11: Tombol untuk menyembunyikan atau menampilkan elemen HTML
function toggleInfoTambahan() {
    const elemen = document.getElementById("elemenToggle");
    if (elemen.style.display === "none") {
        elemen.style.display = "block";
    } else {
        elemen.style.display = "none";
    }
}
