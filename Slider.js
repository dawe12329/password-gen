import {generateRandomPass} from './GeneratePass.js';
import { includeLowerCase } from './LowerCase.js';
import { includeNumbers } from './Numbers.js';
import { includeSymbols } from './Symbols.js';
import {includeUpperCase} from './Uppercase.js';
 
const sliderProps = {
  fill: '#0B1EDF',
  background: 'rgba(255, 255, 255, 0.214)',
};
const checkboxes = document.querySelectorAll('.setting input[type="checkbox"]');
console.log(checkboxes)
const generatedPassSlot = document.getElementById('result');
const generateButton = document.getElementById('generate')
const slider = document.querySelector('#slider');

function updateSliderColor() {
  const minValue = parseInt(slider.min);
  const maxValue = parseInt(slider.value);
  const selectedPart = ((maxValue - minValue) / (slider.max - minValue)) * 100;
  slider.style.background = `linear-gradient(to right, ${sliderProps.fill} ${selectedPart}%, ${sliderProps.background} ${selectedPart}%)`;
  
};

generateButton.addEventListener('click', generateRandomPass)
slider.addEventListener('input', updateSliderColor);
window.onload = updateSliderColor();
checkboxes[0].addEventListener("change", includeUpperCase);
checkboxes[1].addEventListener("change", includeLowerCase);
checkboxes[2].addEventListener("change", includeNumbers);
checkboxes[3].addEventListener("change", includeSymbols);



