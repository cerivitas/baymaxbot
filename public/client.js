// FUNGSI YANG KEPAKE

// fungsi ini dipakai untuk merapikan format percakapan yang akan ditampilkan
function displayChat(yousay, baymaxsay) {

  // tunjukkan siapa yang ngomong di dalam kurung siku, lalu tambahkan apa yg dia katakan
  var display_yousay = "[you] " + yousay;
  var display_baymaxsay = "[baymax] " + baymaxsay;
  
  // tulis jawaban si baymax di baris baru dengan menambahkan tag <br /> 
  var allsay = display_yousay + "<br />" + display_baymaxsay;
  
  // ini dipakai untuk menampilkan allsay dgn versi javascript biasa
  document.getElementById('chat').innerHTML = allsay;
  
  // ini dipakai untuk mengembalikan allsay 
  return allsay;
}


// VERSI JAVASCRIPT BIASA - Start here

// ini adalah fungsi utama yang dipanggil ketika tombol saybutton di klik
function tellbaymax() {
  
  // ambil input dulu
  var yousay = getInput();
  
  // ambil jawaban baymax
  var baymaxsay = baymaxAnswer(yousay);
  
  // lalu tampilkan chat nya
  displayChat(yousay, baymaxsay);
}

// ini adalah fungsi untuk mengambil input dari user
function getInput() {
  
  // ambil apa yg ditulis user di elemen dgn id yousay
  return document.getElementById('yousay').value;   
}

// Versi javascript biasa - end here

/*
// VERSI JQUERY - Start here

// fungsi utama pada halaman index.html yang akan dijalankan oleh jquery dimulai disini 
$(function() {

  // apabila user click tombol dengan id saybutton, maka jquery akan menjalankan fungsi berikut
  $('#saybutton').click(function(event) {

    // karena formulir kita hanya mengandung 1 input, kita bisa langsung ambil apa yang diketik user dengan cara memanggil fungsi val()
    var say = $('input').val();
    
    // panggil fungsi baymaxAnswer untuk mendapatkan jawaban si baymax terhadap apa yang user ketik
    var baymaxsay = baymaxAnswer(say);

    // fungsi displayChat dipanggil untuk merapikan tampilan chatbot kita, lalu kita simpan dalam variabel allsay
    var allsay = displayChat(say, baymaxsay);

    // tampilkan allsay di elemen dengan id chat
    $('#chat').html(allsay);

  });
});

// versi jquery - end here

*/

