// FUNGSI YANG KEPAKE

// fungsi ini dipakai untuk baymax menjawab perkataan user
// fungsi ini membutuhkan input 'say', dan akan mengembalikan output 'response'
function baymaxAnswer(say) {
  var response = "";

  // dalam javascript, kita bisa cek apakah suatu string / text mengandung suatu kata dengan memakai fungsi includes()
  if(say.includes("lapar")) {
    response = "oh, kamu lapar? makan di rumahku yuk!";
  }
  else if(say.includes("nama") && say.includes("siapa")) {
    response = "namaku baymax! nama kamu siapa?";
  }
  else if(say.includes("namaku") || (say.includes("nama") && say.includes("aku") && !say.includes("kamu"))) {
    response = "hi, nice to meet you!";
  }
  else if(say.includes("kabar")) {
    response = "oh, kabarku baik, terima kasih!";
  }
  else if(say.includes("bye")) {
    response = "byeee!";
  }
  else {
    response = "hai :)";  
  
  }
  return response;
}
