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
  const inputYear = document.querySelector('#Input-Q3').value;
  const inputNickname = document.querySelector('#Input-Q4').value;
  const inputPet = document.querySelector('#Input-Q5').value;
  const inputRelative = document.querySelector('#Input-Q6').value;
  const inputCouple = document.querySelector('#Input-Q7').value;
  const inputPlace = document.querySelector('#Input-Q8').value;
  const inputAnimal = document.querySelector('#Input-Q9').value;
  const inputFood = document.querySelector('#Input-Q10').value;
  const inputSon = document.querySelector('#Input-Q11').value;
  const inputCharacter = document.querySelector('#Input-Q12').value;
  const inputTeam = document.querySelector('#Input-Q13').value;
  const inputBirthPlace = document.querySelector('#Input-Q14').value;
  const inputZodiac = document.querySelector('#Input-Q15').value;
  
  const password1 = inputName.concat(inputDay);
  const password2 = inputName.concat(inputYear);
  const password3 = inputNickname.concat(inputDay);
  const password4 = inputNickname.concat(inputYear);
  const password5 = inputPet.concat(inputDay);
  const password6 = inputPet.concat(inputYear);
  const password7 = inputRelative.concat(inputDay);
  const password8 = inputRelative.concat(inputYear);
  const password9 = inputCouple.concat(inputDay);
  const password10 = inputCouple.concat(inputYear);
  const password11 = inputPlace.concat(inputDay);
  const password12 = inputPlace.concat(inputYear);
  const password13 = inputAnimal.concat(inputDay);
  const password14 = inputAnimal.concat(inputYear);
  const password15 = inputFood.concat(inputDay);
  const password16 = inputFood.concat(inputYear);
  const password17 = inputSon.concat(inputDay);
  const password18 = inputSon.concat(inputYear);
  const password19 = inputCharacter.concat(inputDay);
  const password20 = inputCharacter.concat(inputYear);
  const password21 = inputTeam.concat(inputDay);
  const password22 = inputTeam.concat(inputYear);
  const password23 = inputBirthPlace.concat(inputDay);
  const password24 = inputBirthPlace.concat(inputYear);
  const password25 = inputZodiac.concat(inputDay);
  const password26 = inputZodiac.concat(inputYear);
  const password27 = inputPet.concat(inputDay);
  const password28 = inputPet.concat(inputYear);

  const passwrdResults = document.querySelector('.Results-div__passwords');

  passwrdResults.innerHTML += `<span>${password1}</span>`;
  passwrdResults.innerHTML += `<span>${password2}</span>`;
  passwrdResults.innerHTML += `<span>${password3}</span>`;
  passwrdResults.innerHTML += `<span>${password4}</span>`;
  passwrdResults.innerHTML += `<span>${password5}</span>`;
  passwrdResults.innerHTML += `<span>${password6}</span>`;
  passwrdResults.innerHTML += `<span>${password7}</span>`;
  passwrdResults.innerHTML += `<span>${password8}</span>`;
  passwrdResults.innerHTML += `<span>${password9}</span>`;
  passwrdResults.innerHTML += `<span>${password10}</span>`;
  passwrdResults.innerHTML += `<span>${password11}</span>`;
  passwrdResults.innerHTML += `<span>${password12}</span>`;
  passwrdResults.innerHTML += `<span>${password13}</span>`;
  passwrdResults.innerHTML += `<span>${password14}</span>`;
  passwrdResults.innerHTML += `<span>${password15}</span>`;
  passwrdResults.innerHTML += `<span>${password16}</span>`;
  passwrdResults.innerHTML += `<span>${password17}</span>`;
  passwrdResults.innerHTML += `<span>${password18}</span>`;
  passwrdResults.innerHTML += `<span>${password19}</span>`;
  passwrdResults.innerHTML += `<span>${password20}</span>`;
  passwrdResults.innerHTML += `<span>${password21}</span>`;
  passwrdResults.innerHTML += `<span>${password22}</span>`;
  passwrdResults.innerHTML += `<span>${password23}</span>`;
  passwrdResults.innerHTML += `<span>${password24}</span>`;
  passwrdResults.innerHTML += `<span>${password25}</span>`;
  passwrdResults.innerHTML += `<span>${password26}</span>`;
  passwrdResults.innerHTML += `<span>${password27}</span>`;
  passwrdResults.innerHTML += `<span>${password28}</span>`;
  passwrdResults.innerHTML += `<span>${password29}</span>`;
  passwrdResults.innerHTML += `<span>${password30}</span>`;
});

