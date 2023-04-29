document.querySelector('#login-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  const datos_insertar = {
    username: username,
    password: password
  }

  axios({
    method: "POST",
    url: "http://127.0.0.1:5000/login",
    data: datos_insertar
  })
    .then(res => {
      if (res.status == "200") {
        access_token = res.data.access_token;
        localStorage.setItem("access_token", access_token);
        console.log(localStorage.getItem("access_token"));
        location.href = ("../index.html")
      }
    })
    .catch(err => console.log('Error:', err))

});

/*
  const response = await fetch('http://127.0.0.1:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });
  const data = await response.json();
  console.log(response); */