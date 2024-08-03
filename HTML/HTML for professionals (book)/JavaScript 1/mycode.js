// function clickme(){
//     document.querySelector("#main p:first-child").onclick=showalert;
// }
// function clickme(){
//     var list = document.querySelectorAll("#main p");
//     // list[0].onclick=showalert
//     for(var i=0; i<list.length; i++){
//         list[i].onclick=showalert
//     }
// }
// function showalert(){
//     alert('Ты на мне щелкнул!');
// }

// window.onload=clickme;

function showalert(){
    alert('Ты на мне щелкнул!');
}
// function clickme(){
//     var pelement=document.getElementsByTagName('p')[0];
//     pelement.addEventListener('click', showalert, false);
// }

function clickme(){
    var list = document.querySelectorAll("#main p");
        for(var i=0; i<list.length; i++){
            list[i].addEventListener("click", showalert, true)
        }
    
}
window.addEventListener('load', clickme, false); 
// removeEventListener(тип, прослушиватель, useCapture). 

Math.random()
   
   