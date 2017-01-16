// FUNGSI YANG KEPAKE

// fungsi ini dipakai untuk baymax menjawab perkataan user
// fungsi ini membutuhkan input 'say', dan akan mengembalikan output 'response'
function baymaxAnswer(say) {
  var response = "";

  // dalam javascript, kita bisa cek apakah suatu string / text mengandung suatu kata dengan memakai fungsi includes()
  if(say.includes("baymax")) {
    response = "yap, ada yang bisa aku bantu? :D";
  }
  // added by skysimmer
  else if(say.include("halo")) {
    response = "halo juga :)";
  
  }
  else {
    // default response
    response = "alohaa :)";  
  
  }
  return response;
}
