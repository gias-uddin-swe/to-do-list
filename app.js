// const allButton = document.getElementsByClassName("button-test");
// const prime = document.getElementById("prime");

// console.log(allButton);
// // console.log(prime);

// for (const button of allButton) {
//   button.addEventListener("click", function (e) {
//     // console.log(e.target.parentNode);
//       console.log(e);
//   });
// }

let count = 0;
function add(e) {
  count++;
  control("count");
}
function minus(params) {
  count--;
  control("count");
}
function control(id) {
  document.getElementById(id).innerText = count;
}

// function add(params) {
//   bro();
// }
// add();
// function minus(params) {
//   bro();
// }

// function bro(params) {
//   console.log("brooooo");
// }





