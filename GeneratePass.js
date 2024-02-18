import { includeUpperCase } from './Uppercase.js';
import { includeLowerCase } from './LowerCase.js';
import { includeSymbols } from './Symbols.js';
import { includeNumbers } from './Numbers.js';


export function generateRandomPass() {
  let allCharacters = '';
  let generatedPass = '';
  
  if (includeUpperCase) {
    allCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (includeLowerCase) {
    allCharacters += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (!includeSymbols) {
    allCharacters += '!@#$%^&*()';
  }
  if (includeNumbers) {
    allCharacters += '1234567890';
  }
  else {
    alert ('Please adjust password criteria')
    return;
  }

  const passwordLength = slider.value;
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    generatedPass += allCharacters[randomIndex];
  }

  const generatedPassSlot = document.getElementById('result');
  generatedPassSlot.innerHTML = generatedPass;
}
