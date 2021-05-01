x=0;
const btnAdd = document.getElementById('agregarmesa');
btnAdd.addEventListener('click', function(){ 
const article = document.createElement('article');
article.classList.add('article');
const h1 = document.createElement('h1');
h1.innerHTML="Mesa"+" "+x;
h1.classList.add('titulomesa');
 

const img = document.createElement('img');
img.classList.add('libre');
img.src='images/libre.png';

const p = document.createElement('p');
const div= document.createElement('div');
div.classList.add('probando');
const a1 = document.createElement('a');
const a2 = document.createElement('a');
const a3 = document.createElement('a');
a1.innerHTML="Abrir Mesa ";
a2.innerHTML="Cerrar Mesa ";
a3.innerHTML="Agregar Producto ";
a1.classList.add('AbrirMesa');
a2.classList.add('CerrarMesa');
a3.classList.add('AgregarProduct');
div.appendChild(a1);
div.appendChild(a2);
div.appendChild(a3);
article.appendChild(h1);
article.appendChild(img);
article.appendChild(p);
article.appendChild(div);
elemento = document.getElementById('section');

elemento.appendChild(article);
x++;}, false);