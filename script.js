const processesbtn = document.getElementById("processesbtn");
const processes = document.getElementById("processes");
const networkbtn = document.getElementById("networkbtn");
const network = document.getElementById("network");

const panels = ["processes", "network"];

okey.onclick = open("processes");
okey.onclick = open("network");

function open(n){
  panels.forEach(hideactiveloop);
  document.getElementById(n + "btn").style.filter = "none";
  document.getElementById(n).style.display = "block";
}

function hideactiveloop(e) {
  if(document.getElementById(e).style.display == "block"){
    document.getElementById(e).style.removeProperty("display");
    document.getElementById(e + "btn").style.removeProperty("Filter");
  }
}


//open("processes");