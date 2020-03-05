var exec = require('child_process').exec;
var child;

const coins = ['KMD', 'BTC', 'LTC']

const command = './mybalance.sh '

coins.forEach(coin => {
  child = exec(command+coin,
     function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        var obj = JSON.parse(stdout)
        console.log(obj.address)
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
     })
})
