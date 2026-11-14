// let nama = "budi"; //string
// let umur = 25; //number
// let tinggibadan = 167.3; //float
// let beratbadan; //undifine
// let pacar = null //null

//beratbadan = 55;

// //if (pacar == null){
//   //  pacar ="jomblo";
// //}else{
//    // pacar ="sudah punya pacar";
// //}

// //switch case 
// switch (pacar){
//     case 1:
//         pacar ="sudah punya pacar";
//         break;
//     case 2:
//         pacar ="sudah punya pacar pacar";
//         break;
//     case 3:
//         pacar ="sudah punya banyak pacar";
//         break;
//     default:
//         pacar ="jomblo";
//         break;
// }



alert(`Halo nama saya ${nama}, umur saya saat ini ${umur}, tinggi badan saya sekitar ${tinggibadan}cm dengan berat badan saya saat ini ${beratbadan} dan untuk status hubungan saya saat ini ${pacar}`);
//console.log(`Halo nama saya ${nama}, umur saya saat ini ${umur}, tinggi badan saya sekitar ${tinggibadan}cm dengan berat badan saya saat ini ${beratbadan} dan untuk status hubungan saya saat ini ${pacar}`);

// let saldoAwal = 12000000;
// let saldoTambahan = 2000000;
// let saldoHutang = 8000000;
// let saldoAkhir = saldoAwal + saldoTambahan - saldoHutang;

// console.log (`saldo awal bulan saya sebesar ${saldoAwal} dengan ta,bahan saldo sebesar ${saldoTambahan}, akan tetapi saya mempunyai hutang paylatter sebesar ${saldoHutang} jadi sisa saldo saya saat ini sebesar ${saldoAkhir}`);

// //array
// namaMhs = ["Budi","Joko","Ahmad"];
// namaMhs.push("Ghina","Devi");
// console.log(namaMhs);

// //for
// for (i=0; i<=20; i++){
//     console.log("Hey bro!!");
// }

// for (let i = 0; i<namaMhs.length; i++){
//     console.log(namaMhs[i]);
// }

function hitungNilai(){
    //ambil data inputan
    let nama = document.getElementById("nama").value;
    let nilai = Number(document.getElementById("nilai").value);

    let hasil="";

    //validasi input
    if (nama === "" || document.getElementById("nilai").value === ""){
        hasil = "Nama dan Nilai harus di isi";
    }

    //cek rentang nilai
    else if 
    (nilai < 0 || nilai > 100){
        hasil = "Nilai harus di isi 0-100";
    }

    //check kelulusan
    else if ( nilai >=75){
        hasil = nama + " dinyatakan lulus";
    }else{
        hasil = nama + " dinyatakan tidak lulus";
    }

    //menampilkan hasil halaman web
    document.getElementById("hasil").innerHTML = hasil;
}