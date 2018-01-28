var resultBox= document.getElementById("result");
var ac= document.getElementById("ac");
var ce= document.getElementById("ce");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var dot = document.getElementById("dot");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var divide = document.getElementById("divide");
var multiply = document.getElementById("multiply");
var equals = document.getElementById("equals");

function resetValue(){
   resultBox.innerHTML="";     
}
function addToArray(value){
    switch(value){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
            resultBox.innerHTML += value;
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            calcResult();
            resultBox.innerHTML +=  (resultBox.innerHTML[resultBox.innerHTML.length-1]) != "+" && (resultBox.innerHTML[resultBox.innerHTML.length-1]) != "-" && (resultBox.innerHTML[resultBox.innerHTML.length-1]) != "*" && (resultBox.innerHTML[resultBox.innerHTML.length-1]) != "/" && (resultBox.innerHTML[resultBox.innerHTML.length-1]) != undefined?(value):"";
            break;
        case ".":
            resultBox.innerHTML += value;
            break;
    }
}
function calcResult(){
    var result = resultBox.innerHTML;
    for(var i=0;i<result.length;i++){
       if(result[i] == "+"){
           var val1 =parseFloat(result.substr(0,i));
           var val2= parseFloat(result.substr(i+1,result.length-1));
           resultBox.innerHTML=val1+val2;
       } 
        if(result[i] == "-"){
           var val1 =parseFloat(result.substr(0,i));
           var val2= parseFloat(result.substr(i+1,result.length-1));
           resultBox.innerHTML=val1-val2;
       }
        if(result[i] == "*"){
           var val1 =parseFloat(result.substr(0,i));
           var val2= parseFloat(result.substr(i+1,result.length-1));
           resultBox.innerHTML=val1*val2;
       }
        if(result[i] == "/"){
           var val1 =parseFloat(result.substr(0,i));
           var val2= parseFloat(result.substr(i+1,result.length-1));
           resultBox.innerHTML=val1/val2;
       }
    }  
    //resetValue();
}
 
ac.addEventListener("click",resetValue);
ce.addEventListener("click",resetValue);
one.addEventListener("click",function(){ addToArray(1); });
two.addEventListener("click",function(){ addToArray(2); });
three.addEventListener("click",function(){ addToArray(3); });
four.addEventListener("click",function(){ addToArray(4); });
five.addEventListener("click",function(){ addToArray(5); });
six.addEventListener("click",function(){ addToArray(6); });
seven.addEventListener("click",function(){ addToArray(7); });
eight.addEventListener("click",function(){ addToArray(8); });
nine.addEventListener("click",function(){ addToArray(9); });
zero.addEventListener("click",function(){ addToArray(0); });
dot.addEventListener("click",function(){ addToArray("."); });
plus.addEventListener("click",function(){ addToArray("+"); });
minus.addEventListener("click",function(){ addToArray("-"); });
divide.addEventListener("click",function(){ addToArray("/"); });
multiply.addEventListener("click",function(){ addToArray("*"); });
equals.addEventListener("click",calcResult);