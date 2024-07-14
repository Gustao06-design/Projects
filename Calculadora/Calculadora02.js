function insert(num)
      {
         var numero = document.getElementById('resultado').innerHTML; // Insere o número//
         document.getElementById('resultado').innerHTML = numero + num; // Insere um novo número junto com o outro//
      }
      function clean()
      {
        document.getElementById('resultado').innerHTML = ""; // Apaga tudo no resultado//
        
      }
      function back()
      {
         var resultado = document.getElementById('resultado').innerHTML;
         document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1) // Vê todos caracteres dentro de <p> e apaga o último valor//

      }
      
      function porcentagem(){
      try{
         var resultado = document.getElementById('resultado').innerHTML
         var result;
            
         if (resultado.includes('%')){
            const parts = resultado.split('%');
            const num = parseFloat(parts[0]);
            const porcent = parseFloat(parts[1]);
            result = (num * porcent) / 100;
         }else{
            result = eval(resultado);
         }
         result = Math.round((result + Number.EPSILON) * 100) / 100;
         document.getElementById('resultado').innerHTML = result;
      }catch (error) {
        document.getElementById('resultado').innerHTML = 'Erro';

      }
      
     }
      
   
      function calcular()
      {
         var resultado = document.getElementById('resultado').innerHTML;
         if(resultado)
         {
            document.getElementById('resultado').innerHTML = eval(resultado); // Se tiver algo em 'resultado' // //Eval - avalia a cadeia e retorna seu valor//
         }else{
            document.getElementById('resultado').innerHTML = "Nada para calcular" //Se não tiver nada em 'resultado'//
         }
         
         
      }
      
   
  