function carregar(){
var msg= window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data= new Date()
var hora= data.getHours()
msg.innerHTML=`Agora são ${hora} horas`
if(hora>5 && hora<12){
    //bom dia!
    img.src = "manhã.jpg"//mudar a imagem do site atraves do link
    document.body.style.background="#e2cd9f" //mudar a cor do corpo do site
}
if(hora>=12&& hora <18){
    //boa tarde!
    img.src = "tarde.jpg"
    document.body.style.background = "#b9846f"
}
if(hora>=18 || hora<=5 ){
    //boa noite!
    img.src = "noite.jpg"
    document.body.style.background = "#515154"
}
}