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