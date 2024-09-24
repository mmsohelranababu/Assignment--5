// get the value of input function

function getInputValueById(id){
  return parseFloat(document.getElementById(id).value);
  
}


// get the id 

function getInputId(id){
 return document.getElementById(id);
}


// general function

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

// get all the section

const sections = document.querySelectorAll('.donate-section');

for(const section of sections){
  const button = section.querySelector('.donate-btn');
  const input = section.querySelector('.donate-input');
  const initialAmount = section.querySelector('.initial-amount');
  const sectionName = section.querySelector('h3').innerText;

  donationHandleByCommonFunction(button,input,initialAmount,sectionName);
}


// button functionality

const documentTab = document.getElementById('donation-btn');
const historyTab = document.getElementById('history-btn');
historyTab.addEventListener('click',function(){
  documentTab.classList.remove('bg-secondary');
  historyTab.classList.add('bg-secondary');

  document.getElementById('main-content').classList.add('hidden');
  document.getElementById('history-section').classList.remove('hidden');

})

documentTab.addEventListener('click',function(){
  documentTab.classList.add('bg-secondary');
  historyTab.classList.remove('bg-secondary');

  document.getElementById('main-content').classList.remove('hidden');
  document.getElementById('history-section').classList.add('hidden');
})