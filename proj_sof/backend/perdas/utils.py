import math

#Função responsável por calcular a distaância entre as coordenadas geograficas
def calc_dist(lat1, lng1, lat2, lng2):
    R = 6373.0

    lat1 = math.radians(lat1)
    lat2 = math.radians(lat2)
    lng1 = math.radians(lng1)
    lng2 = math.radians(lng2)

    distLong = lng2 - lng1
    distLat = lat2 - lat1

    ptA = math.sin(distLat/2)**2 + \
          math.cos(lat1) * math.cos(lat2) * \
          math.sin(distLong/2)**2
    
    ptB = 2 * math.atan2(math.sqrt(ptA), math.sqrt(1-ptA))  

    dist = R * ptB

    return dist    #o Retorno é dado em km