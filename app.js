const menu = document.getElementById("mobile-menu");
const menulinks = document.getElementsByClassName("nav-menu")[0];

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
})

//modal items
const modal = document.getElementById('email-model');
const openbtn = document.querySelector('.main-btn');
const openbtn2 = document.querySelector('.nav-links-btn');
const closebtn = document.querySelector('.close-btn');

//click events

openbtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

openbtn2.addEventListener('click', () => {
    modal.style.display = 'block';
});

closebtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target==modal) {
        modal.style.display = 'none';
    }
});

//form validation
const form = document.getElementById('form');
const name = document.getElementById('name');
const number = document.getElementById('number');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('password-confirm');

//error message
function showerror(input, message) {
    const formvalidation = input.parentElement;
    formvalidation.className = 'form-validation error';

    const errormessage = formvalidation.querySelector('p');
    errormessage.innerText = message;
}
//valid
function showvalid(input) {
    const formvalidation = input.parentElement;
    formvalidation.className = 'form-validation valid';
}
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}
//check input
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showerror(input, 'email is required');
        } else {
            showvalid(input);
        }  
    })
}

function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

function checklength(input, min, max) {
    if(input.value.length <min) {
        showerror(input, 'name must be atleast 3 chracters');
    } else if (input.value.length > max) {
        showerror(input, 'name must be less than 25 chracters');
    } else {
        showvalid(input);
    }
}
function checklength2(input, min, max) {
    if(input.value.length <min) {
        showerror(input, 'password must be atleast 8 chracters');
    } else if (input.value.length > max) {
        showerror(input, 'password must be less than 20 chracters');
    } else {
        showvalid(input);
    }
}
//check password match
function passwordmatch(input1, input2) {
    if(input1.value !== input2.value) {
        showerror(input2, 'passwords do not match');
    }
}
//mobile num
function validate(input) {
    const regx = /[6-9]\d{9}/;
    if(regx.test(input.value)) {
        showvalid(input)
    } else {
        showerror(input,'invalid number')
    }
}

//event listiner
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name, email, password, confirmpassword]);
    checklength(name, 3, 30);
    checklength2(password, 8, 25);
    checklength2(confirmpassword, 8, 25);
    passwordmatch(password, confirmpassword);
    validate(number);
});
