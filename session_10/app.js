// DOM (Document)

console.log(document);
const demo = document.getElementById("demo"); // -> HTML
// .getElementsByClassName
// .querySelector()
// .querySelectorAll()
// .getElementsByTagName
console.log(demo);

const h1 = document.getElementsByClassName("tytle")
// console.log(h1);


const ul = document.querySelector(".main-list");
// console.log(ul.children);
const lis = ul.children;
// console.log(lis);

// console.dir(ul);
ul.textContent = "hello world";
ul.innerText = "<li>Hello world</li>";
ul.innerHTML = "<li>Go to bed</li>";
ul.style.backgroundColor = "red";
// ul.appendChild

// textContent
// innerHTML
// innerText
// style
// children
// appenChild()
// remove()


const li = document.createElement("li");
li.id = "todo-item";
li.classList.add("todo-item");
li.innerText = "Go to bed";
console.log(li);
ul.appendChild(li);

let todoItem = document.getElementById("todo-item");
console.log(todoItem);
todoItem.remove();



// Event Listener
// demo.onclick = function (){
//     alert("hello world");
// }

function alertFunction() {
    alert("Hello world")
}
demo.addEventListener(`click`, alertFunction);
demo.addEventListener("click", function () {
    console.log(`NGuyen Thi Huong`);

});

const button = document.getElementById("remove");
button.addEventListener("click", function () {
    demo.removeEventListener("click", alertFunction);
});