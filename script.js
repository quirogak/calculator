const add = function(x,y){

  const result =  x + y;

  return result;
}

const subtract = function(x,y){

  const result = x - y ;

  return result;
}

const multiply = function(x,y){

  const result = x * y;

  return result;
}

const divide = function(x,y){

    if (x == 0 || y == 0){

      const result = console.log("Error! can't divide by 0")

      return result
    }

 else {

  const result = x / y;

  return result;
 }
}

const operate = function(operator,x,y) {

if (operator == "+"){
   
  return add(x,y)
}

else if (operator == "-"){

  return subtract(x,y)
}
else if (operator == "*"){
  
  return multiply(x,y)
}
else if (operator == "/"){
  
  return divide(x,y)
}



}
console.log(operate("*",3,2))
