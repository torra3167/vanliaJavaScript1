// const age = prompt("how old are you?");
// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";
// function handleClick() {
//     const currentColor = title.style.color;
//     // console.log(currentColor);
//     // console.log(title.style.color);
//     if(currentColor === BASE_COLOR) {
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
function handleClick() {
    // // alert("aa");
    // // const currentClass = title.className;
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(hasClass) {
    //     // title.className = CLICKED_CLASS;
    //     title.classList.remove(CLICKED_CLASS);
    // } else {
    //     title.classList.add(CLICKED_CLASS);
    //     // title.className = "";
    // }
    title.classList.toggle(CLICKED_CLASS);
    console.log(currentClass);
}

function init() {
    // title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();
// function handleOffline() {
//     console.log("bye bye");
// }
// function handleOnline() {
//     console.log("welcome")
// }
// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);

// if(age >= 18 && age <= 21) {
//     console.log("you can drink but you should not drink");
// } else if(age > 21){
//     console.log("go ahead");
// } else {
//     console.log("nope too young");
// }
// if("10" === 10) {
//     console.log("hi?")
// } else if("10" === "10"){
//     console.log("alsdlf")
// } else {
//     console.log("ho");
    
// }

// const title = document.getElementById("title");
// var title = document.querySelector("#title");
// title.innerHTML = "HI. From js"
// console.log(title);
// console.error('fuck');
// title.style.color = "red";
// document.title = "I own ya"
// console.dir(title);
// console.dir(document);
// function sayHello(name, age) {
//     console.log("Hello" + name + "you are" + age + "years old");
// }sayHello("jeongpil", 15);
// alert('11');