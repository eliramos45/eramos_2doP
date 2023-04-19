let numeros=[17,19,21];


function sumarPuntosPar(entrada)
{
    let puntos = 0;
    for (let i = 0; i < entrada.length ; i++) 
    {
      if (entrada[i] % 2 === 0) 
      {
        puntos= puntos+ 2;
      }
    }
    return puntos;
  }
  
  function sumarPuntosImpar(entrada) {
    let puntos = 0;
    for (let i = 0; i < entrada.length; i++) 
    {
      if (entrada[i] % 2 == 1 && entrada[i] != 7) {
        puntos= puntos+ 1;
      }
    }
    return puntos;
  }

  function sumarPuntosNumero7(entrada) {
    let puntos = 0;
    for (let i = 0; i < entrada.length; i++) {
      if (entrada[i] == 7) {
        puntos += 3;
      }
    }
    return puntos;
  }

  function calcularPuntaje(entrada) {
    let puntosPar = sumarPuntosPar(entrada);
    let puntosImpar = sumarPuntosImpar(entrada);
    let puntosNumero7 = sumarPuntosNumero7(entrada);
    console.log(puntosPar + puntosImpar + puntosNumero7)
    
  }

calcularPuntaje(numeros); 
  


