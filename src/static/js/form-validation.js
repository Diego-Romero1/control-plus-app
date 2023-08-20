const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validate(input.target)
    })
}
);

const validate = (input) => {
    const inputType = input.dataset.type;
    if (input.validity.valid) {
        input.classList.remove("form-control_input");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.classList.add("form-control_input");
        input.parentElement.querySelector(".input-message-error").innerHTML =
            showMessageError(inputType, input);
    }
};

const showMessageError = (inputType, input) => {
    let message = "";
    errorTypes.forEach((error) => {
        if (input.validity[error]) {
            message = errorMessages[inputType][error]
        }
    });
    return message;
}

const errorTypes = [
    "valueMissing",
    "typeMismatch"
];

const errorMessages = {
    email: {
        valueMissing: "El campo email no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacío",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    }
}