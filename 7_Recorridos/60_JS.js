function gananciasDeBalancesPositivos(balancesDeUnPeriodo) {
    return ganancias(balancesPositivos(balancesDeUnPeriodo));
  }
  function promedioDeBalancesPositivos(balancesDeUnPeriodo) {
    return promedio(gananciasDeBalancesPositivos(balancesDeUnPeriodo));
  }