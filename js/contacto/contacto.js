import config from '../supabase/keys.js';

const botonEnviar = document.getElementById('botonEnviar');

botonEnviar.onclick = function () {
    insertar_datos_vehiculo();
}

function insertar_datos_vehiculo() {
    const inputNombre = document.getElementById('nombre').value;
    const inputApellido = document.getElementById('apellido').value;
    const inputCorreo = document.getElementById('correo').value;
    const inputTitulo = document.getElementById('titulo').value;
    const inputDescripcion = document.getElementById('descripcion').value;
  
    const datos_insertar = {
      nombre: inputNombre,
      apellido: inputApellido,
      correo: inputCorreo,
      titulo: inputTitulo,
      descripcion: inputDescripcion
    }
  
    axios({
      method: "POST",
      url: "https://mmphzayxvvhdtrtcvjsq.supabase.co/rest/v1/tickets", 
      headers: config.headers,
      data: datos_insertar,
    })
      .then(res =>
        console.log(res))
      .catch(err => console.log('Error:', err))
  }

  if(localStorage.getItem("access_token")){

    const ul2 = document.getElementById("menuLista");
    const li2 = document.createElement('li');
    const button2 = document.createElement('button');
    const a2 = document.createElement('a');
    li2.classList.add('menu__item');
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
  }

  const cerrarSesion = document.getElementById ("cerrarSesion");

  cerrarSesion.onclick = function (){
      localStorage.removeItem('access_token');
      alert("Has cerrado sesión");
      location.href = "../../index.html";
  }
  