const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const textareaInput = document.querySelector("#message");
const submitBtn = document.querySelector("#submit");

function checkInputs() {
    if(nameInput.value === "" || emailInput.value === "" || textareaInput.value === "") {
        submitBtn.classList.add("disabled");
    } else {
        submitBtn.classList.remove("disabled");
    }
}

nameInput.addEventListener("input", checkInputs);
emailInput.addEventListener("input", checkInputs);
textareaInput.addEventListener("input", checkInputs);

