function meConviene(pulgadas, memoria) {
    return pulgadas >= 32 && memoria >= 8 && cuantoCuesta(pulgadas, memoria) < 6000 ;
  }