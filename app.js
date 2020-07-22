
const mainSection = document.querySelector('.registration-form');
//General Sections
const name = document.getElementById('name');
const password = document.getElementById('password');
const city = document.getElementById('city');
const gender = document.getElementsByName('gender');
const button = document.querySelector('.btn');
// Selecting divs 
const nameContainer = document.querySelector('.name-message');
const passwordContainer = document.querySelector('.password-message');
const cityContainer = document.querySelector('.city-message');
const genderContainer = document.querySelector('.gender-message');
const buttonContainer = document.querySelector('.button-message');

const requirementsDiv = document.querySelector('.requirements')

button.addEventListener('click', errorMessages);


function errorMessages(e) {

    if (name.value.trim() === '' || name.value.trim() === null) {

        let nameP = document.createElement('p');
        nameP.classList.add('nameP-class');
        let nameWarning = document.createTextNode('Please enter a longer name');
        nameP.appendChild(nameWarning);
        nameContainer.appendChild(nameP);
        mainSection.style.height = '118vh';
        setTimeout(function () {

            nameP.remove()
            mainSection.style.height = '90vh';


        }, 5000);

    }

    if (password.value.trim() === '' || password.value.trim() === null) {

        let passwordP = document.createElement('p');
        passwordP.classList.add('passwordP-class');
        let passwordWarning = document.createTextNode('Please enter a password');
        passwordP.appendChild(passwordWarning);
        mainSection.style.height = '118vh';
        passwordContainer.appendChild(passwordP);

        setTimeout(function () {

            passwordP.remove()
            mainSection.style.height = '90vh';



        }, 5000);

    } else if (password.value.length < 6) {

        let lengthP = document.createElement('p');
        lengthP.classList.add('lengthP-class');
        let lengthWarning = document.createTextNode('Password has to be at least 6 characters');
        lengthP.appendChild(lengthWarning);
        mainSection.style.height = '118vh';
        passwordContainer.appendChild(lengthP);


        setTimeout(function () {


            lengthP.remove();
            mainSection.style.height = '90vh';


        }, 5000);


    }

    if (!password.value.match(/[a-z]/g) || !password.value.match(/[A-Z]/g)) {

        let caseP = document.createElement('p');
        caseP.classList.add('caseP-class');
        let caseWarning = document.createTextNode('Password has to have one lower case and Upper Case');
        caseP.appendChild(caseWarning);
        mainSection.style.height = '118vh';
        passwordContainer.appendChild(caseP);


        setTimeout(function () {


            caseP.remove();
            mainSection.style.height = '90vh';


        }, 5000);

    }

    if (!password.value.match(/^[0-9]+$/)) {


        let numberP = document.createElement('p');
        numberP.classList.add('caseP-class');
        let numberWarning = document.createTextNode('Password has to have a number');
        numberP.appendChild(numberWarning);
        mainSection.style.height = '118vh';
        passwordContainer.appendChild(numberP);


        setTimeout(function () {


            numberP.remove();
            mainSection.style.height = '90vh';


        }, 5000);


    }

    if (city.value.trim() === '' || city.value.trim() === null) {

        let cityP = document.createElement('p');
        cityP.classList.add('cityP-class');
        let cityWarning = document.createTextNode('Please enter a City');
        cityP.appendChild(cityWarning);
        cityContainer.appendChild(cityP);
        mainSection.style.height = '118vh';
        setTimeout(function () {

            cityP.remove()
            mainSection.style.height = '90vh';
            

        }, 5000);

    }

    if (gender[0].checked === false && gender[1].checked === false && gender[2].checked === false) {

        let genderP = document.createElement('p');
        genderP.classList.add('genderP-class');
        genderP.style.fontSize = '16px';
        let genderWarning = document.createTextNode('Please select a gender');
        genderP.appendChild(genderWarning);
        genderContainer.appendChild(genderP);
        mainSection.style.height = '118vh';
        setTimeout(function () {

            genderP.remove()
            mainSection.style.height = '90vh';


        }, 5000);



    }


}








function radioValue() {

    return document.querySelector('input[name="gender"]:checked').value;

}


