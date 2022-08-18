


function getInputValueById(inputField){
    const inputValue=document.getElementById(inputField);
    
    const inputString=inputValue.value;
    const inputInNumber= parseFloat(inputString);
    inputValue.value='';
return inputInNumber;
}

function getElementValueById(elementId){
    const element= document.getElementById(elementId);
    const elementString=element.innerText;
    const value=parseFloat(elementString);
    return value;

}
function setTextElementValueById(elementId,newValue){
    const textElement=document.getElementById(elementId);
    textElement.innerText=newValue;

}

