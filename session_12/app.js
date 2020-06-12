// let input = document.getElementById("name");
// document.getElementById("demo").addEventListener("click", onClickEvent);
// function onClickEvent() {
//     alert(input.value);
//     input.value = "";
// }



// let resister = document.getElementById("resister");
// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let comfirmps = document.getElementById("comfirmps");
// let error = document.querySelector(".error");
// resister.addEventListener("click", onClickresister);
// const errors = [];
// function onClickresister() {
//     if (!email.value) {
//         errors.push("Invalid email");
//     }
//     if (!password.value) {
//         errors.push("Invalid password");
//     }
//     if (comfirmps.value !==password.value || !comfirmps.value) {
//         errors.push("Invalid comfirmps is not password");
//     }
//     if (email.value && password.value && comfirmps.value && comfirmps.value == password.value) {
//         alert("dang nhap thanh cong");
//         error.innerHTML = "";
//     }
//     for (const err of errors) {
//         error.innerHTML += `${err} <br/>`;
//     }
// }
// if (errors.length > 0) {
//     for (let err of errors) {
//         error.innerHTML += err;
//     }
// }


const mainForm = document.getElementById("main-form");
const ul = document.getElementById("content");
mainForm.addEventListener("submit", onSubmitEvent);
// function onSubmitEvent(event) {
//     event.preventDefault();
//     console.log(event.target);
//     console.log("Submitted");
// }
function onSubmitEvent(event) {
    event.preventDefault();
    const content = mainForm.todo.value;
    const li = document.createElement("li");
    li.innerHTML = `${content} <button id="delete">delete</button>`;
    ul.appendChild(li);
}
ul.addEventListener('click', onDeleteTodo);
function onDeleteTodo(event) {
    console.log(event.target);
    if (event.target.id === "delete") {
        console.log(event.target.parentNode);
        event.target.parentNode.remove();
    }
}

// event.target "ngan" event bubbling
// local Storage
