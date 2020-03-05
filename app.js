var exec = require('child_process').exec;
var child;

const command = '../atomicDEX-API/target/debug/mybalance.sh KMD'

child = exec(command,
   function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('exec error: ' + error);
      }
   });
