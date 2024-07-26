//default variables
//This is some ES6
document.write("<h2>Default variables and template strings:</h2>");
function greet(fname, mid="NMN", lname){
	document.write(`Hi ${fname} ${mid} ${lname}!`);
} 
greet("John", "Q", "Public");

document.write("<h2>Block-scoped variables:</h2>");
//block scoped variable 
var i = 20;
for(let i = 0; i < 10; i++){
}
document.write(i);

