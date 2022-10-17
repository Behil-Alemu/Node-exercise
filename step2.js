const fs = require('fs');
const process = require('process');
const axios = require('axios');
const { url } = require('inspector');

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




async function webCat(url){
    try {
    let result = await axios.get(url) 
    console.log(result.data)
    }catch (error) {
        console.error(`You done messed up, URL ${url} not found`,error);
        process.exit(1);
    }

}
let path = process.argv[2]
console.log(path)

if (path.slice(0,4) === "http"){
    webCat(path)
}else{
    cat(path)
}

let path;
let out;

if (process.argv[2] === '--out') {
  out = process.argv[3];
  path = process.argv[4];
} else {
  path = process.argv[2];
}