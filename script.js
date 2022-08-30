const numericButtonContainer = document.querySelector("#numeric-button-container")
const displayInput = document.querySelector("#input-display")
const result = document.querySelector("#result")
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
      
 return displayInputContent.value = [""] 
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

  return displayInputContent.value += ["."];
})

//-------------------------------------------------------------------------


/* We are checking if there is already a operator inside of displayInputContent, if there is any, we run the function
equalTo and return the operator we just selected. */


operatorList = ["+","-","*","/"]



addButton.addEventListener("click", () => {

  
 if (operatorList.some(elements => displayInputContent.value.includes(elements))){

  result.textContent = equalTo()
  displayInputContent.value = [ equalTo() + "+"]
 }
else 
  displayInputContent.value += ["+"]
  
})


substractButton.addEventListener("click", () => {

  if (operatorList.some(elements => displayInputContent.value.includes(elements))){

    result.textContent = equalTo()
   displayInputContent.value = [ equalTo() + "-"]
   
  }
 else 
   displayInputContent.value += ["-"]
   
 })

multiplyButton.addEventListener("click", () => {

  if (operatorList.some(elements => displayInputContent.value.includes(elements))){

    result.textContent = equalTo()
    displayInputContent.value = [ equalTo() + "*"]
  
   }
  else 
    displayInputContent.value += ["*"]
})

divideButton.addEventListener("click", () => {

  if (operatorList.some(elements => displayInputContent.value.includes(elements))){

    result.textContent = equalTo()
    displayInputContent.value = [ equalTo() + "/"]
    
   }
  else 
    displayInputContent.value += ["/"]
  
})


equalButton.addEventListener("click", () => {
 
 
  result.textContent = equalTo()
  
  return displayInputContent.value = [""] 

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

  
}




console.log(basicButtons())





