let toggle = document.querySelector('.toggle');
let toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click',Animatedtoggle);

function Animatedtoggle(){
    toggle.classList.toggle("active");
}