function calcularDistancia(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }
  
  let punto1 = { x: 1, y: 2};
  let punto2 = { x: 4, y: 6 };
  
  let distancia = calcularDistancia(punto1.x, punto1.y, punto2.x, punto2.y);
  console.log(distancia); // Imprime la distancia entre los dos puntos