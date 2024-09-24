// get the value of input function

function getInputValueById(id){
  return parseFloat(document.getElementById(id).value);
  
}


// get the id of the function

function getInputId(id){
 return document.getElementById(id);
}



// get the value of input function

function donationHandleByCommonFunction(button,input,initialAmount,sectionName){
  button.addEventListener('click',function(){
  
    const inputValue = getInputValueById(input.id);
    const total = getInputId('total-amount');
    const totalNumber = parseFloat(total.innerText);


    if(inputValue <= 0 || isNaN(inputValue) || inputValue > totalNumber){
      alert('Invalid Input!')
      return;
    }
    
    
    const previousAmountValue = parseFloat(initialAmount.innerText);
    const newTotal = inputValue + previousAmountValue;
    initialAmount.innerText = newTotal;

    
    
    const final = totalNumber - inputValue;
    total.innerText = final;
    
    const historyList = document.getElementById('history-list');

    const div = document.createElement('div');
    div.className = "w-11/12 mx-auto bg-white p-3 rounded-md mb-4 border-2 border-slate-500"
    div.innerHTML =`
    <h3 class="text-xl p-2">${inputValue} Taka is ${sectionName}</h3>
    <p class ="text-slate-500 p-2 bg-white">Date: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
      </p>
     `
    historyList.insertBefore(div,historyList.firstChild);

    // showing modal
    document.getElementById("donation-modal").showModal();

  })
}



