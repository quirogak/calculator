const numericButtonContainer = document.querySelector("#numeric-button-container")
const displayInput = document.querySelector("#input-display")
const result = document.querySelector("#result")
result.textContent = 0

//-------------------------------------------------------------------------
//base algorithm
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

  return result.toFixed(2);
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


//-------------------------------------------------------------------------


//buttons section


const basicButtons = function(){

  for(let i = 0 ;i <= 9 ; i++){

    const basicButtons = document.createElement("button");
    numericButtonContainer.insertBefore(basicButtons,decimalButton);
    basicButtons.setAttribute('id','basic-buttons' + i)
    basicButtons.setAttribute('style', 'background-color:rgb(109, 109, 109);')
    basicButtons.textContent = i;

    basicButtons.addEventListener("click", () => {

     
     return displayInputContent.value += [i]
     
    })

    //hover style 
    basicButtons.addEventListener("mouseover" , () => {

      basicButtons.setAttribute("style", "background-color:rgb(126, 125, 125);")
    })
    basicButtons.addEventListener("mouseout" , () => {

      basicButtons.setAttribute("style", "background-color:rgb(109, 109, 109);")
    })


  }
}





const removeButton = document.createElement("button");
numericButtonContainer.appendChild(removeButton);
removeButton.setAttribute('id','remove-button')
removeButton.textContent = "⌫";
removeButton.addEventListener("click", () => {

currentValue = displayInputContent.value.substring(0, displayInputContent.value.length-1)

      
 return displayInputContent.value = currentValue
})

const allClear = document.createElement("button");
numericButtonContainer.appendChild(allClear);
allClear.setAttribute('id','AC')
allClear.textContent = "AC";
allClear.addEventListener("click", () => {

  

  return displayInputContent.value = "" , result.textContent = 0
})


const displayInputContent = document.createElement("input")
displayInput.appendChild(displayInputContent)
displayInputContent.setAttribute ("id" , "display-input-content")


const equalButton = document.querySelector("#equal-to")
const addButton = document.querySelector("#add")
const substractButton = document.querySelector("#substract")
const multiplyButton = document.querySelector("#multiply")
const divideButton = document.querySelector("#divide")


const decimalButton = document.createElement("button");
numericButtonContainer.appendChild(decimalButton);
decimalButton.setAttribute('id','decimal-button')
decimalButton.textContent = ".";
decimalButton.addEventListener("click", () => {
  
  document.querySelector("#decimal-button").disabled = true;
  
  return displayInputContent.value += ["."];
  
   })

//-------------------------------------------------------------------------


/* We are checking if there is already a operator inside of displayInputContent, if there is any, we run the function
equalTo and return the operator we just selected. */


operatorList = ["+","-","*","/"]

function containsNumber(str) {
  return /\d/.test(str);
}


addButton.addEventListener("click", () => {

  document.querySelector("#decimal-button").disabled = false;

 if (operatorList.some(elements => displayInputContent.value.includes(elements) ) && containsNumber(displayInputContent.value)){

  result.textContent = equalTo()
  displayInputContent.value = [ equalTo() + "+"]
 }

else 
  displayInputContent.value += ["+"]
  
})


substractButton.addEventListener("click", () => {

  document.querySelector("#decimal-button").disabled = false;

  if (operatorList.some(elements => displayInputContent.value.includes(elements))){

    result.textContent = equalTo()
   displayInputContent.value = [ equalTo() + "-"]
   
  }
 else 
   displayInputContent.value += ["-"]
   
 })

multiplyButton.addEventListener("click", () => {

  document.querySelector("#decimal-button").disabled = false;

  if (operatorList.some(elements => displayInputContent.value.includes(elements))){

    result.textContent = equalTo()
    displayInputContent.value = [ equalTo() + "*"]
  
   }
  else 
    displayInputContent.value += ["*"]
})

divideButton.addEventListener("click", () => {

  document.querySelector("#decimal-button").disabled = false;

  if (operatorList.some(elements => displayInputContent.value.includes(elements))){

    result.textContent = equalTo()
    displayInputContent.value = [ equalTo() + "/"]
    
   }
  else 
    displayInputContent.value += ["/"]
  
})


equalButton.addEventListener("click", () => {

  document.querySelector("#decimal-button").disabled = false;
 
 
  result.textContent = equalTo()
  
  return displayInputContent.value = equalTo()

})


//-------------------------------------------------------------------------

const equalTo = function() {



  const fullExpression = (displayInputContent.value)



  if (fullExpression.includes("+")) {

    myArray = fullExpression.split("+")
    

    return (operate(parseFloat(myArray[0]),"+",(parseFloat(myArray[1])))) 

  }
  else if (fullExpression.includes("-")) {

    myArray = fullExpression.split("-")

    return (operate(parseFloat(myArray[0]),"-",(parseFloat(myArray[1]))))
  }
  else if (fullExpression.includes("*")) {

    myArray = fullExpression.split("*")

    return (operate(parseFloat(myArray[0]),"*",(parseFloat(myArray[1]))))
  }
  else if (fullExpression.includes("/")) {

    myArray = fullExpression.split("/")

    return (operate(parseFloat(myArray[0]),"/",(parseFloat(myArray[1]))))

  }

  else if ((operatorList.some(elements => fullExpression.includes(elements) === false))){
    return displayInputContent.value
  }


  
}











