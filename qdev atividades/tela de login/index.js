function cad(){
var usuario=document.getElementById('Usuario').value
var email=document.getElementById('email').value
var senha=document.getElementById('Senha').value
 if(usuario == 'admin' && email=='admin' && senha =='admin' ){
  alert('Logado com sucesso')
 }else{
  alert('Email ou senha incorreta')
 }
}
