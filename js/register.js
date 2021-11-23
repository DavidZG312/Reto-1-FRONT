const validacionRegistro = () => {
  let email = document.getElementById("email").value
  let name = document.getElementById("name").value
  let password = document.getElementById("password").value
  let repeatPassword = document.getElementById("repeatPassword").value
  var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/;
  if (email !== '' && name !== '' && password !== '' && repeatPassword !== '') {
    if (expr.test(email)) {
      if(password === repeatPassword){
        registrarUsuario()
      } else {
        alert("Las contraseñas no coinciden")
      }
    } else {
      alert("Correo no valido")
    }
  } else {
    alert("Llenar todos los campos")
  }

}

// Ejemplo implementando el metodo POST:
async function registrarUsuario(url = 'http://localhost:8080/api/user/new', data = {
  email: document.getElementById("email").value,
  name: document.getElementById("name").value,
  password: document.getElementById("password").value,
}) {
  try {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (response.status === 201) {
      // window.location = "index.html"
      $("#email").val("");
      $("#name").val("");
      $("#password").val("");
      $("#repeatPassword").val("");
      alert("¡ Usuario creado con exito !")
    } else {
      alert("El registro fallo")
    }
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}


function correoExiste() {
  $.ajax({
      url: `http://localhost:8080/api/user/${document.getElementById("email").value}`,
      type: "GET",
      datatype: "JSON",
      success: function (respuesta) {
        if(respuesta){
          alert("Correo ya existe")
          $("#email").val("");
        }
      }
  });
}