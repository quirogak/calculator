const numericButtonContainer = document.querySelector("#numeric-button-container")

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

const operate = function(x,operator,y) {

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



const removeButton = document.createElement("button");
numericButtonContainer.appendChild(removeButton);
removeButton.setAttribute('id','remove-button')
removeButton.textContent = "X";

const basicButtons = function(){


  for(let i = 0 ;i <= 9 ; i++){

    const basicButtons = document.createElement("button");
    numericButtonContainer.insertBefore(basicButtons,decimalButton);
    basicButtons.setAttribute('id','basic-buttons' + i)
    basicButtons.setAttribute('style', 'background-color:rgb(109, 109, 109);')
    basicButtons.textContent = i;

  }
}

const decimalButton = document.createElement("button");
numericButtonContainer.appendChild(decimalButton);
decimalButton.setAttribute('id','decimal-button')
decimalButton.textContent = ",";


console.log(basicButtons())
console.log(operate(2,"+",2))
