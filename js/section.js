const sections = document.querySelectorAll('.donate-section');

for(const section of sections){
  const button = section.querySelector('.donate-btn');
  const input = section.querySelector('.donate-input');
  const initialAmount = section.querySelector('.initial-amount');
  const sectionName = section.querySelector('h3').innerText;

  donationHandleByCommonFunction(button,input,initialAmount,sectionName);
}