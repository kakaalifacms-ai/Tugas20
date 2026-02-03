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

function Cetak(){ 
let total = 0
let output = ""

// loop input harga barang dari array global data barang
for(let i =0; i <dataBarang.length; i++) {
  let harga = dataBarang[i]
  total+= harga
  
  output+= "Barang ke-"+(1+i) + ": Rp " + rupiah(harga) + "<br>"
}

// HITUNG
let diskon = 0
if (total > 500000) {
  diskon = total * 0.2
}

let setelahDiskon = total - diskon

// HITUNG PPN
let ppn = setelahDiskon * 0.1

// TOTAL BAYAR
let totalBayar = setelahDiskon + ppn

// OUTPUT RINGKASAN
output += `
    <div class="ringkasan">
      Total belanja: Rp ${rupiah(total)}<br>
      Diskon: Rp ${rupiah(diskon)}<br>
      PPN 10%: Rp ${rupiah(ppn)}<br>
      Total bayar: Rp ${rupiah(totalBayar)}
    </div>
  `

document.getElementById("hasil").innerHTML = output
}
 