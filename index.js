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
  const inputNameArr = inputName.split('');
  const inputDay = document.querySelector('#Input-Q2').value.replace(regex, '');
  const inputDayArr = inputDay.split('');
  const inputYear = document.querySelector('#Input-Q3').value.replace(regex, '');
  const inputYearArr = inputYear.split('');
  const inputNickname = document.querySelector('#Input-Q4').value.replace(regex, '');
  const inputNicknameArr = inputNickname.split('');
  const inputPet = document.querySelector('#Input-Q5').value.replace(regex, '');
  const inputPetArr = inputPet.split('');
  const inputRelative = document.querySelector('#Input-Q6').value.replace(regex, '');
  const inputRelativeArr = inputRelative.split('');
  const inputCouple = document.querySelector('#Input-Q7').value.replace(regex, '');
  const inputCoupleArr = inputCouple.split('');
  const inputPlace = document.querySelector('#Input-Q8').value.replace(regex, '');
  const inputPlaceArr = inputPlace.split('');
  const inputAnimal = document.querySelector('#Input-Q9').value.replace(regex, '');
  const inputAnimalArr = inputAnimal.split('');
  const inputFood = document.querySelector('#Input-Q10').value.replace(regex, '');
  const inputFoodArr = inputFood.split('');
  const inputSon = document.querySelector('#Input-Q11').value.replace(regex, '');
  const inputSonArr = inputSon.split('');
  const inputCharacter = document.querySelector('#Input-Q12').value.replace(regex, '');
  const inputCharacterArr = inputCharacter.split('');
  const inputTeam = document.querySelector('#Input-Q13').value.replace(regex, '');
  const inputTeamArr = inputTeam.split('');
  const inputBirthPlace = document.querySelector('#Input-Q14').value.replace(regex, '');
  const inputBirthPlaceArr = inputBirthPlace.split('');
  const inputZodiac = document.querySelector('#Input-Q15').value.replace(regex, '');
  const inputZodiacArr = inputZodiac.split('');

  let passwords = [];

  passwords[0] = inputName.concat(inputDay);
  passwords[1] = inputName.concat(inputYear);
  passwords[2] = inputNickname.concat(inputDay);
  passwords[3] = inputNickname.concat(inputYear);
  passwords[4] = inputPet.concat(inputDay);
  passwords[5] = inputPet.concat(inputYear);
  passwords[6] = inputRelative.concat(inputDay);
  passwords[7] = inputRelative.concat(inputYear);
  passwords[8] = inputCouple.concat(inputDay);
  passwords[9] = inputCouple.concat(inputYear);
  passwords[10] = inputPlace.concat(inputDay);
  passwords[11] = inputPlace.concat(inputYear);
  passwords[12] = inputAnimal.concat(inputDay);
  passwords[13] = inputAnimal.concat(inputYear);
  passwords[14] = inputFood.concat(inputDay);
  passwords[15] = inputFood.concat(inputYear);
  passwords[16] = inputSon.concat(inputDay);
  passwords[17] = inputSon.concat(inputYear);
  passwords[18] = inputCharacter.concat(inputDay);
  passwords[19] = inputCharacter.concat(inputYear);
  passwords[20] = inputTeam.concat(inputDay);
  passwords[21] = inputTeam.concat(inputYear);
  passwords[22] = inputBirthPlace.concat(inputDay);
  passwords[23] = inputBirthPlace.concat(inputYear);
  passwords[24] = inputZodiac.concat(inputDay);
  passwords[25] = inputZodiac.concat(inputYear);
  passwords[26] = inputNameArr[0].concat(inputNameArr[1]).concat(inputNameArr[2]).concat(inputNameArr[3]).concat(inputDay);
  passwords[27] = inputNameArr[0].concat(inputNameArr[1]).concat(inputNameArr[2]).concat(inputNameArr[3]).concat(inputYear);
  passwords[28] = inputNameArr[0].concat(inputNameArr[1]).concat(inputNameArr[2]).concat(inputNameArr[3]).concat(inputYearArr[0]).concat(inputYearArr[1]);
  passwords[29] = inputNameArr[0].concat(inputNameArr[1]).concat(inputNameArr[2]).concat(inputNameArr[3]).concat(inputYearArr[2]).concat(inputYearArr[3]);
  
  console.log(passwords);
  
  const passwrdResults = document.querySelector('.Results-div__passwords');
  
  passwords.map((password) => {
    passwrdResults.innerHTML += `<span>${password}</span>`;
  });
});
