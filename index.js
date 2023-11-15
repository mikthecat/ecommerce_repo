console.log("Hello World!");


const register = () => {
  let txtModalEmail = document.querySelector('#txtModalEmail')
  let txtModalPassword = document.querySelector('#txtModalPassword')
  let txtModalConfirmPassword = document.querySelector('#txtModalConfirmPassword')
  let txtModalName = document.querySelector('#txtModalName')
  const genderRadios = document.getElementsByName('radioGender');
  const selectElement = document.querySelector('#modalSelect');
  const txtArea = document.querySelector('#modalTextArea')
  const modalDate = document.querySelector('#modalDate')

  let selectedGender;
  for (const radio of genderRadios) {
    if (radio.checked) {
      selectedGender = radio.value;
      break;
    }
  }

  
const selectedOption = selectElement.options[selectElement.selectedIndex];


const selectedValue = selectedOption.value;

  let user = {
      email: txtModalEmail.value,
      name: txtModalName.value,
      password: txtModalPassword.value,
      confirmPassword: txtModalConfirmPassword.value,
      gender: selectedGender,
      yearLvl: selectedValue,
      address: txtArea.value,
      birthdate: modalDate.value
  }
  if(!user.email){
      return alert('Email address is required.')
  } else if (!user.name){
      return alert('Name is required!')
  } else if (!user.password || !user.confirmPassword){
      return alert("Password is required.")
  } else if (user.password != user.confirmPassword){
      return alert('Password does not match.')
  } else if (!user.gender){
      return alert('Gender is required!')
  } else if (user.yearLvl == 0){
      return alert('Year lvl is required!')
  } else if (!user.address){
      return alert('Address is required!')
  } else if (!user.birthdate){
      return alert('Birthdate is required!')
  }
  console.log(user.yearLvl);
  
alert(`Welcome ${user.name}. You have been successfully registered.`)
console.log(user);
localStorage.setItem('user', JSON.stringify(user))


}


let btnModalRegister = document.querySelector('#btnModalRegister')
btnModalRegister.addEventListener('click', () => {
  register()
})

let user = JSON.parse(localStorage.getItem('user'))
console.log(`My name is ${user.name} and my email is ${user.email}`);