import config from '../supabase/keys.js';

document.addEventListener('DOMContentLoaded', function () {

    const ticketsGrilla = document.getElementById('ticketsGrilla');

    axios.get('https://mmphzayxvvhdtrtcvjsq.supabase.co/rest/v1/tickets?select=*', config)
        .then(function (response) {
            response.data.forEach(datos => {
                const ticket = document.createElement('div');
                ticket.classList.add('ticket')

                ticket.innerHTML = `
                    <div class="ticket-titulo">
                        <h2 class="ticket__titulo">${datos.titulo}</h2>
                    </div>
                    <div class="ticket-hora">
                        <p class="ticket__hora">${datos.created_at}</p>
                    </div>
                    <div class="ticket-descripcion">
                        <p class="ticket__descripcion">${datos.descripcion}</p>
                    </div>
                    <div class="ticket-usuario">
                        <p class="ticket__usuario">${datos.nombre}</p>
                    </div>
                `;
                ticketsGrilla.appendChild(ticket);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
})

if(localStorage.getItem("access_token")){

    const ul2 = document.getElementById("menuLista");
    const li2 = document.createElement('li');
    const button2 = document.createElement('button');
    const a2 = document.createElement('a');
    li2.classList.add('menu__item', 'menu__item--active');
    button2.setAttribute("id", "tickets")
    button2.appendChild(a2)
    li2.appendChild(button2)
    a2.appendChild(document.createTextNode("Tickets"));
    ul2.appendChild(li2);

    const ul = document.getElementById("menuLista");
    const li = document.createElement('li');
    const button = document.createElement('button');
    const a = document.createElement('a');
    li.classList.add('menu__item');
    button.setAttribute("id", "cerrarSesion")
    button.appendChild(a)
    li.appendChild(button)
    a.appendChild(document.createTextNode("Cerrar sesión"));
    ul.appendChild(li);

}else{
    const ul = document.getElementById("menuLista");
    const li = document.createElement('li');
    const button = document.createElement('button');
    const a = document.createElement('a');
    li.classList.add('menu__item');
    button.setAttribute("id", "IniciarSesion")
    a.setAttribute("href", "pages/inicio_sesion.html");
    button.appendChild(a)
    li.appendChild(button)
    a.appendChild(document.createTextNode("Iniciar Sesión"));
    ul.appendChild(li);
}

const cerrarSesion = document.getElementById ("cerrarSesion");

cerrarSesion.onclick = function (){
    localStorage.removeItem('access_token');
    alert("Has cerrado sesión");
    location.href = "../../index.html";
}
