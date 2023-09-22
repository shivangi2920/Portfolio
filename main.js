window.addEventListener('scroll', function () {
    let navbar = document.getElementById("nav");
    let under = document.getElementById("underline");
    let sec = document.getElementById("work");
  
    if (window.scrollY > 600) {
      navbar.classList.add("scrolled");
    
    
  
    } else {
      navbar.classList.remove("scrolled");
      
     
      
  
  
    };

    // if (window.scrollY > 1800) {
    //   navbar.classList.add("scrolled1");
     
  
    // }
    // else {
    //   navbar.classList.remove("scrolled1");
      
     
      
  
  
    // };
} ); 



$(document).ready(function(){

$("#button").click(function(){

$("#iconmenu").slideToggle();


});

  
  
  




});

$(document).ready(function(){
  $(".btn1").click(function(){
  
    $(".work").show();
    });
    
    $(".btn2").click(function(){
    $(".work").hide();
    $(".website").show();
    });
    
    $(".btn3").click(function(){
    $(".work").hide();
    $(".JavaScript").show(); 
    });
    $(".btn4").click(function(){
      $(".work").hide();
      $(".graphic").show();
      });




})

const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    })
});















