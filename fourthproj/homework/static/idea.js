let all = document.querySelectorAll("#img_btn")
all[0].addEventListener('click',function(){
    window.scrollBy({left:0, top:1080, behavior:'smooth'});
})
all[1].addEventListener('click',function(){
    window.scrollBy({left:0, top:2160, behavior:'smooth'});
})
all[2].addEventListener('click',function(){
    window.scrollBy({left:0, top:3240, behavior:'smooth'});
})


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2200); 
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2200); 
}





var slideIndex1 = 0;
showSlides1();

function showSlides1() {
    var k;
    var slides1 = document.getElementsByClassName("mySlides1");
    var dots1 = document.getElementsByClassName("dot1");
    for (k = 0; k < slides1.length; k++) {
       slides1[k].style.display = "none";  
    }
    slideIndex1++;
    if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
    for (k = 0; k < dots1.length; k++) {
        dots1[k].className = dots1[k].className.replace(" active", "");
    }
    slides1[slideIndex1-1].style.display = "block";  
    dots1[slideIndex1-1].className += " active";
    setTimeout(showSlides1, 2200); 
}

var slideIndex2 = 0;
showSlides2();

function showSlides2() {
    var k;
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots2 = document.getElementsByClassName("dot2");
    for (k = 0; k < slides2.length; k++) {
       slides2[k].style.display = "none";  
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
    for (k = 0; k < dots2.length; k++) {
        dots2[k].className = dots2[k].className.replace(" active", "");
    }
    slides2[slideIndex2-1].style.display = "block";  
    dots2[slideIndex2-1].className += " active";
    setTimeout(showSlides2, 2200); 
}
 
 
var modal1 = document.getElementById('myModal1');
var btn1 = document.getElementById("modal_btn_menu");
var span = document.getElementsByClassName("close");  

var modal = document.getElementById('myModal');
var btn = document.getElementById("modal_btn");

var modal3 = document.getElementById('myModal1_1');
var btn3 = document.getElementById("modal_btn_menu1");

var modal2 = document.getElementById('myModal_1');
var btn2 = document.getElementById("modal_btn1");

var modal5 = document.getElementById('myModal1_2');
var btn5 = document.getElementById("modal_btn_menu2");

var modal4 = document.getElementById('myModal_2');
var btn4 = document.getElementById("modal_btn2");
 
                                      
btn1.onclick = function() {
    modal1.style.display = "block"; 
}
span[1].onclick = function() {
    modal1.style.display = "none";
}                                    
btn.onclick = function() {
    modal.style.display = "block";
}
span[0].onclick = function() {
    modal.style.display = "none";
}
btn2.onclick = function() {
    modal2.style.display = "block"; 
}
span[2].onclick = function() {
    modal2.style.display = "none";
}                                  
btn3.onclick = function() {
    modal3.style.display = "block";
}
span[3].onclick = function() {
    modal3.style.display = "none";
}
btn4.onclick = function() {
    modal4.style.display = "block"; 
}
span[4].onclick = function() {
    modal4.style.display = "none";
}                                  
btn5.onclick = function() {
    modal5.style.display = "block";
}
span[5].onclick = function() {
    modal5.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}

setInterval(function(){
             
    var timer = new Date();
    var h = timer.getHours();
    var m = timer.getMinutes();
    var s = timer.getSeconds();
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
},1000);


var effect_box = document.getElementsByClassName('text-effect');

function effect(object, speed) {

    var object_len = object.item(0).innerText.length;
    var object_text = object.item(0).innerText;

    object.item(0).innerHTML = '';

    for (var i = 0; i <= object_len; i++) {
        n_tag = document.createElement("p");
        object.item(0).append(n_tag);
        n_tag.append(object_text.charAt(i))

        if (i >= object_len) {
            var anima = true;
        }
    }
    if (anima === true) {
        var turn = 0;
        var opacity_txt = setInterval(function () {
            document.querySelectorAll('p').item(turn).style.opacity = '1';
            turn++;

            if (object_len === turn) {
                clearInterval(opacity_txt);
            }
        }, speed);
    }
}

effect(effect_box, 160);
