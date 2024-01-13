window.addEventListener("load",crearBiblioteca); 
const sergio = {
    nombre:"Sergio",
    color:"Morado",
    autor:"Lorca",
    NPaginas:1000,
    editorial:"Unchi",
    forrado : false,
    url: "https://localhost:8080/miSitioWeb.app",
    cover:"/descarga.jpeg",
    comprar : function (){
        console.log(`Libro de aventuras del autor ${sergio.nombre} comprado`);
    }
}
const juan = {
    nombre:"Juan",
    color:"Amarillo",
    autor:"Juan",
    NPaginas:100000,
    editorial:"Vicens Vives",
    forrado : false,
    url: "https://localhost:8080/miSitioWeb.app",
    cover:"/descarga.jpeg",
    comprar : function (){
        console.log(`Libro de aventuras del autor ${juan.nombre} comprado`);
    }
}
const pepe = {
    nombre:"Pepe",
    color:"Amarillo",
    autor:"Pepe",
    NPaginas:100,
    editorial:"Vicens Vives",
    forrado : false,
    url: "https://localhost:8080/miSitioWeb.app",
    cover:"/descarga.jpeg",
    comprar : function (){
        console.log(`Libro de aventuras del autor ${pepe.nombre} comprado`);
    }
}
const juancho = {
    nombre:"Juancho",
    color:"Amarillo",
    autor:"Juancho",
    NPaginas:100000,
    editorial:"Vicens Vives",
    forrado : false,
    url: "https://localhost:8080/miSitioWeb.app",
    cover:"/descarga.jpeg",
    comprar : function (){
        console.log(`Libro de aventuras del autor ${juancho.nombre} comprado`);
    }
}
console.log(sergio.comprar());
console.log(juan.comprar());
console.log(juancho.comprar());
console.log(pepe.comprar());

const libreria = [juan,juancho,pepe];

/*Array para que lea a todas las personas*/
const lector = [sergio,juan,pepe,juancho];

const CheckPages = ({NPaginas}) => NPaginas > 150;
const CheckLibro = (libreria, nombre) => libreria.includes(nombre);

console.log("Numero Páginas "+CheckPages(pepe));
console.log("Numero Páginas "+CheckPages(juan));

console.log("Persona incluida: "+CheckLibro(libreria,pepe));
console.log("Persona incluida: "+CheckLibro(libreria,sergio));

/*Ejercicio del ppowerpoint 3 de 4*/
console.log([sergio, ...libreria]);

const librosLargos = libreria.filter(CheckPages);
console.log(librosLargos);

const checkAutor = (autor,libreria) => libreria.find(nombre => nombre.nombre == autor);
console.log(checkAutor("Pepe",libreria));

const forraLibro = (libreria,nombre)=>libreria.map(function(libro){
    libro.forrado = true;
});

const PrestarLibro = (libreria, tituloBuscado) => libreria.splice(libreria.findIndex(librito => librito === tituloBuscado),1);
PrestarLibro(libreria,'Pepe');
console.log(libreria);

const DevolverLibro = (libreria,libro) => libreria.push(pepe);

function crearBiblioteca() {
    // Obtén el contenedor de libros en el DOM
    const contenedorLibros = document.querySelector('.libros');

    // Procesa los libros de la biblioteca y crea elementos HTML dinámicamente
    lector.map(libro => {
        // Crea un nuevo div para el libro
        const nuevoLibroDiv = document.createElement('div');
        nuevoLibroDiv.classList.add('libro');

        // Crea una imagen para el libro y establece la fuente desde el campo cover
        const nuevaImagen = document.createElement('img');
        nuevaImagen.src = libro.cover;
        nuevaImagen.alt = libro.nombre; 
        nuevoLibroDiv.appendChild(nuevaImagen);

        // Crea un párrafo para el título del libro
        const nuevoParrafo = document.createElement('p');
        nuevoParrafo.textContent = libro.nombre;
        nuevoLibroDiv.appendChild(nuevoParrafo);

        // Agrega el nuevo div del libro al contenedor de libros
        contenedorLibros.appendChild(nuevoLibroDiv);
    });
}

