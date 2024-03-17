"use strict"


let buttonId = document.getElementById("button");

let cnt = 0;

function displayGator() {
    cnt = document.getElementById("count").value;
    let str = "";
     
    for (let i = 0; i < cnt; i++) {
            str = str + "🐊"
          } 
        document.getElementById("blueBox").innerText = str;
    }

buttonId.addEventListener("click", displayGator);