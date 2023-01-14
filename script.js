//the increment button
var btnPlus = document.getElementsByClassName("plus");
//the delete button
var deleteBtn = document.getElementsByClassName("delete");
//the like button
var likeBtn=document.getElementsByClassName("like");
//the checkbox
const checkboxs = document.querySelectorAll(".check");
// the decrement button
const btnMinus = document.getElementsByClassName("minus");
// console.log(les bouttons);
//the increment button
var btnPlus = document.getElementsByClassName("plus");
// the decrement button
const btnMinus = document.getElementsByClassName("minus");
// console.log(les bouttons);
for (i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener("click", increment);
    btnMinus[i].addEventListener("click", decrement);
}

//the total function
var totalValue = Number(totalTag.innerHTML);
const btnPlus=check.parentElement.parentElement.querySelector(".plus");
const btnMinus=check.parentElement.parentElement.querySelector(".minus");


