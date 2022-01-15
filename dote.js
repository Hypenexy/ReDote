const os = require('os-utils');

function RefreshStats(){
  if(processes.style.display == "block"){
    os.cpuUsage(function(v){
      cpuusage.innerHTML = `<ti>CPU Usage</ti> ${Math.round(v*100)}%`
      memusage.innerHTML = `<ti>Memory Usage</ti> ${((os.totalmem()-os.freemem())/1024).toFixed(2)} GB <ex>${(os.totalmem()/1024).toFixed(2)} GB Total</ex>`
      // win.webContents.send('cpu',v*100);
      // win.webContents.send('mem',os.freememPercentage()*100);
    });
  }
}

function RefreshProcesses(){
  if(processes.style.display == "block"){
    //could this be optimized? It cannot refresh :/
    var _ = require('lodash');
    var ps = require('current-processes');
    
    ps.get(function(err, processes) {
      processes.forEach(el => {
        processesgui.innerHTML += `<div><ti>${el.name}</ti><cp>${el.cpu}%</cp><me>${el.mem.usage.toFixed(2)}%</me></div>`
      });
      processeslisted.innerHTML = `<ti>Processes Listed</ti> ${processes.length}</ti>`
    });
  }
}


window.onload = function(){
  RefreshProcesses()
  RefreshStats()
  setInterval(function () {
    RefreshStats()
  }, 1000);
  // setInterval(function () {
  //   RefreshProcesses()
  // }, 5000);
}
