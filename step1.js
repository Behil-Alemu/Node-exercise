const fs = require('fs');
const process = require('process');

function cat(path){
fs.readFile(path, "utf8", function(err, file) {
  if (err) {
    console.error("You done messed up",err);
    process.exit(1);
  }else{
    console.log(file);  
  }
  
});
}

cat(process.argv[2]);
