//ESTO SE REPITE CODIGO PERO COMO NOSE BIEN MANEJAR ESTO HABRIA Q VER  TECNICAMENTE ES IGUAAL A AGREGAR MESA 
const btnAdd = document.getElementById('agregarmesa');
btnAdd.addEventListener('click', function(){ 
const article = document.createElement('article');
article.classList.add('article');
const h1 = document.createElement('h1');
var Cantidad = localStorage.getItem("Cantidad");

if (Cantidad==null){
Cantidad=0;
}
h1.innerHTML="Mesa"+" "+Cantidad;

h1.classList.add('titulomesa');
 

const img = document.createElement('img');
img.classList.add('libre');
img.src='images/libre.png';

const p = document.createElement('p');
const div= document.createElement('div');
div.classList.add('probando');
const a1 = document.createElement('Button');
const a2 = document.createElement('a');
const a3 = document.createElement('a');
a1.innerHTML="Abrir Mesa ";
    a1.setAttribute("id", `AM${Cantidad}`);
    a2.innerHTML="Cerrar Mesa ";
    a2.setAttribute("id", "CM"+Cantidad);
    a3.innerHTML="Agregar Producto ";
    a3.setAttribute("id", "AP"+Cantidad);
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
article.setAttribute("id",Cantidad);

elemento.appendChild(article);
MesaHabilitada(Cantidad);
const BotonAbrirMesa = document.getElementById(`AM${Cantidad}`);
alert(`AM${Cantidad}`);

BotonAbrirMesa.addEventListener('click',Habilitolamesa(Cantidad ));
Cantidad++ ;

localStorage.setItem("Cantidad", Cantidad); 
}, false);

// arriba esta el habilito mesa que se ejecuta siempre , 

window.onload=function() {
    var Cantidad = localStorage.getItem("Cantidad");
    
    if (Cantidad != null){
        var index;
        for ( index = 0; index < Cantidad; index++) {
            agregarmesa(index);
            
        }
        localStorage.setItem("Cantidad", (index)); 
        
    }
   
}

function Habilitolamesa( b ){
    alert('entroa habilitomesa');
    const botonCerrarMesa = document.getElementById("CM"+b);
    const botonAgregarProducto = document.getElementById("AP"+b);
    botonCerrarMesa.style.visibility = 'visible'
    botonAgregarProducto.style.visibility='visible' 
    


}


function  MesaHabilitada(Id){
  
   
   const botonCerrarMesa = document.getElementById("CM"+Id);
   
   const botonAgregarProducto = document.getElementById("AP"+Id);
   botonCerrarMesa.style.visibility = 'hidden'
   botonAgregarProducto.style.visibility='hidden' 
}



function agregarmesa (ID) {
    const article = document.createElement('article');
    article.classList.add('article');
    const h1 = document.createElement('h1');
    h1.innerHTML="Mesa"+" "+ID;
    h1.classList.add('titulomesa');
    
    
    const img = document.createElement('img');
    img.classList.add('libre');
    img.src='images/libre.png';
    
    const p = document.createElement('p');
    const div= document.createElement('div');
    div.classList.add('probando');
    const a1 = document.createElement('Button');
    const a2 = document.createElement('a');
    const a3 = document.createElement('a');
    a1.innerHTML="Abrir Mesa ";
    a1.setAttribute("id", "AM"+ID);
    a2.innerHTML="Cerrar Mesa ";
    a2.setAttribute("id", "CM"+ID);
    a3.innerHTML="Agregar Producto ";
    a3.setAttribute("id", "AP"+ID);
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
    article.setAttribute("id", ID);
    elemento.appendChild(article);
    MesaHabilitada(ID);
    
const BotonAbrirMesa = document.getElementById("AM"+ID);

    
    
}


