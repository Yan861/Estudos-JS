function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res= document.querySelector('div#res')
    if(fAno.value.length==0 || Number(fAno.value)> ano){
        window.alert('verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade= ano - Number(fAno.value)
        res.innerHTML=`idade calculada ${idade}`
        var genero = ''
        //criar html dinamicamente com js
        var img= document.createElement('img') //cria um elemento do tipo img do html
        img.setAttribute('id','foto')//seta o id da tag img pra foto
        
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                img.setAttribute('src','criança-m.jpg')
            }else if(idade <21){
                img.setAttribute('src','jovem-m.jpg')
                //jovem
            }else if( idade < 50){
                img.setAttribute('src','adulto-m.jpg')
                //adulto
            }else{
                img.setAttribute('src','idoso-m.jpg')
                //idoso
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                img.setAttribute('src','criança-f.jpg')

            }else if(idade <21){
                img.setAttribute('src','jovem-f.jpg')
                //jovem
            }else if( idade < 50){
                img.setAttribute('src','adulto-f.jpg')
                //adulto
            }else{
                img.setAttribute('src','idoso-f.jpg')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}