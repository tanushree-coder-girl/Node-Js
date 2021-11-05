//firstly we have to require our modules at the top which we want to sue
//import area or require modules area

const fs = require('fs');
const os = require('os')
const path = require('path')

//Import your own module with another file 
//const mymodule = require('./utilities');               //1st way of import own module
const {myName, profession} = require('./utilities');   //2nd way of import own module

//import npm packages 
const chalk = require('chalk');
var validator = require('validator');

//================= 1. Introduction ==========================//
//Node.js is an open-source and cross-platform JavaScript runtime environment. Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant. A Node.js app runs in a single process, without creating a new thread for every request. Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

console.log('hello nodejs'); 

//================ 2. install node js and npm ==================
//download link 
//https://nodejs.org/en/

//================= 3. prerequisites ===========================
// Html , css , javascript , es6, json , ajax etc. 

//=============== 4. Repl in node js ===================
//type node in terminal 
// with the use of repl we can run our code directly in terminal 
// go to editor mode .editor 
// for last data use underscore  _
//expression function loop etc can perform in repl
//press tab for get list of options 
//write name of modules for details 

//==================== 5. FS core Module ========================
//synchronous file system 
//CRUD 

//1.CREATE = create file and add data 
//fs.writeFileSync(nameoffile,datatoadd);
//fs.writeFileSync('test.txt','hello everyone');

//2. UPDATE = append more data
//fs.appendFileSync('test.txt', 'welcome in nodejs series')

//3. READ = read file data 
//const readData = fs.readFileSync('test.txt');
//const bufferDatatoString = readData.toString();
//console.log(bufferDatatoString);

//encode buffer data to string 
//const readStringDAta = fs.readFileSync('test.txt' ,'UTF-8')
//console.log(readStringDAta)

//4. DELETE = delete file 
//fs.unlinkSync('test.txt');

//5. Make directory 
//fs.mkdirSync('newfolder')

//6. remove directory 
//fs.rmdirSync('newfolder')

//Asnchronous File system 
//CRUD 

//syntax 
// fs.methodname('filename', callbackfunction)

//1. create directory 
// fs.mkdir('bio', (err)=>{
//     if(err) console.log(err);
//     console.log('directory created successfully')
// });

//2. CREATE file inside folder 
// fs.writeFile('bio/test.txt', 'hello everyone',  (err) => {
//     console.log('file created successfully');
// });

//3. UPDATE data 
// fs.appendFile('bio/test.txt', ' welcome in node tutorial', (err)=>{
//     if(err) console.log(err)
//     console.log('data updated successfully');
// })

//4. READ data 
// fs.readFile('bio/test.txt', 'UTF-8', (err, data)=>{
//     console.log(data);
// })

//5. Delete File 
// fs.unlink('bio/test.txt', (err)=>{
//     if(err) console.log(err); 
//     console.log('file deleted successfully')
// })

//6. Delete folder 
// fs.rmdir('bio', (err)=>{
//     if(err) console.log(err);
//     console.log('folder deelted successfully')
// })

//==================== 6. Difference between synchronous and Asunchronous ========================
//In synchronous operations tasks are performed one at a time and only when one is completed, the following is unblocked. In other words, you need to wait for a task to finish to move to the next one. In asynchronous operations, on the other hand, you can move to another task before the previous one finishes.

//==================== 7. OS Module ========================
//os means operating system it shows our operating system information 
console.log(os.hostname())
console.log(os.platform())
console.log(os.release())
console.log(os.type())
console.log(os.arch());
console.log(os.homedir());
console.log(os.tmpdir());

//==================== 8. PATH Module ========================
//to show path of file folder etc 
let myFilepath = '/home/tanu/web development/Nodejs/index.js';
console.log(path.dirname(myFilepath));
console.log(path.extname(myFilepath));
console.log(path.basename(myFilepath));
const allinfo = path.parse(myFilepath);
console.log(allinfo.name);

//==================== 9. Create and export your own modules  ========================
//mymodule.myName('coder-girl-tanu'); //using 1st way
//console.log(mymodule.profession); //using 1st way

myName('coder-girl-tanu'); //using 2nd way
console.log(profession); //using 2nd way

//===================== 10. Node + NPM ==========================
//npm is node package manager which contains all useful packages for simply use in our application
//for example a package chalk 
//with the help of chalk we can make terminal awesome 
//npm i chalk

//step-1 create package .json with command 
//npm init 
//step-2 install npm package with command 
//npm install package-name 
//step-3 check package.json file for check dependencies installed

//firstly import package at the top 
//then use 
let isEmail = validator.isEmail('abc@gmail.com');
isEmail == true ? console.log(chalk.green('Email is valid')) : console.log(chalk.red('Email is not valid'));

//===================== 11. Nodemon in node js  ==========================
//nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
//install globally nodemon for use in any node application
//npm i nodemon -g
//use it like 
//nodemon filename.js 

//===================== 12. Module Wrapper function in node js  ==========================
// ( function(exports, require , module, __filename, __dirname ){
    //console.log(__filename);
    //console.log(__dirname);
// } )

//this is called module wrapper function by default node js wrap all code inside this function 
//we don't need to write this function 

//================= 13. Creating Our Own Web Server using HTTP createServer =================


