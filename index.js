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

  const regex = /\s+/g;

  const inputName = document.querySelector('#Input-Q1').value.replace(regex, '');
  const inputDay = document.querySelector('#Input-Q2').value.replace(regex, '');
  const inputYear = document.querySelector('#Input-Q3').value.replace(regex, '');
  const inputNickname = document.querySelector('#Input-Q4').value.replace(regex, '');
  const inputPet = document.querySelector('#Input-Q5').value.replace(regex, '');
  const inputRelative = document.querySelector('#Input-Q6').value.replace(regex, '');
  const inputCouple = document.querySelector('#Input-Q7').value.replace(regex, '');
  const inputPlace = document.querySelector('#Input-Q8').value.replace(regex, '');
  const inputAnimal = document.querySelector('#Input-Q9').value.replace(regex, '');
  const inputFood = document.querySelector('#Input-Q10').value.replace(regex, '');
  const inputSon = document.querySelector('#Input-Q11').value.replace(regex, '');
  const inputCharacter = document.querySelector('#Input-Q12').value.replace(regex, '');
  const inputTeam = document.querySelector('#Input-Q13').value.replace(regex, '');
  const inputBirthPlace = document.querySelector('#Input-Q14').value.replace(regex, '');
  const inputZodiac = document.querySelector('#Input-Q15').value.replace(regex, '');

  let passwords = [];

  passwords[0] = inputPet.concat(inputYear);
  passwords[1] = inputName.concat(inputDay);
  passwords[2] = inputName.concat(inputYear);
  passwords[3] = inputNickname.concat(inputDay);
  passwords[4] = inputNickname.concat(inputYear);
  passwords[5] = inputPet.concat(inputDay);
  passwords[6] = inputPet.concat(inputYear);
  passwords[7] = inputRelative.concat(inputDay);
  passwords[8] = inputRelative.concat(inputYear);
  passwords[9] = inputCouple.concat(inputDay);
  passwords[10] = inputCouple.concat(inputYear);
  passwords[11] = inputPlace.concat(inputDay);
  passwords[12] = inputPlace.concat(inputYear);
  passwords[13] = inputAnimal.concat(inputDay);
  passwords[14] = inputAnimal.concat(inputYear);
  passwords[15] = inputFood.concat(inputDay);
  passwords[16] = inputFood.concat(inputYear);
  passwords[17] = inputSon.concat(inputDay);
  passwords[18] = inputSon.concat(inputYear);
  passwords[19] = inputCharacter.concat(inputDay);
  passwords[20] = inputCharacter.concat(inputYear);
  passwords[21] = inputTeam.concat(inputDay);
  passwords[22] = inputTeam.concat(inputYear);
  passwords[23] = inputBirthPlace.concat(inputDay);
  passwords[24] = inputBirthPlace.concat(inputYear);
  passwords[25] = inputZodiac.concat(inputDay);
  passwords[26] = inputZodiac.concat(inputYear);
  passwords[27] = inputPet.concat(inputDay);

  console.log(passwords);

  const passwrdResults = document.querySelector('.Results-div__passwords');

  passwords.map((password) => {
    passwrdResults.innerHTML += `<span>${password}</span>`;
  });
});
