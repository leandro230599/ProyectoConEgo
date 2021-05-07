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
img.setAttribute("id",'F'+Cantidad);

const p = document.createElement('p');
const div= document.createElement('div');
div.classList.add('probando');
const a1 = document.createElement('Button');
const a2 = document.createElement('Button');
const a3 = document.createElement('Button');
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

BotonAbrirMesa.addEventListener('click', ( ) => Habilitolamesa(Cantidad-1 ));
const botonCerrarMesa = document.getElementById(`CM${Cantidad}`);

botonCerrarMesa.addEventListener('click', ( ) => MesaHabilitada2(Cantidad-1 ));
Cantidad++ ;

localStorage.setItem("Cantidad", Cantidad); 
}, false);



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

const Habilitolamesa = b => {
    const Foto = document.getElementById("F"+b);
    Foto.src='images/Ocupado.png';
    const BotonAbrirMesa = document.getElementById("AM"+b);
   BotonAbrirMesa.style.visibility = 'hidden'

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
function  MesaHabilitada2(b){
  
    const Foto = document.getElementById("F"+b);
    Foto.src='images/Libre.png';
    const BotonAbrirMesa = document.getElementById("AM"+b);
   BotonAbrirMesa.style.visibility = 'visible'
   
    const botonCerrarMesa = document.getElementById("CM"+b);
    
    const botonAgregarProducto = document.getElementById("AP"+b);
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
    img.setAttribute("id",'F'+ID); 
    const p = document.createElement('p');
    const div= document.createElement('div');
    div.classList.add('probando');
    const a1 = document.createElement('Button');
    const a2 = document.createElement('Button');
    const a3 = document.createElement('Button');
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
    
const BotonAbrirMesa = document.getElementById(`AM${ID}`);

BotonAbrirMesa.addEventListener('click', ( ) => Habilitolamesa(ID));
const botonCerrarMesa = document.getElementById(`CM${ID}`);

botonCerrarMesa.addEventListener('click', ( ) => MesaHabilitada2(ID ));    
    
}

/* HABRIA QUE:
VER COMO QUEREMOS CONTROLAR LOS PRODUCTOS QUE SE VENDEN (BD O JS O MEMORIA CACHE)
COMO CALCULAR LOS PRODUCTOS COMIDOS EN EL MOMENTO(una mezcla de consultar en lo de arriba y sumarlo)
VER LOS PAGOS(con lo de arriba generar el valor y ofrecer medios de pago)*/


// Voy a hacer el objeto Producto que va a tener , Nombre de producto valor e id 




function Producto(dato1,dato2,dato3){
    this.Nombre=dato1;
    this.Valor=dato2;
    this.id=dato3;
}

        const AgregarProducto = document.getElementById("AgregarProducto");
       
        // HACE UNA VUELTA DE MAS NI IDEA XQ 
        AgregarProducto.addEventListener('click', function(){ 
            
            window.location='#openModal';  
           
       
    }, false);


    var BotoneNVIAR = document.getElementById("Enviar");
           BotoneNVIAR.addEventListener('click', function(e){ 
            var  ArregloDeProductos = [];   
            e.preventDefault( e);
               var value = document.getElementById('Producto').value;
               var value2 = document.getElementById('Valor').value;
                ArregloDeProductos = localStorage.getItem("Arreglo");
                ArregloDeProductos = JSON.parse(ArregloDeProductos);
               if(ArregloDeProductos ==null){
                    console.log('entro al if')
                                ArregloDeProductos =  [];
               }
               
            Producto2 = new Producto(value,value2,ArregloDeProductos.length);  
            console.log( Producto.id); 
               ArregloDeProductos.unshift(Producto2);
               
               ArregloDeProductos.forEach(element => {
                 
                console.log(element); 
               });
               localStorage.setItem('Arreglo', JSON.stringify(ArregloDeProductos));
              
               console.log(''+ ArregloDeProductos.length) 
                          
              document.getElementById("Producto").value = ""; 
               document.getElementById("Valor").value = ""; 
               window.location='#section' ;
               console.log('vuelta ')
          },
        false);