// var num1 = 3.5;

// console.log (num1);

// num1 = Math.round (num1);

// console.log (num1);

// var a = new Date();
// var c =a.toString()
// var b =c.slice(0,3)
// console.log(b)
// var month =a.getMonth()
// console.log(month)


// var fsubject=+prompt("enter your first subject number out of 100");
// var ssubject=+prompt("enter your first subject number out of 100");
// var tsubject=+prompt("enter your first subject number out of 100");
// var f4subject=+prompt("enter your first subject number out of 100");
// var f5subject=+prompt("enter your first subject number out of 100");


// function per(){
//     var a=fsubject+ssubject+tsubject+f4subject+f5subject;
// var b =(a/500*100)
// document.write(b+""+"%")

// }

// per()

var fsubject=+prompt("enter your first subject number out of 100");
var ssubject=+prompt("enter your first subject number out of 100");
var tsubject=+prompt("enter your first subject number out of 100");
var f4subject=+prompt("enter your first subject number out of 100");
var f5subject=+prompt("enter your first subject number out of 100");


function per(){
    var a=fsubject+ssubject+tsubject+f4subject+f5subject;
var b =(a/500*100)
document.write(b+" "+ "%" + "call in function "+"<br> ")
return b 

}

var a =per()
document.write(a+" "+ "%")