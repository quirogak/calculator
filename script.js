const numericButtonContainer = document.querySelector("#numeric-button-container")
const displayInput = document.querySelector("#input-display")

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
removeButton.addEventListener("click", () => {

 return displayInputContent.value = [""]
})




const basicButtons = function(){

  for(let i = 0 ;i <= 9 ; i++){

    const basicButtons = document.createElement("button");
    numericButtonContainer.insertBefore(basicButtons,decimalButton);
    basicButtons.setAttribute('id','basic-buttons' + i)
    basicButtons.setAttribute('style', 'background-color:rgb(109, 109, 109);')
    basicButtons.textContent = i;

    basicButtons.addEventListener("click", () => {

     
     return displayInputContent.value += [i];
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

const decimalButton = document.createElement("button");
numericButtonContainer.appendChild(decimalButton);
decimalButton.setAttribute('id','decimal-button')
decimalButton.textContent = ",";
decimalButton.addEventListener("click", () => {

  return displayInputContent.value += [","];
})


const displayInputContent = document.createElement("input")
displayInput.appendChild(displayInputContent)
displayInputContent.setAttribute ("id" , "display-input-content")


const clearNumbers = function(){

}



const displayNumbers = function() {

   let storage = document.getElementById("display-input-content").value;

   return storage

}


console.log(basicButtons())

