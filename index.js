const validationText = document.querySelector(".errors");
const buttonValue = document.querySelector(".button");
const emailEl = document.querySelector(".email");

const emailValidation = () => {
    const emailEl = document.querySelector(".email");
    if(emailEl.value && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailEl.value)) {
        return true
    }
    else {
        validationText.innerHTML = "Please provide a valid email";
        validationText.classList.add("errors");
        emailEl.classList.add('invalid');
    };
};

const removeValidation = () => {
    return validationText.innerHTML = "";
};

const removeExclamation = () => {
    return validationText.classList.remove('invalid');
};

buttonValue.addEventListener("click", emailValidation);
emailEl.addEventListener("focus", removeValidation);
emailEl.addEventListener("focus", removeExclamation);

