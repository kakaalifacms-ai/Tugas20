  let dataBarang=[]
    
    // fungsi format rupiah 1.000.000
function rupiah(angka) {
  return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function process() {
  dataBarang=[]
  
 //reset output setiap kali proses dijalankan
 document.getElementById("hasil").innerHTML = ""
 
  // INPUT JUMLAH BARANG
  let jumlahBarang = Number(prompt("Masukkan jumlah barang"));



  // LOOP INPUT HARGA BARANG
  for (let i = 1; i <= jumlahBarang; i++) {
    let harga = Number(prompt("Masukkan harga barang ke-" + i))
    dataBarang.push(harga)
    
  }
  //aktifkan tombol Cetak
  document.getElementById("Cetak").disabled= false
  
  //menampilkan info barang yang diinput
  document.getElementById("hasil").innerHTML = "Data barang berhasil diinput.(jumlah barang:"+dataBarang.length +")"
}

function cetak(){
}