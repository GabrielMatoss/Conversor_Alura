function Converter() {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    //podemos criar uma variavel que nao precisa ter o mesmo nome que o id do input "valor"
    let valorEmDolar = parseFloat(valor)
    
    let valorEmReal = valorEmDolar * 5 ;
    console.log(valorEmReal); 
    //Não precisamos criar uma variavel com o mesmo nome que o elemento html que estamos referenciando tá.
    let elementoValorConvertido = document.getElementById("valorConvertido")
    let valorConvertido = "O resultado em real é R$" + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertido

    }

    