var loginButton = document.getElementById("login");
var logoutButton = document.getElementById("logout");

function validarDatosUsuario() {
    return true;
}



function login() {
    var usuarioValido = validarDatosUsuario();

    if (usuarioValido) {
        console.log("login");
        
        loginButton.classList.add("ocultar");
        logoutButton.classList.remove("ocultar");
    }
    
}

function logout() {
    var usuarioValido = validarDatosUsuario();
    console.log("logout");

    if (usuarioValido) {
        console.log("login");
        
        loginButton.classList.remove("ocultar");
        logoutButton.classList.add("ocultar");
    }
}