document.getElementById('donation').addEventListener('click', function(){
    showSectionById('donate');

    document.getElementById('transaction').classList.add('hidden');
    document.getElementById('donate').classList.remove('hidden');
    
})


document.getElementById('history').addEventListener('click', function(){
    showSectionById('transaction');

    document.getElementById('donate').classList.add('hidden');
    document.getElementById('transaction').classList.remove('hidden');

})


    // Add Transaction History

    // Section Noakhali

    document.getElementById('btn-donate-noakhali').addEventListener('click', function(){
    const inputDonateNoakhali = getInputFieldValueById('input-amount-noakhali');
    const div = document.createElement('div');
    div.innerHTML = `<p class = "p-4 border border-slate-300 text-center mx-10">${inputDonateNoakhali} Taka Donated for flood affected people. Noakhali flood: Residents struggle as shelters reach capacity!`;

   // Should be common function
    
     document.getElementById('transaction-container').appendChild(div);

    })


     // Section Feni

     document.getElementById('btn-donate-feni').addEventListener('click', function(){

        const inputDonateFeni = getInputFieldValueById('input-amount-feni');

        const div = document.createElement('div');
        div.innerHTML = `<p class = "p-4 border border-slate-300 text-center mx-10">${inputDonateFeni} Taka Donated for flood affected people. Feni flood: Death toll rises to 23 in Feni flood!`;
    
     
        // Should be common function
        
         document.getElementById('transaction-container').appendChild(div);
     })


      // Section Comilla

      document.getElementById('btn-donate-comilla').addEventListener('click', function(){

      const inputDonateComilla = getInputFieldValueById('input-amount-comilla');
      const div = document.createElement('div');
      div.innerHTML = `<p class = "p-4 border border-slate-300 text-center mx-10">${inputDonateComilla} Taka Donated for flood affected people. Comilla flood situation improves as Gumti River returns to normal flow.`;
  
   
      // Should be common function
      
       document.getElementById('transaction-container').appendChild(div);

      })


      // Section Lakshmipur
    
        document.getElementById('btn-donate-lakshmipur').addEventListener('click', function(){

            const inputDonateLakshmipur = getInputFieldValueById('input-amount-lakshmipur');

            const div = document.createElement('div');
            div.innerHTML = `<p class = "p-4 border border-slate-300 text-center mx-10">${inputDonateLakshmipur} Taka Donated for flood affected people. Flood situation deteriorates in Lakshmipur.`;
        
         
            // Should be common function
            
             document.getElementById('transaction-container').appendChild(div);
      
        })



       // Section Sylhet

       document.getElementById('btn-donate-sylhet').addEventListener('click', function(){
        
        const inputDonateSylhet = getInputFieldValueById('input-amount-sylhet');

        const div = document.createElement('div');
        div.innerHTML = `<p class = "p-4 border border-slate-300 text-center mx-10">${inputDonateSylhet} Taka Donated for flood affected people. Sylhet flood: water starts receding but shelters overwhelmed.`;
    
     
        // Should be common function
        
         document.getElementById('transaction-container').appendChild(div);

       })



       // Section Quota protests

       document.getElementById('btn-donate-quota').addEventListener('click', function(){

        const inputDonateQuota = getInputFieldValueById('input-amount-quota');

        const div = document.createElement('div');
        div.innerHTML = `<p class = "p-4 border border-slate-300 text-center mx-10">${inputDonateQuota} Taka Donated for serious injured  people in Quota protests movement. What is happening at the quota-reform protests in Bangladesh?.`;
    
     
        // Should be common function
        
         document.getElementById('transaction-container').appendChild(div);

       })

