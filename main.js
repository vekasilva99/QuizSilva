var flo= document.getElementById("flotante");
window.onscroll=function(){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop >40 ||  document.documentElement.scrollTop>50) {
        flo.style.display="block";

    }else{
        flo.style.display="none";

    }
}

function topFunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}