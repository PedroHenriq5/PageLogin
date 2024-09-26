let email = document.getElementById('email').value;
let senha = document.getElementById('senha').value;
const btn = document.getElementById('btn');

btn.addEventListener('click', logar);

function logar(){
    email = document.getElementById('email').value;
    senha = document.getElementById('senha').value;

    const msgErroEmail = document.getElementById('msgErroEmail');
    const msgErroSenha = document.getElementById('msgErroSenha');

    if(email == '' && senha == '' && senha.length < 8){
        msgErroEmail.classList.remove('hide')
        msgErroSenha.classList.remove('hide')
    } else if(email == ''){
        msgErroEmail.classList.remove('hide');
        msgErroSenha.classList.add('hide')
    }else if(senha.length < 8 || senha == ''){
        msgErroSenha.classList.remove('hide')
        msgErroEmail.classList.add('hide')
    }else{
        msgErroEmail.classList.add('hide')
        msgErroSenha.classList.add('hide')
    }
}

const simb = document.getElementById("eye");

simb.addEventListener('click', mostrarsenha)

function mostrarsenha(){

    const senhaInput = document.getElementById('senha');

    if(senhaInput.type === 'password'){
        senhaInput.setAttribute('type', 'text');
        simb.classList.replace('bi-eye', 'bi-eye-slash');
    } else {
        senhaInput.setAttribute('type', 'password');
        simb.classList.replace('bi-eye-slash', 'bi-eye');   
    }
}