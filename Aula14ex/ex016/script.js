function contar(){
    var ini = window.document.getElementById('inicio')
    var fim= window.document.getElementsById('fim')
    var passo= window.document.getElementById('passo')
    var res= window.document.getElementById('res')
    var result= window.document.getElementById('res2')
    window.alert(passo.value)
    
    
        var cont=Number(ini.value)
        res.innerHTML="Bora contar!"
        result.innerText=`${cont}`
        while(cont<=Number(fim.value)){
            result.append(`${cont}`)
            cont+=Number(passo.value)
        
        }
}