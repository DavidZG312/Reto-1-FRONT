function iniciarSesion() {
  if(document.getElementById("email").value !== '' && document.getElementById("password").value !== ''){
    $.ajax({
      url: `http://localhost:8080/api/user/${document.getElementById("email").value}/${document.getElementById("password").value}`,
      type: "GET",
      datatype: "JSON",
      success: function (respuesta) {
        if(respuesta.id !== null){
          alert("¡ Inicio con exito !")
        } else {
          alert("Correo o contraseña invalido")
        }
      }
  });
  } else {
    alert("Diligenciar todos los campos")
  }
  
}