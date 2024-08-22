// No input
// var form=document.querySelector('form');
// var inps=document.querySelectorAll("input[type='Text']");
// var h4=document.querySelector("h4");

// form.addEventListener("submit",function(eve){
//     eve.preventDefault();
//     for(i=0;i<inps.length;i++){
//         if(inps[i].value === ''){ 
//             h4.textContent="Error,Some fields are blank";
//             h4.style.color="red";
//             break;
//         }
//         else{
//             h4.textContent=""
//         }
//     }
// })

// List
// var add=document.querySelector("#add");
// var remo=document.querySelector("#remove");
// var input=document.querySelector('input');
// var ul=document.querySelector('ul');
// var li;
// add.addEventListener('click',function(){
//     if(input.value===""){}
//     else{
//     li=document.createElement('li');
//     li.textContent=input.value;
//     ul.appendChild(li);
//     input.value=""; 
//     }
// })
// remo.addEventListener('click',function(){
//     ul.removeChild(li);
// })


// Countdown timer
// 

var divs=document.querySelectorAll(".tab");
var h3s=document.querySelectorAll("h3");

// h3s[0].style.display="block";
// h3s[0].style.width="50%";

// divs.forEach(function(div,index){
//     div.addEventListener("click",function() {
//         hideAllText();
//         h3s[index].style.display="block";
//         h3s[index].style.width="50%";
//     });
// });

// function hideAllText(){
//     h3s.forEach(function(h3){
//     h3.style.display="none";
//     });
// } 


var prg=document.querySelector("#progress");
var h3=document.querySelector("h3");
var count=0;
var int=setInterval(function(){
    if(count===100){
        h3.style.opacity=1;
        clearInterval(int);
    }
    count++;
    prg.style.width=count+"%";
},100)
