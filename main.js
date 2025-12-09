// let inputBox = document.getElementById("input");
// let btn = document.querySelectorAll("button");
// let string = "";
// let arr = Array.from(btn);

// arr.forEach(button => {
//     button.addEventListener("click", (e) => {
//         if(e.target.innerHTML == "=") {
//             string = eval(string);
//             inputBox.value = string;
//         }
//         else if(e.target.innerHTML == "AC"){
//             string = "";
//             inputBox.value = string;
//         }
//         else if(e.target.innerHTML == "DEL") {
//             string = string.substring(0, string.length - 1);
//             inputBox.value = string;
//         }
//         else {
//             string += e.target.innerHTML;
//             inputBox.value = string;
//         }

//         // string += e.target.innerHTML;
//         // inputBox.value = string;
//     });
// });

// let input = document.getElementById("input");
// let buttons = document.querySelectorAll("button");
// let display = "";
// let arr = Array.from(buttons);

// arr.forEach(function(button) {
//     button.addEventListener("click", function(e) {
//         if(e.target.innerHTML == "=") {
//             display = eval(display);
//             input.value = display;
//         }else if(e.target.innerHTML == "AC") {
//             display = "";
//             input.value = display;
//         }else if(e.target.innerHTML == "DEL") {
//             display = display.substring(0, display.length - 1);
//             input.value = display;
//         }else {
//             display += e.target.innerHTML;
//             input.value = display;
//         }
//     });
// });

// let input = document.getElementById("input");
// let buttons = document.querySelectorAll("button");
// let display = "";
// let arr = Array.from(buttons);

// arr.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         if(e.target.innerHTML == "=") {
//             display = eval(display);
//             input.value = display;
//         }else if(e.target.innerHTML == "AC") {
//             display = "";
//             input.value = display;
//         }else if(e.target.innerHTML == "DEL") {
//             display = display.substring(0, display.length - 1);
//             input.value = display;
//         }else{
//             display += e.target.innerHTML;
//             input.value = display;
//         }
//     });
// });

// let input = document.getElementById("input");
// let buttons = document.querySelectorAll("button");
// let display = "";
// let arr = Array.from(buttons);
// arr.forEach((button)=> {
//     button.addEventListener("click", (e) => {
//         if(e.target.innerHTML == "=") {
//             display = eval(display);
//             input.value = display;
//         }else if(e.target.innerHTML == "AC") {
//             display = "";
//             input.value = display;
//         }else if(e.target.innerHTML == "DEL") {
//             display = display.substring(0, display.length - 1);
//             input.value = display;
//         }else {
//             display += e.target.innerHTML;
//             input.value = display;
//         }
//     });
// });

// let input = document.getElementById("input");
// let buttons = document.querySelectorAll("button");
// let display = "";
// let arr = Array.from(buttons);

// arr.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         if(e.target.innerHTML == "=") {
//             display = eval(display);
//             input.value = display;
//         }else if(e.target.innerHTML == "AC") {
//             display = "";
//             input.value = display;
//         }else if(e.target.innerHTML == "DEL") {
//             display = display.substring(0, display.length - 1);
//             input.value = display;
//         }else {
//             display += e.target.innerHTML;
//             input.value = display;
//         }
//     });
// });

// let input = document.getElementById("input");
// let buttons = document.querySelectorAll("button");
// let display = "";
// let arr = Array.from(buttons);

// arr.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         if(e.target.innerHTML == "=") {
//             display = eval(display);
//             input.value = display;
//         }else if(e.target.innerHTML == "AC") {
//             display = "";
//             input.value = display;
//         }else if(e.target.innerHTML == "DEL") {
//             display = display.substring(0, display.length -1 );
//             input.value = display;
//         }else {
//             display += e.target.innerHTML;
//             input.value = display;
//         }
//     });
// });

let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let display = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == "=") {
            display = eval(display);
            input.value = display;
        }else if(e.target.innerHTML == "AC") {
            display = "";
            input.value = display;
        }else if(e.target.innerHTML == "DEL") {
            display = display.substring(0, display.length - 1);
            input.value = display;
        }else {
            display += e.target.innerHTML;
            input.value = display;
        }
    });
});


























