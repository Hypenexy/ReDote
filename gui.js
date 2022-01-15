var processesbtn = document.getElementById("processesbtn");
var processes = document.getElementById("processes");
var networkbtn = document.getElementById("networkbtn");
var network = document.getElementById("network");

const panels = ["processes", "network"];

processesbtn.onclick = function() {openside("processes")};
networkbtn.onclick = function() {openside("network")};

function openside(n){
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

openside("processes");