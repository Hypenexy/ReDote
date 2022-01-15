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


function darktheme(){
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = 'darkcss';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'dark.css';
    link.media = 'all';
    head.appendChild(link);
    localStorage.setItem("darkmode", true)
}

function undarktheme(){
    document.getElementById("darkcss").remove()
    localStorage.removeItem("darkmode")
}

togglestyle.onclick = function(){
    if(localStorage.getItem("darkmode")){
        undarktheme()
    }
    else{
        darktheme()
    }
}


if(localStorage.getItem("darkmode")){
    darktheme()
}