function convert(){
   var valorInput = document.getElementById('val1').value;
   var moedaOrigem = document.getElementById('mod1').value;
   var moedaDestino = document.getElementById('mod2').value;
   var resultadoElement = document.getElementById('result');
   var valorConvertido;

   if(valorInput.trim() === ""){
    window.alert('Preencha os dados do primeiro valor!')
    return;
   }

   if(moedaOrigem === moedaDestino){
    window.alert('O valor da primeira moeda não pode ser igual o da segunda!')
    return;
   }

   //Convertendo valores para número//
   var valor = Number.parseFloat(valorInput);

    //Definindo as taxas de câmbio//

    var valorDolar = 5.18;
    var valorEuro = 5.52;
    var valorLibra = 6.4;
    var taxaRealParaDolar = 0.19;
    var taxaRealParaEuro = 0.18;
    var taxaRealParaLibra = 0.16;
    

    //Realizando as conversões//
    if (moedaOrigem === 'Real') {
      if (moedaDestino === 'Dólar') {
          valorConvertido = valor * taxaRealParaDolar;
      } else if (moedaDestino === 'Euro') {
          valorConvertido = valor * taxaRealParaEuro;
      } else if (moedaDestino === 'Libra') {
        valorConvertido = valor * taxaRealParaLibra;
      } else {
        valorConvertido = valor;
      }
          
      
  } else if (moedaOrigem === 'Dólar') {
      if (moedaDestino === 'Real') {
          valorConvertido = valor * valorDolar;
      } else if (moedaDestino === 'Euro') {
          valorConvertido = valor * (valorDolar / valorEuro);
      } else if (moedaDestino === 'Libra'){
          valorConvertido = valor * (valorDolar / valorLibra);
      } else {
        valorConvertido = valor;
      }
  } else if (moedaOrigem === 'Euro') {
      if (moedaDestino === 'Real') {
          valorConvertido = valor * valorEuro;
      } else if (moedaDestino === 'Dólar') {
          valorConvertido = valor * (valorEuro / valorDolar);
      } else if (moedaDestino === 'Libra'){
          valorConvertido = valor * (valorEuro / valorLibra);
      } else {
        valorConvertido = valor;
      }
 
    } else if (moedaOrigem === 'Libra'){
        if(moedaDestino === 'Real'){
            valorConvertido = valor * valorLibra;
        } else if(moedaDestino === 'Dólar'){
            valorConvertido = valor * (valorLibra / valorDolar);
        } else if (moedaDestino === 'Euro'){
            valorConvertido = valor * (valorLibra / valorEuro);
        } else {
            valorConvertido = valor;

        }
    }
  resultadoElement.innerHTML = "Valor convertido " + valorConvertido.toFixed(2) + " " + moedaDestino;


  
}
