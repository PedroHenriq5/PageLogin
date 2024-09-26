function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var btn = document.getElementById('btn');

    if(email == '' || senha == ''){
        alert("Erro! Usuario ou senha vazio")
    }else if(senha.length < 8){
        alert("Erro! senha pequena demais")
    }else{
        location.href = "src/logado.html"
    }
}

function mostrarsenha(){
    var senha = document.getElementById('senha');
    var simb = document.getElementById("eye");

    if(senha.type === 'password'){
        senha.setAttribute('type' , 'text');
        simb.classList.replace('bi-eye' , 'bi-eye-slash');
    }else{
        senha.setAttribute('type' , 'password');
        simb.classList.replace('bi-eye-slash' , 'bi-eye');   
    }
}