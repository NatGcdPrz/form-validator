const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message;
}

//Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

//Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}


//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

//Check input length 
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

//Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}
//Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault()

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});

/*
Fonctions : Les fonctions font partie des briques fondamentales de JavaScript. Une fonction est une proc??dure JavaScript, un ensemble d'instructions effectuant une t??che ou calculant une valeur. Afin d'utiliser une fonction, il est n??cessaire de l'avoir auparavant d??finie au sein de la port??e dans laquelle on souhaite l'appeler.
Boucles : Les boucles permettent de r??p??ter des actions simplement et rapidement
Variables : En JavaScript, une variable est un conteneur qui va nous permettre de stocker des informations. Elles ne servent qu'?? stocker temporairement des informations. En effet, elles n'existent que durant l'ex??cution du code JS ; elles ne persistent pas dans le temps.
Conditions : Les conditions permettent d'ex??cuter en JavaScript, comme dans tous les langages de d??veloppements, des instructions selon si une condition est v??rifi??e ou non.
Types de donn??es : Le Javascript dispose actuellement de 7 types de donn??es dont 6 sont dits primitifs: Number (les nombres), String (les cha??nes de caract??res), Boolean (les bool??ens), Null (rien), undefined (pas d??fini)
*/
