function extractUserFromURL(){
  //alert("Extracting now..");
  var url = window.location.toString();
  try{
    var username = url.split("?")[1].split("=")[1];
    document.getElementById("username").value = username;
  }catch(err){}
}

function submitForm(url){
  var username = document.getElementById("username").value;
  window.location.href=url + "?username="+username;
  return false;
}
