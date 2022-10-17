const fs = require('fs');
const process = require('process');
const axios = require('axios');


function createNewFile(input, newfile){
    if(newfile){
    fs.writeFile(newfile, input, function(err) {
        if (err) {
        console.error("You done messed up",err);
        process.exit(1);
        }
    
    }); 
    }else{
        console.log(input)
    }
   
  }


function cat(path, newfile){
fs.readFile(path, "utf8", function(err,file) {
  if (err) {
    console.error("You done messed up",err);
    process.exit(1);
  }else{
    createNewFile(file,newfile);  
  }
  
});
}




async function webCat(url, newfile){
    try {
    let result = await axios.get(url) 
    createNewFile(result.data,newfile)
    }catch (error) {
        console.error(`You done messed up, URL ${url} not found`,error);
        process.exit(1);
    }

}


let path;
let newfile;

if(process.argv[2] === "--out"){
    newfile =process.argv[3];
    path = process.argv[4];
}else{
    path = process.argv[2];
}

if (path.slice(0,4) === "http"){
    webCat(path, newfile)
}else{
    cat(path, newfile)
}

// console.log(`# no output, but ${new.txt} contains contents of ${one.txt}`)

