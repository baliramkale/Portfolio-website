function myMenufuncton(){
    var menuBth = document.getElementById("myNAvMEnu");
    if (menuBth.className === "nav-menu"){
        menuBth.className +="responsive";
    } else {
        menuBth.className ="nav-menu";
    }
    
}

//---dark mode---//

const body =document.querySelector("body");
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark");

});

//---typing Effect---//

var typingEffect = new Typed(".typedText",{
    strings: ["Desiner","Coder","Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed:80,
    backDelay:2000,
})