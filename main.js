/*animacion de texto*/
const text = "Angel Uriel Del Villar Calderón";
let index = 0;

function writeText() {
  document.getElementById("auto-text").innerText = text.slice(0, index);
  index++;

  if (index > text.length) {
    setTimeout(writeText, 150);
  }

  setTimeout(writeText, 150); // Cambia el número para ajustar la velocidad
}

writeText();

//DARKMODE

const header = document.querySelector('header');
const Lcolumn = document.querySelector('.left-column');
const Rcolumn = document.querySelector('.right-column');
const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');
const cards = document.querySelector('.project-card'); // Selecciona todas las tarjetas
const cardinfo = document.querySelector('.project-info');
const register = document.querySelector('.register-btn');
const pdf = document.querySelector('.anchor');


//to save the dark mode use the object "local storage".

//function that stores the value true if the dark mode is activated or false if it's not.
function store(value){
  localStorage.setItem('darkmode', value);
}

//function that indicates if the "darkmode" property exists. It loads the page as we had left it.
function load(){
  const darkmode = localStorage.getItem('darkmode');

  //if the dark mode was never activated
  if(!darkmode){
    store(false);
    icon.classList.add('fa-sun');
  } else if( darkmode == 'true'){ //if the dark mode is activated

pdf.classList.toggle('darkmode');
register.classList.toggle('darkmode');     
cardinfo.classList.toggle('darkmode'); 
 cards.classList.toggle('darkmode');  
header.classList.toggle('darkmode');   
Rcolumn.classList.add('darkmode');
Lcolumn.classList.add('darkmode');
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
  } else if(darkmode == 'false'){ //if the dark mode exists but is disabled
    icon.classList.add('fa-sun');
  }
}


load();

btn.addEventListener('click', () => {
  pdf.classList.toggle('darkmode');
  register.classList.toggle('darkmode'); 
  cardinfo.classList.toggle('darkmode'); 
  cards.classList.toggle('darkmode'); 
  header.classList.toggle('darkmode');  
Rcolumn.classList.toggle('darkmode')
Lcolumn.classList.toggle('darkmode')
  body.classList.toggle('darkmode');
  icon.classList.add('animated');

  //save true or false
  store(body.classList.contains('darkmode'));

  if(body.classList.contains('darkmode')){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }else{
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
})




/*Barra progreso*/ 

// Selecciona todas las barras de progreso
const progressBars = document.querySelectorAll('.progress');

// Función para verificar si un elemento es visible en la ventana de visualización (viewport)
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para animar las barras de progreso
function animateProgressBars() {
  progressBars.forEach(progress => {
    if (isElementInViewport(progress)) {
      const skillLevel = progress.getAttribute('data-skill');
      progress.style.width = skillLevel; // Asigna el porcentaje de la habilidad
    }
  });
}

// Ejecutar la animación al hacer scroll
window.addEventListener('scroll', animateProgressBars);

// Ejecutar la animación al cargar la página
window.addEventListener('load', animateProgressBars);


//Registro

document.getElementById('openFormBtn').addEventListener('click', function() {
    document.getElementById('registrationForm').classList.remove('hidden');
});

document.getElementById('closeFormBtn').addEventListener('click', function() {
    document.getElementById('registrationForm').classList.add('hidden');
});

