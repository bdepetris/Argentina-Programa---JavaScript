function balancesPositivos(balancesDeUnPeriodo) {
    let balances = [];
    for (let balance of balancesDeUnPeriodo) {
      if(balance.ganancia > 0) {
        agregar(balances, balance);
      }
    }
    return balances;
  }
  