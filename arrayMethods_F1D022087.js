const readline = require('readline');

const daftarMakanan = [
    'mie ayam', 'bakso', 'ikan bakar', 'ikan goreng', 
    'tahu goreng', 'tempe goreng', 'ayam suwir', 
    'sayur sop', 'cilok', 'ayam bakar'
];

function ubahKeItalic() {
    return daftarMakanan.map(makanan => `*${makanan}*`);
}

function filterGorengan() {
    return daftarMakanan.filter(makanan => makanan.includes('goreng'));
}

function hitungKataAyam() {
    return daftarMakanan.reduce((akumulator, makananSekarang) => {
        if (makananSekarang.includes('ayam')) {
            return akumulator + 1;
        }
        return akumulator;
    }, 0);
}

function cariNamaDenganHurufS() { 
    return daftarMakanan.find(makanan => makanan.includes('s'));
}

function cekPanjangKurangDariEnam() {
    return daftarMakanan.some(makanan => makanan.length < 6);
}

function cekSemuaHurufKecil() {
    return daftarMakanan.every(makanan => makanan === makanan.toLowerCase());
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("===== Pilih Metode Array yang Ingin Digunakan =====");
    console.log("1. Ubah setiap nama menjadi italic (map)");
    console.log("2. Filter kata yang mengandung 'goreng' (filter)");
    console.log("3. Hitung jumlah kata 'ayam' (reduce)");
    console.log("4. Cari nama dengan huruf 's' (find)");
    console.log("5. Cek apakah ada nama yang memiliki < 6 huruf (some)");
    console.log("6. Cek apakah semua nama menggunakan huruf kecil (every)");
    console.log("==================================================");

    rl.question('Masukkan pilihan Anda (1-6): ', (pilihan) => {
        let hasil;
        switch (pilihan) {
            case '1':
                hasil = `Hasil map (italic): ${ubahKeItalic().join(', ')}`;
                break;
            case '2':
                hasil = `Hasil filter 'goreng': ${filterGorengan().join(', ')}`;
                break;
            case '3':
                hasil = `Jumlah kata 'ayam' dalam array: ${hitungKataAyam()}`;
                break;
            case '4':
                const ditemukan = cariNamaDenganHurufS(); 
                hasil = `Nama yang ditemukan dengan huruf 's': ${ditemukan || 'Tidak ada'}`;
                break;
            case '5':
                hasil = cekPanjangKurangDariEnam() 
                    ? "Iya, ada nama yang memiliki huruf < 6" 
                    : "Tidak, tidak ada nama yang memiliki huruf < 6";
                break;
            case '6':
                hasil = cekSemuaHurufKecil()
                    ? "Iya, semua nama menggunakan huruf kecil"
                    : "Tidak, tidak semua nama menggunakan huruf kecil";
                break;
            default:
                hasil = "Pilihan tidak valid. Silakan masukkan angka antara 1 sampai 6.";
        }
        console.log("\n" + hasil);
        rl.close();
    });
}

main();