
// Button Section
 const btnDonation = document.getElementById('donation');
 btnDonation.addEventListener('click',function(){
  btnDonation.style.backgroundColor = "lime";
  

 const historyBtn =  document.getElementById('history');
 historyBtn.style.backgroundColor = 'white';

 });


 const btnHistory = document.getElementById('history');
 btnHistory.addEventListener('click', function(){
 btnHistory.style.backgroundColor = 'lime';

 const donationBtn = document.getElementById('donation');
  donationBtn.style.backgroundColor = 'white';
    

});



// Section Noakhali
 
document.getElementById('btn-donate-noakhali').addEventListener('click', function(event){
  event.preventDefault();

const inputDonateNoakhali = getInputFieldValueById('input-amount-noakhali');

   // Validation for Alert When input NaN Value

  if(isNaN(inputDonateNoakhali)){
    alert('Failed to donate money');
    return;
}

  const donateAmountNoakhali = getTextFieldValueById('donate-amount-noakhali');
  const newDonateAmountNoakhali = inputDonateNoakhali + donateAmountNoakhali;
  
  document.getElementById('donate-amount-noakhali').innerText = newDonateAmountNoakhali;

  const balanceAmount = getTextFieldValueById('balance');
  const newBalance = balanceAmount - newDonateAmountNoakhali;

   document.getElementById('balance').innerText = newBalance;
   
   // Validation for Alert If have no Sufficient Amount

   if(inputDonateNoakhali > balanceAmount){

    alert('You have no sufficient amount  for donation');
    return;

  }  

  
  // Validation for Alert When Donated Successfully

   alert('Congrats! You have donated suceessfully for humankinds.');

  });


// Section Feni

document.getElementById('btn-donate-feni').addEventListener('click', function(event){
    event.preventDefault();

    const inputDonateFeni = getInputFieldValueById('input-amount-feni');

     // Validation for Alert When input NaN Value

    if(isNaN(inputDonateFeni)){
      alert('Failed to donate money');
      return;
  }
  

    const donateAmountFeni = getTextFieldValueById('donate-amount-feni');
    const newDonateAmountFeni = inputDonateFeni + donateAmountFeni;
    
    document.getElementById('donate-amount-feni').innerText = newDonateAmountFeni;
  
    const balanceAmount = getTextFieldValueById('balance');
    const newBalance = balanceAmount - newDonateAmountFeni;
  
     document.getElementById('balance').innerText = newBalance;

     // Validation for Alert If have no Sufficient Amount

     if(inputDonateFeni > balanceAmount){

      alert('You have no sufficient amount  for donation');
      return;
   } 

    // Validation for Alert When Donated Successfully

     alert("Congrats! You have donated suceessfully for humankinds.");
  
  });

    // Section Comilla
  
  document.getElementById('btn-donate-comilla').addEventListener('click', function(event){
    event.preventDefault();

    const inputDonateComilla = getInputFieldValueById('input-amount-comilla');

     // Validation for Alert When input NaN Value
    if(isNaN(inputDonateComilla)){
      alert('Failed to donate money');
      return;
  }
  
    const donateAmountComilla = getTextFieldValueById('donate-amount-comilla');
    const newDonateAmountComilla = inputDonateComilla + donateAmountComilla;
    
    document.getElementById('donate-amount-comilla').innerText = newDonateAmountComilla;
  
    const balanceAmount = getTextFieldValueById('balance');
    const newBalance = balanceAmount - newDonateAmountComilla;
  
     document.getElementById('balance').innerText = newBalance;

      // Validation for Alert If have no Sufficient Amount

      if(inputDonateComilla > balanceAmount){

        alert('You have no sufficient amount  for donation');
        return;
     } 
  
      // Validation for Alert When Donated Successfully
  
       alert("Congrats! You have donated suceessfully for humankinds.");
  
  
  });

  
   // Section Lakshmipur

  document.getElementById('btn-donate-lakshmipur').addEventListener('click', function(event){
    event.preventDefault();

  
    const inputDonateLakshmipur = getInputFieldValueById('input-amount-lakshmipur');

   // Validation for Alert When input NaN Value

    if(isNaN(inputDonateLakshmipur)){
      alert('Failed to donate money');
      return;
  }
  
    const donateAmountLakshmipur = getTextFieldValueById('donate-amount-lakshmipur');
    const newDonateAmountLakshmipur = inputDonateLakshmipur + donateAmountLakshmipur;
    
    document.getElementById('donate-amount-lakshmipur').innerText = newDonateAmountLakshmipur;
  
    const balanceAmount = getTextFieldValueById('balance');
    const newBalance = balanceAmount - newDonateAmountLakshmipur;
  
     document.getElementById('balance').innerText = newBalance;

     // Validation for Alert If have no Sufficient Amount

     if(inputDonateLakshmipur > balanceAmount){

      alert('You have no sufficient amount  for donation');
      return;
   } 

    // Validation for Alert When Donated Successfully

     alert("Congrats! You have donated suceessfully for humankinds.");
  
   });



  // Section Sylhet

  document.getElementById('btn-donate-sylhet').addEventListener('click', function(event){
    event.preventDefault();

    const inputDonateSylhet = getInputFieldValueById('input-amount-sylhet');

    // Validation for Alert When input Value

    if(isNaN(inputDonateSylhet)){
      alert('Failed to donate money');
      return;
  }

    const donateAmountSylhet = getTextFieldValueById('donate-amount-sylhet');


    const newDonateAmountSylhet = inputDonateSylhet + donateAmountSylhet;
    
    document.getElementById('donate-amount-sylhet').innerText = newDonateAmountSylhet;
  
    const balanceAmount = getTextFieldValueById('balance');
    const newBalance = balanceAmount - newDonateAmountSylhet;
  
     document.getElementById('balance').innerText = newBalance;

    // Validation for Alert If have no Sufficient Amount

     if(inputDonateSylhet  > balanceAmount){

      alert('You have no sufficient amount  for donation');
      return;
   } 

    // Validation for Alert When Donated Successfully

     alert("Congrats! You have donated suceessfully for humankinds.");
  
  
  });

  // Section Quota protests
  document.getElementById('btn-donate-quota').addEventListener('click', function(event){
    event.preventDefault();

    const inputDonateQuota = getInputFieldValueById('input-amount-quota');

    // Validation for Alert When input NaN Value
    if(isNaN(inputDonateQuota)){
      alert('Failed to donate money');
      return;
  }
  

    const donateAmountQuota = getTextFieldValueById('donate-amount-quota');
    const newDonateAmountQuota = inputDonateQuota + donateAmountQuota;
    
    document.getElementById('donate-amount-quota').innerText = newDonateAmountQuota;
  
    const balanceAmount = getTextFieldValueById('balance');
    const newBalance = balanceAmount - newDonateAmountQuota;
  
     document.getElementById('balance').innerText = newBalance;

      // Validation for Alert If have no Sufficient Amount

      if(inputDonateQuota  > balanceAmount){

        alert('You have no sufficient amount  for donation');
        return;
     } 
  
      // Validation for Alert When Donated Successfully
  
       alert("Congrats! You have donated suceessfully for humankinds.");
  
  
  });
  





    