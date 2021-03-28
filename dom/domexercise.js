// 1 - Select the section with an id of container without using querySelector.
document.getElementById("container");

// 2 - Select the section with an id of container using querySelector.
document.querySelector("#container")

// 3 - Select all of the list items with a class of "second".
document.querySelectorAll(".second");

// 4 - Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol.third");

document.getElementById("container").innerHTML="Hello!";

let secondDiv=document.querySelector(".footer");
secondDiv.classList.add("main");

 secondDiv.classList.remove("main");

var newLi = document.createElement("li");

 newLi.innerText=("four");

 var list = document.querySelector("ul");
 list.appendChild(newLi);

 var lis = document.querySelectorAll("ol li");
   for ( var i = 0; i < lis.length; i++) {
     lis[i].style.backgroundColor = "green";
}

 secondDiv.classList.remove("footer");