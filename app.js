// Lista donde se guardarán los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Obtener el valor escrito en el input con id="amigo"
    let nombre = document.getElementById('amigo').value;
    // Verificar si el campo está vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        // Agregar el nombre a la lista
        listaAmigos.push(nombre);
    }
    // Limpiar el campo de texto
    document.getElementById('amigo').value = '';
    // Actualizar la lista que se muestra en pantalla
    mostrarListaAmigos();
}

// Función para mostrar la lista en el HTML
function mostrarListaAmigos() {
    let contenedorLista = document.getElementById("listaAmigos");
    // Limpiar el contenido anterior
    contenedorLista.innerHTML = '';
    // Recorrer todos los amigos y agregarlos como <li>
    for (let i = 0; i < listaAmigos.length; i++) {
        let elemento = document.createElement("li");
        elemento.innerText = listaAmigos[i];
        contenedorLista.appendChild(elemento);
    }
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Ingrese al menos un amigo antes de sortear.');
    } else {
        // Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        // Obtener el nombre sorteado
        let amigoSorteado = listaAmigos[indiceAleatorio];
        // Mostrar el resultado en el HTML
        let contenedorResultado = document.getElementById("resultado");
        contenedorResultado.innerHTML = '';
        let elemento = document.createElement("li");
        elemento.innerText = `El amigo sorteado es: ${amigoSorteado}`;
        contenedorResultado.appendChild(elemento);
    }
}
