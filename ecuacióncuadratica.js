function calcularRaices(a, b, c) {
    const discriminante = b**2 - 4*a*c;
    const raiz1 = (-b + Math.sqrt(discriminante)) / (2*a);
    const raiz2 = (-b - Math.sqrt(discriminante)) / (2*a);
    return [raiz1, raiz2];
  }
  
  // Ejemplo de uso:
  const a = 6;
  const b = -19;
  const c = 7;
  const raices = calcularRaices(a, b, c);
  console.log(`Raíces: ${raices[0]} y ${raices[1]}`);