let numpera=document.querySelector(".num");
console.log(numpera);
let num = 0;

function decreaseHandler(){
    if(num <= 0){
        num --;
        numpera.textContent = num;
        numpera.style.color = "red"
    }
}

// function decreaseHandler(){
//     ++num;
//     numpera.textContent = num;
//     numpera.style.color = "white";
// }

function increaseHandler(){
    ++num;
    numpera.textContent = num;
    numpera.style.color = "rgb(70, 94, 70)";
}

function resetHandler(){
    num = 0;
    numpera.textContent = num;
    numpera.style.color ="black"
}

