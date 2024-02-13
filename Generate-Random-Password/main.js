
const SELECT_UPPERCASE = document.getElementById(`upperCaseBtn`);
const SELECT_LOWERCASE = document.getElementById(`lowerCaseBtn`);
const SELECT_NUMBER = document.getElementById(`numbersBtn`);
const SELECT_SYMBOL = document.getElementById(`symbolBtn`);
const DISPLAY_GENERATED_PASSWORD = document.querySelector('#display_password');
const DISPLAY_TOOLTIP = document.querySelector('#tooltip-password');


let includeUppercase = false;
let includeLowercase = false;
let includeNumber = false;
let includeSymbol = false;

function upperChar(){
  if(!includeUppercase){
    includeUppercase = true;
    SELECT_UPPERCASE.textContent = "ON";
    SELECT_UPPERCASE.style.backgroundColor = "#32CD32";
  }else{
    includeUppercase = false;
    SELECT_UPPERCASE.textContent = "OFF";
    SELECT_UPPERCASE.style.backgroundColor = "hsl(0, 100%, 50%)";
  }

}

function lowerChar(){
  if(!includeLowercase){
    includeLowercase = true;
    SELECT_LOWERCASE.textContent = "ON";
    SELECT_LOWERCASE.style.backgroundColor = "#32CD32";
  }else{
    includeLowercase = false;
    SELECT_LOWERCASE.textContent = "OFF";
    SELECT_LOWERCASE.style.backgroundColor = "hsl(0, 100%, 50%)";
  }

}

function numbers(){
  if(!includeNumber){
    includeNumber = true;
    SELECT_NUMBER.textContent = "ON";
    SELECT_NUMBER.style.backgroundColor = "#32CD32";
  }else{
    includeNumber = false;
    SELECT_NUMBER.textContent = "OFF";
    SELECT_NUMBER.style.backgroundColor = "hsl(0, 100%, 50%)";
  }

}

function symbols(){
  if(!includeSymbol){
    includeSymbol = true;
    SELECT_SYMBOL.textContent = "ON";
    SELECT_SYMBOL.style.backgroundColor = "#32CD32";
  }else{
    includeSymbol = false;
    SELECT_SYMBOL.textContent = "OFF";
    SELECT_SYMBOL.style.backgroundColor = "hsl(0, 100%, 50%)";
  }

}

function generate(){
  
  let passwordLegnth = window.prompt(`Enter length of Password`);
  DISPLAY_GENERATED_PASSWORD.id = 'display_password';
  DISPLAY_GENERATED_PASSWORD.textContent = generatePassword(passwordLegnth, includeLowercase, includeUppercase, includeNumber, includeSymbol);
  DISPLAY_GENERATED_PASSWORD.appendChild(DISPLAY_TOOLTIP);
  DISPLAY_TOOLTIP.id = 'tooltip-password';
  DISPLAY_TOOLTIP.textContent = 'Password Generate';
}
  

function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumber, includeSymbol){

  if(passwordLength < 0){
    return window.alert(`Password length must be at lease 1`);
  }
  if(passwordLength == 0){
    return window.alert(`Password length must be at lease 1`);
  }
  if(!includeLowercase && !includeUppercase && !includeNumber && !includeSymbol){
    return window.alert(`Please Select Select Option To Generate`);
  }

  let allowChars = "";
  let password = "";

  const uppercasecaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersChar = "1234567890";
  const symbolChars = "!@#$%^&*()+=-*";

  allowChars += includeLowercase ? uppercasecaseChars.toLowerCase() : "";
  allowChars += includeUppercase ? uppercasecaseChars : "";
  allowChars += includeNumber ? numbersChar : "";
  allowChars += includeSymbol ? symbolChars : "";

  for(let i = 0; i < passwordLength; i++){
    var random = Math.floor(Math.random() * allowChars.length);
    password += allowChars[random];
  }

  return password;
}