import math

def calcular_distancia(x1, y1, x2, y2):
  return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

punto1 = (1, 2)
punto2 = (4, 6)

distancia = calcular_distancia(punto1[0], punto1[1], punto2[0], punto2[1])
print(distancia)  # Imprime la distancia entre los dos puntos