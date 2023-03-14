let faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  }
  let valorTotal = Object.values(faturamento).reduce((total, valor) => total + valor, 0)
  let percentuais = {}
  for (let estado in faturamento) {
    if (faturamento[estado] > 0) {
      percentuais[estado] = ((faturamento[estado] / valorTotal) * 100).toFixed(2) + "%"
    }
  }

  console.log(percentuais)
  