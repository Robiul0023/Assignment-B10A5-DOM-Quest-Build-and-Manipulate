
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

  alert("Congrats! You have donated for humankinds.");


  const inputDonateNoakhali = getInputFieldValueById('input-amount-noakhali');
  const donateAmountNoakhali = getTextFieldValueById('donate-amount-noakhali');
  const newDonateAmountNoakhali = inputDonateNoakhali + donateAmountNoakhali;
  
  document.getElementById('donate-amount-noakhali').innerText = newDonateAmountNoakhali;

  const balanceAmount = getTextFieldValueById('balance');
  const newBalance = balanceAmount - newDonateAmount;

   document.getElementById('balance').innerText = newBalance;
   
   

});


// Section Feni

document.getElementById('btn-donate-feni').addEventListener('click', function(event){
    event.preventDefault();

    alert("Congrats! You have donated for humankinds.");
  
    const inputDonateFeni = getInputFieldValueById('input-amount-feni');
    const donateAmountFeni = getTextFieldValueById('donate-amount-Feni');
    const newDonateAmountFeni = inputDonateFeni + donateAmountFeni;
    
    document.getElementById('donate-amount-noakhali').innerText = newDonateAmountFeni;
  
    const balanceAmount = getTextFieldValueById('balance');
    const newBalance = balanceAmount - newDonateAmountFeni;
  
     document.getElementById('balance').innerText = newBalance;
  
  });

    // Section Comilla
  
  document.getElementById('btn-donate-comilla').addEventListener('click', function(event){
    event.preventDefault();

    alert("Congrats! You have donated for humankinds.");
  
    const inputDonateComilla = getInputFieldValueById('input-amount-comilla');
    const donateAmountComilla = getTextFieldValueById('donate-amount-comilla');
    const newDonateAmountComilla = inputDonateComilla + donateAmountComilla;
    
    document.getElementById('donate-amount-comilla').innerText = newDonateAmountComilla;
  
    const balanceAmount = getTextFieldValueById('balance');
    const newBalance = balanceAmount - newDonateAmountComilla;
  
     document.getElementById('balance').innerText = newBalance;
  
  
  });

  
   // Section Lakshmipur

  document.getElementById('btn-donate-lakshmipur').addEventListener('click', function(event){
    event.preventDefault();

    alert("Congrats! You have donated for humankinds.");
  
    const inputDonateLakshmipur = getInputFieldValueById('input-amount-lakshmipur');
    const donateAmountLakshmipur = getTextFieldValueById('donate-amount-lakshmipur');
    const newDonateAmountLakshmipur = inputDonateLakshmipur + donateAmountLakshmipur;
    
    document.getElementById('donate-amount-lakshmipur').innerText = newDonateAmountLakshmipur;
  
    const balanceAmount = getTextFieldValueById('balance');
    const newBalance = balanceAmount - newDonateAmountLakshmipur;
  
     document.getElementById('balance').innerText = newBalance;
  
  });



  // Section Sylhet

  document.getElementById('btn-donate-sylhet').addEventListener('click', function(event){
    event.preventDefault();

    alert("Congrats! You have donated for humankinds.");
  
    const inputDonateSylhet = getInputFieldValueById('input-amount-sylhet');
    const donateAmountSylhet = getTextFieldValueById('donate-amount-sylhet');
    const newDonateAmountSylhet = inputDonateSylhet + donateAmountSylhet;
    
    document.getElementById('donate-amount-sylhet').innerText = newDonateAmountSylhet;
  
    const balanceAmount = getTextFieldValueById('balance');
    const newBalance = balanceAmount - newDonateAmountSylhet;
  
     document.getElementById('balance').innerText = newBalance;
  
  
  });

  // Quota protests
  document.getElementById('btn-donate-quota').addEventListener('click', function(event){
    event.preventDefault();

    alert("Congrats! You have donated for humankinds.");
  
    const inputDonateQuota = getInputFieldValueById('input-amount-quota');
    const donateAmountQuota = getTextFieldValueById('donate-amount-sylhet');
    const newDonateAmountQuota = inputDonateQuota + donateAmountQuota;
    
    document.getElementById('donate-amount-sylhet').innerText = newDonateAmountQuota;
  
    const balanceAmount = getTextFieldValueById('balance');
    const newBalance = balanceAmount - newDonateAmountQuota;
  
     document.getElementById('balance').innerText = newBalance;
  
  
  });
  





    