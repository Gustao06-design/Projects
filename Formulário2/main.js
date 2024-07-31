const form = document.querySelector('.form')
const nome = document.querySelector('#ftext')
const email = document.querySelector('#femail')
const senha = document.querySelector('#fsenha')
const senha2 = document.querySelector('#fsenha2')


form.addEventListener("submit", (e) => {
    e.preventDefault(); //Não permite recarregar a página
    
    checkInputs();
})

function checkInputs(){
    const nomeValue = nome.value
    const emailValue = email.value
    const senhaValue = senha.value
    const senha2Value = senha2.value

    if(nomeValue === ''){
        setErrorfor(nome, 'O nome de usuário é obrigatório!')
    }else{
        setSucessFor(nome);
    }

    if(emailValue === ''){
        setErrorfor(email, 'O email é obrigratório!')
    }else if(!checkEmail(emailValue)){
        setErrorfor(email, 'O email não é válido!')
    }else{
        setSucessFor(email);
    }

    if(senhaValue === ''){
        setErrorfor(senha, 'A senha é obrigatória!')
    }else if(senhaValue.length < 7){
        setErrorfor(senha, 'A senha precisa ter no mínino 7 caracteres!')
    }else{
        setSucessFor(senha);
    }

    if(senha2Value === ''){
        setErrorfor(senha2, 'A confirmação da senha é obrgatória!')
    }else if(senha2Value !== senhaValue){
        setErrorfor(senha2, 'As senhas não conferem!')
    }else{
        setSucessFor(senha2);
    }

    const container = form.querySelectorAll('.container');

    const formIsValid = [...container].every(container =>{
       return (container.className === 'container sucesso'); 
    });

    if(formIsValid){
        console.log('O formulário está 100% válido!');
    }
    
    
}

function setErrorfor(input,message){
    const container = input.parentElement;
    const small = container.querySelector('small');

    //Adiciona a mensagem de erro
    small.innerText = message;

    //Adiciona a classe de erro
    container.className = "container erro";
}

function setSucessFor(input){
    const container = input.parentElement;

    //Adicionar a classe de sucesso
    container.className = "container sucesso";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
