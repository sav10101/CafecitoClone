function mostrarVentanaCompartir() {
    var ventanaCompartir = document.createElement('div');
    ventanaCompartir.classList.add('ventana-compartir');

    ventanaCompartir.innerHTML = `

<div class="navsito">
<h2>Compartir</h2>
<button class="close-popad" onclick="cerrarVentanaCompartir()">X</button>
</div>
<input type="text" id="linkCompartir" value="https://cafecito.app/Edna" readonly>
<button onclick="copiarLink()" style="background-color: #7c95f8;"> <i class="far fa-copy"></i> Copiar Link
</button>
<button onclick="compartirInstagram()" style="background-color: #e56969;"> <i class="fab fa-instagram"></i> Instagram Story
</button>
<button onclick="compartirTwitter()" style="background-color: #71bbff;"> <i class="fab fa-twitter"></i> Twitter
</button>
`;

    document.body.appendChild(ventanaCompartir);
}


function cerrarVentanaCompartir() {
    var ventanaCompartir = document.querySelector('.ventana-compartir');
    if (ventanaCompartir) {
        document.body.removeChild(ventanaCompartir);
    }
}
function compartirTwitter() {
    window.location.href = 'https://twitter.com/';
}

function compartirInstagram() {
    window.location.href = 'https://www.instagram.com/';
}

function copiarLink() {
    var linkCompartir = document.getElementById('linkCompartir');
    linkCompartir.select();
    document.execCommand('copy');
    alert('Enlace copiado al portapapeles');
}

function explorar() {
    window.location.href='https://cafecito.app/explore'
}

function ingresar() {
    window.location.href='https://cafecito.app/login'
}

