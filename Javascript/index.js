//external js
// var x,y;
// x = parseFloat(prompt("Input Value of X = "));
// y = parseFloat(prompt("Input Value of Y = "));

// if(x>y){
//     // alert("X is greater than Y");
//     document.write("X is greater than Y");
// }
// else{
//     document.write("X is smaller than Y");
// }
// var username = "Dara";
// var password = 124;

// if(username == "Dara"){
//     if(password == 123){
//        document.write("Welcome to login")
//     }
//     else{
//         // alert("Invalid password")
//         document.write("Invalid password")
//     }
// }
// else{
//     document.write("Invalid username");
// }
var code = prompt("Input code =  ");
var Name = prompt("Input Name = ");
var qty  = parseInt(prompt("Input Qty = "));
var price= parseFloat(prompt("Input Price = "));
var total = qty*price;
// payment = total - (total*10)/100; 
//if else if else
//(condition) ? statement if statement
// :(condition) ? statement else if statement
// :statement else statement
// income = salary + (salary*bonus)/100;
var payment = (total>=1 && total<=10) ? total - (total*10)/100 
              : (total>10 && total<=20) ? total - (total*20)/100
              : (total>20 && total<=30) ? total - (total*30)/100
              : (total>30 && total<=40) ? total - (total*40)/100
              : (total>40 && total<=50) ? total - (total*50)/100
              : (total>50 && total<=60) ? total - (total*60)/100
              : total - (total*70)/100;
document.write("<h1>Code = "+code+"</h1>");
document.write("<h1>Name = "+Name+"</h1>");
document.write("<h1>QTY = "+qty+"</h1>");
document.write("<h1>Price = "+price+"</h1>");
document.write("<h1>Total = "+total+"</h1>");
document.write("<h1>Payment = "+payment+"</h1>");
// document.write("<h1>Code = "+code+"</h1>");

