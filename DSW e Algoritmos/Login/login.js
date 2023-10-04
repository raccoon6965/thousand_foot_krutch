var passwordInput = document.getElementById("password");

function Login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "luiz.bruno@aluno.ifsp.edu.br" && password == "2") {
        window.location = 'home.html'
    } else {
        alert("Dados Incorretos!")
    }
}

function mostrarSenha() {
    if (passwordInput.type === 'password') {
        passwordInput.setAttribute('type', 'text')
    } else {
        passwordInput.setAttribute('type', 'password')
    }
}
