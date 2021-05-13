//ESTO SE REPITE CODIGO PERO COMO NOSE BIEN MANEJAR ESTO HABRIA Q VER  TECNICAMENTE ES IGUAAL A AGREGAR MESA 

document.addEventListener('DOMContentLoaded', () => {

    //Cuando se carga la página, cargo las mesas guardadas
    const ArreglodeMesas =[];
    cargarMesas(ArreglodeMesas);
    
    const btnAdd = document.getElementById('agregarmesa');
    const btnAddProducto = document.getElementById('AgregarProducto');
    const btnEditarProducto = document.getElementById('EditarProducto');
    
    let Cantidad = localStorage.getItem("Cantidad");
    if (Cantidad==null){
        Cantidad=0;
    }

    //Si se hace click en el botón Agregar Mesa de la navegación
    btnAdd.addEventListener('click', () => {
        nuevaMesa = new Mesa(ArreglodeMesas.length);
        ArreglodeMesas.push(nuevaMesa);
        agregarMesa(Cantidad, ArreglodeMesas);
        Cantidad++ ;
        localStorage.setItem("Cantidad", Cantidad); 
    });

    //Si se hace click en Agregar Producto de la navegación
    btnAddProducto.addEventListener('click', () => { 
        abrirModalNuevoProducto();
    })

    //Si se hace click en Editar Producto de la navegación
    btnEditarProducto.addEventListener('click', () => {
        abrirModalEditarProducto();
    })

})

const cargarMesas = arrayMesas => {
    let Cantidad = localStorage.getItem('Cantidad');
    if (Cantidad != null) {
        for (let mesa = 0; mesa < Cantidad; mesa++) {
            agregarMesa(mesa, arrayMesas);
            nuevaMesa = new Mesa(mesa);
            arrayMesas.push(nuevaMesa);
        }
        //Esto para qué?
        //localStorage.setItem('Cantidad', (mesa));
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

const abrirModalNuevoProducto = () => {

    window.location='#openModal';
    const btnEnviarProducto = document.getElementById('Enviar');
    btnEnviarProducto.addEventListener('click', (e) => {
        e.preventDefault();
        crearNuevoProducto();
    }); 
}

const crearNuevoProducto = () => {

    let nombreProducto = document.getElementById('Producto').value;
    let valorProducto = document.getElementById('Valor').value;
    let ArregloDeProductos = JSON.parse(localStorage.getItem("Arreglo"));
    
    if (ArregloDeProductos == null) ArregloDeProductos = [];
    nuevoProducto = new Producto(nombreProducto, valorProducto, ArregloDeProductos.length);
    
    //Si no hay en el arreglo un producto con el nombre del nuevo producto, lo agrego
    if (!ArregloDeProductos.some( prod => prod.Nombre === nuevoProducto.Nombre)) {
        ArregloDeProductos.push(nuevoProducto);
    }

    localStorage.setItem("Arreglo", JSON.stringify(ArregloDeProductos));
    document.getElementById("Producto").value = ""; 
    document.getElementById("Valor").value = ""; 
    window.location='#section' ;
    
}

const abrirModalEditarProducto = () => {
    
    window.location = '#openModal2';
    const btnEnviarProductoEditar = document.getElementById('Enviar2');
    btnEnviarProductoEditar.addEventListener('click', (e) => {
        e.preventDefault();
        editarProducto();
    })
}

const editarProducto = () => {

    let ArregloDeProductos = JSON.parse(localStorage.getItem("Arreglo"));
    let nombreProductoEditar = document.getElementById('Producto2').value;
    let valorProductoEditar = document.getElementById('Valor2').value;

    if (ArregloDeProductos == null) ArregloDeProductos = [];
    let productoEncontrado = ArregloDeProductos.filter(prod => prod.Nombre === nombreProductoEditar);
    if (!productoEncontrado) {
        alert('Producto no encontrado')
        return;
    }

    console.log(productoEncontrado);
    productoEncontrado[0].Valor = valorProductoEditar;

    localStorage.setItem('Arreglo', JSON.stringify(ArregloDeProductos));          
    document.getElementById("Producto").value = ""; 
    document.getElementById("Valor").value = ""; 
    window.location='#section' ;
    

}

const CierroMesa = (b, ArreglodeMesas) => {
    
    const Foto = document.getElementById("F"+b);
    Foto.src='images/Libre.png';
    
    const BotonAbrirMesa = document.getElementById("AM"+b);
    BotonAbrirMesa.style.visibility = 'visible'
   
    const botonCerrarMesa = document.getElementById("CM"+b);
    botonCerrarMesa.style.visibility = 'hidden'
    
    const botonAgregarProducto = document.getElementById("AP"+b);
    botonAgregarProducto.style.visibility='hidden' 
    
    let Total=0;
    ArregloDeProductos =[];
    ArregloDeProductos = localStorage.getItem("Arreglo");
    
    ArregloDeProductos = JSON.parse(ArregloDeProductos);
    let total = ArreglodeMesas[b].Productos.reduce((tot, valor) => {
        return parseInt(tot) + (parseInt(valor) || 0)
    });
    
    alert('valor total '+ total);
    mesa= new Mesa(b);
    ArreglodeMesas[b]=mesa;
    
    document.getElementById("Producto3").value = ""; 
    //console.log(Total+'el total ');

}

const agregarProductoAMesaModal = (b, arrayMesas) => {
    
    window.location='#openModal3';
    let BotoneNVIAR = document.getElementById("Enviar3");
    BotoneNVIAR.onclick = () => agregaEvento(b, arrayMesas);            
}

const agregaEvento = (b, arrayMesas) => {
    agregarProductoAMesa(b, arrayMesas);
}

const agregarProductoAMesa = (b, ArreglodeMesas) => {
    
    let  ArregloDeProductos = [];
    let nombreProducto = document.getElementById('Producto3').value;
    
    ArregloDeProductos = localStorage.getItem("Arreglo");
    ArregloDeProductos = JSON.parse(ArregloDeProductos);

    if (ArregloDeProductos.some(prod => prod.Nombre === nombreProducto)) {
        ArreglodeMesas[b].Productos.push(ArregloDeProductos.filter(prod => prod.Nombre === nombreProducto)[0].Valor);
        return;
    } 

    alert('Producto no encontrado rey');
                       
}

function  MesaHabilitada(Id){
    
    const botonCerrarMesa = document.getElementById("CM"+Id);
    const botonAgregarProducto = document.getElementById("AP"+Id);
    
    botonCerrarMesa.style.visibility = 'hidden'
    botonAgregarProducto.style.visibility='hidden' 

}


const agregarMesa = (ID, arrayMesas) => {
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
    const a3 = document.createElement('span');
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
    BotonAbrirMesa.addEventListener('click', () => Habilitolamesa(ID));

    const botonCerrarMesa = document.getElementById(`CM${ID}`);
    botonCerrarMesa.addEventListener('click', ( ) => CierroMesa(ID, arrayMesas));

    const botonAgregarProducto = document.getElementById(`AP${ID}`);
    botonAgregarProducto.addEventListener('click', () => agregarProductoAMesaModal(ID, arrayMesas));
    
}

function Producto(dato1,dato2,dato3){
    this.Nombre=dato1;
    this.Valor=dato2;
    this.id=dato3;
}

function Mesa(dato){
    this.Productos=[];
    this.id=dato;   
}


/* HABRIA QUE:
VER COMO QUEREMOS CONTROLAR LOS PRODUCTOS QUE SE VENDEN (BD O JS O MEMORIA CACHE)
COMO CALCULAR LOS PRODUCTOS COMIDOS EN EL MOMENTO(una mezcla de consultar en lo de arriba y sumarlo)
VER LOS PAGOS(con lo de arriba generar el valor y ofrecer medios de pago)*/


// Voy a hacer el objeto Producto que va a tener , Nombre de producto valor e id 

