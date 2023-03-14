let dados = [
	{"dia": 1,"valor": 22174.1664},
	{"dia": 2,"valor": 24537.6698},
	{"dia": 3,"valor": 26139.6134},
	{"dia": 4,"valor": 0.0},
	{"dia": 5,"valor": 0.0},
	{"dia": 6,"valor": 26742.6612},
	{"dia": 7,"valor": 0.0},
	{"dia": 8,"valor": 42889.2258},
	{"dia": 9,"valor": 46251.174},
	{"dia": 10,"valor": 11191.4722},
	{"dia": 11,"valor": 0.0},
	{"dia": 12,"valor": 0.0},
	{"dia": 13,"valor": 3847.4823},
	{"dia": 14,"valor": 373.7838},
	{"dia": 15,"valor": 2659.7563},
	{"dia": 16,"valor": 48924.2448},
	{"dia": 17,"valor": 18419.2614},
	{"dia": 18,"valor": 0.0},
	{"dia": 19,"valor": 0.0},
    {"dia": 20,"valor": 35240.1826},
	{"dia": 21,"valor": 43829.1667},
	{"dia": 22,"valor": 18235.6852},
	{"dia": 23,"valor": 4355.0662},
	{"dia": 24,"valor": 13327.1025},
	{"dia": 25,"valor": 0.0},
	{"dia": 26,"valor": 0.0},
    {"dia": 27,"valor": 25681.8318},
	{"dia": 28,"valor": 1718.1221},
	{"dia": 29,"valor": 13220.495},
	{"dia": 30,"valor": 8414.61}
]

/*  O menor valor de faturamento ocorrido em um dia do mês; */
let menorValor = Number.MAX_SAFE_INTEGER
let diaMenorValor = 0
for (let i = 0; i < dados.length; i++) {
  const dia = dados[i].dia
  const valor = dados[i].valor
  
  if (valor !== 0 && valor < menorValor) {
    menorValor = valor
    diaMenorValor = dia
  }
}
console.log(`O menor valor de faturamento ocorreu no dia ${diaMenorValor} e foi de ${menorValor}`)

/*  O maior valor de faturamento ocorrido em um dia do mês; */
let maiorValor = Number.MIN_SAFE_INTEGER
let diaMaiorValor = 0

for (let i = 0; i < dados.length; i++) {
  const dia = dados[i].dia
  const valor = dados[i].valor
  
  if (valor > maiorValor) {
    maiorValor = valor
    diaMaiorValor = dia
  }
}
console.log(`O maior valor de faturamento ocorreu no dia ${diaMaiorValor} e foi de ${maiorValor}`)


/* Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. */
let total = 0
let diasValidos = 0
for (let i = 0; i < dados.length; i++) {
  if (dados[i].valor !== 0) {
    total += dados[i].valor
    diasValidos++
  }
}
let mediaMensal = total / diasValidos
let diasAcimaDaMedia = 0
let dias = []
for(let i = 0; i<dados.length; i++){
    if(dados[i].valor > mediaMensal){
        diasAcimaDaMedia++
        dias.push(` Dia: ${dados[i].dia}`)
    }
}
console.log(`Teve um total de ${diasAcimaDaMedia} dias que foram acima da média mensal e esses dias foram: ${dias}`)