/*
    JS * Calculadora em JavaScript
    nicollasfeitosa.com

    o sinal += concatena os valores que seria igual ao codigo:
    var valor_campo = document.getElementById('resultado').value
    document.getElementById('resultado').value = valor_campo + valor
*/

function calcular(tipo, valor) {
    if (tipo === 'acao') {
        // Verifica se a ação é identico a C
        if (valor === 'c') {
            // Limpar o visor de resultados
            document.getElementById('resultado').value = ''
        }
        // Verifica se é uma operação e imprime esse valor(string de operação) no input
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        }
        // Faz o processamento dos resultados usando o eval
        if (valor === '=') {
            // obtem o valor do input e com o eval converte de string para aritimetica
            var valor_campo = eval(document.getElementById('resultado').value)
            
            console.log(valor_campo) // Apenas para debug

            // Se o campo for igual a undefined nao mostre a variavel
            if (valor_campo == null) {
                document.getElementById('resultado').value = ''
            } else {
                // Mostra o resultado no campo
                document.getElementById('resultado').value = valor_campo
            }            
        }
    } else if (tipo === 'valor') {
        // Se o tipo for igual a valor(numero) imprime e concatena o numero na tela
        document.getElementById('resultado').value += valor
    }
}