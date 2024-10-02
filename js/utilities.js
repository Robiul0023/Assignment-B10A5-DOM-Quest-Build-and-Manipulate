
/* 

common function 


*/

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}



function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function showSectionById(id){
    // Hide all the sections
    document.getElementById(id).classList.add('hidden');

    // Show the section with the  provide id as parameted
    document.getElementById(id).classList.remove('hidden');
}