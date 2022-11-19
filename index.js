const startBtn = document.querySelector('#Home-div__Button');
const endBtn = document.querySelector('#Questions-div__button');
const resultsSection = document.querySelector('#Results');
const arSection = document.querySelector('#Additional-Recommendations');

startBtn.addEventListener('click', () => {
  document.querySelector('#Questions').scrollIntoView();
});

endBtn.addEventListener('click', () => {
  resultsSection.classList.remove('hide-section');
  arSection.classList.remove('hide-section');
  resultsSection.scrollIntoView();
  
  const inputName = document.querySelector('#Input-Q1').value;
  const inputDay = document.querySelector('#Input-Q2').value;
  
  const password1 = inputDay.concat(inputName);
  
  const passwrdResults = document.querySelector('.Results-div__passwords');
  passwrdResults.innerHTML += `<span>${password1}</span>`;
  passwrdResults.innerHTML += `<span>${password1}</span>`;
  passwrdResults.innerHTML += `<span>${password1}</span>`;
  passwrdResults.innerHTML += `<span>${password1}</span>`;
  passwrdResults.innerHTML += `<span>${password1}</span>`;
});

