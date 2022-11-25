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
  passwords[2] = inputNameArr[0].concat(inputNameArr[1]).concat(inputNameArr[2]).concat(inputNameArr[3]).concat(inputDay);
  passwords[3] = inputNameArr[0].concat(inputNameArr[1]).concat(inputNameArr[2]).concat(inputNameArr[3]).concat(inputYear);
  passwords[4] = inputNameArr[0].concat(inputNameArr[1]).concat(inputNameArr[2]).concat(inputNameArr[3]).concat(inputYearArr[0]).concat(inputYearArr[1]);
  passwords[5] = inputNameArr[0].concat(inputNameArr[1]).concat(inputNameArr[2]).concat(inputNameArr[3]).concat(inputYearArr[2]).concat(inputYearArr[3]);
  passwords[6] = inputNickname.concat(inputDay);
  passwords[7] = inputNickname.concat(inputYear);
  passwords[8] = inputNickname.concat(inputYearArr[0]).concat(inputYearArr[1]);
  passwords[9] = inputNickname.concat(inputYearArr[2]).concat(inputYearArr[3]);
  passwords[10] = inputPet.concat(inputDay);
  passwords[11] = inputPet.concat(inputYear);
  passwords[12] = inputPet.concat(inputYearArr[0]).concat(inputYearArr[1]);
  passwords[13] = inputPet.concat(inputYearArr[2]).concat(inputYearArr[3]);
  passwords[14] = inputPetArr[0].concat(inputPetArr[1]).concat(inputPetArr[2]).concat(inputPetArr[3]).concat(inputDay);
  passwords[15] = inputPetArr[0].concat(inputPetArr[1]).concat(inputPetArr[2]).concat(inputPetArr[3]).concat(inputYear);
  passwords[16] = inputRelative.concat(inputDay);
  passwords[17] = inputRelative.concat(inputYear);
  passwords[18] = inputRelativeArr[0].concat(inputRelativeArr[1]).concat(inputRelativeArr[2]).concat(inputRelativeArr[3]).concat(inputDay);
  passwords[19] = inputRelativeArr[0].concat(inputRelativeArr[1]).concat(inputRelativeArr[2]).concat(inputRelativeArr[3]).concat(inputYear);
  passwords[20] = inputRelativeArr[0].concat(inputRelativeArr[1]).concat(inputRelativeArr[2]).concat(inputRelativeArr[3]).concat(inputYearArr[0]).concat(inputYearArr[1]);
  passwords[21] = inputRelativeArr[0].concat(inputRelativeArr[1]).concat(inputRelativeArr[2]).concat(inputRelativeArr[3]).concat(inputYearArr[2]).concat(inputYearArr[3]);
  passwords[22] = inputCouple.concat(inputDay);
  passwords[23] = inputCouple.concat(inputYear);
  passwords[24] = inputCoupleArr[0].concat(inputCoupleArr[1]).concat(inputCoupleArr[2]).concat(inputCoupleArr[3]).concat(inputDay);
  passwords[25] = inputCoupleArr[0].concat(inputCoupleArr[1]).concat(inputCoupleArr[2]).concat(inputCoupleArr[3]).concat(inputYear);
  passwords[26] = inputCoupleArr[0].concat(inputCoupleArr[1]).concat(inputCoupleArr[2]).concat(inputCoupleArr[3]).concat(inputYearArr[0]).concat(inputYearArr[1]);
  passwords[27] = inputCoupleArr[0].concat(inputCoupleArr[1]).concat(inputCoupleArr[2]).concat(inputCoupleArr[3]).concat(inputYearArr[2]).concat(inputYearArr[3]);
  passwords[28] = inputPlace.concat(inputDay);
  passwords[29] = inputPlace.concat(inputYear);
  passwords[30] = inputAnimal.concat(inputDay);
  passwords[31] = inputAnimal.concat(inputYear);
  passwords[32] = inputAnimal.concat(inputYearArr[0]).concat(inputYearArr[1]);
  passwords[33] = inputAnimal.concat(inputYearArr[2]).concat(inputYearArr[3]);
  passwords[34] = inputFood.concat(inputDay);
  passwords[35] = inputFood.concat(inputYear);
  passwords[36] = inputFood.concat(inputYearArr[0]).concat(inputYearArr[1]);
  passwords[37] = inputFood.concat(inputYearArr[2]).concat(inputYearArr[3]);
  passwords[38] = inputSon.concat(inputDay);
  passwords[39] = inputSon.concat(inputYear);
  passwords[40] = inputSonArr[0].concat(inputSonArr[1]).concat(inputSonArr[2]).concat(inputSonArr[3]).concat(inputDay);
  passwords[41] = inputSonArr[0].concat(inputSonArr[1]).concat(inputSonArr[2]).concat(inputSonArr[3]).concat(inputYear);
  passwords[42] = inputSonArr[0].concat(inputSonArr[1]).concat(inputSonArr[2]).concat(inputSonArr[3]).concat(inputYearArr[0]).concat(inputYearArr[1]);
  passwords[43] = inputSonArr[0].concat(inputSonArr[1]).concat(inputSonArr[2]).concat(inputSonArr[3]).concat(inputYearArr[2]).concat(inputYearArr[3]);
  passwords[44] = inputCharacter.concat(inputDay);
  passwords[45] = inputCharacter.concat(inputYear);
  passwords[46] = inputCharacter.concat(inputYearArr[0]).concat(inputYearArr[1]);
  passwords[47] = inputCharacter.concat(inputYearArr[2]).concat(inputYearArr[3]);
  passwords[48] = inputTeam.concat(inputDay);
  passwords[49] = inputTeam.concat(inputYear);
  passwords[50] = inputTeam.concat(inputYearArr[0]).concat(inputYearArr[1]);
  passwords[51] = inputTeam.concat(inputYearArr[2]).concat(inputYearArr[3]);
  passwords[52] = inputBirthPlace.concat(inputDay);
  passwords[53] = inputBirthPlace.concat(inputYear);
  passwords[54] = inputBirthPlace.concat(inputYearArr[0]).concat(inputYearArr[1]);
  passwords[55] = inputBirthPlace.concat(inputYearArr[2]).concat(inputYearArr[3]);
  passwords[56] = inputZodiac.concat(inputDay);
  passwords[57] = inputZodiac.concat(inputYear);
  passwords[58] = inputZodiac.concat(inputYearArr[0]).concat(inputYearArr[1]);
  passwords[59] = inputZodiac.concat(inputYearArr[2]).concat(inputYearArr[3]);
  passwords[60] = inputCouple.concat('y').concat(inputName);
  passwords[61] = inputCouple.concat('y').concat(inputName).concat(inputYearArr[0]).concat(inputYearArr[1]);
  passwords[62] = inputCouple.concat('y').concat(inputName).concat(inputYearArr[2]).concat(inputYearArr[3]);
  passwords[63] = inputCouple.concat('y').concat(inputName).concat(inputYear);
  passwords[63] = inputCouple.concat('y').concat(inputName).concat(inputDay);
  
  console.log(passwords);
  
  const passwrdResults = document.querySelector('.Results-div__passwords');
  
  passwords.map((password) => {
    passwrdResults.innerHTML += `<span>${password}</span>`;
  });
});
