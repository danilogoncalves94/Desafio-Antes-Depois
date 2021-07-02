function antecessorSucessor() {
    let numero = prompt('Digite um numero inteiro qualquer.')
    if (numero.length == 0) {
        alert('Por favor, digite um número inteiro válido.')
    } else {
        let numeroReal = parseInt(numero)
        if (isNaN(numeroReal)) {
            alert('Por favor, digite um número inteiro válido.')
        } else {
            let antecessor = numeroReal - 1
            let sucessor = numeroReal + 1
            alert(`Antes de ${numeroReal}, temos o número ${antecessor}.`)
            alert(`Depois de ${numeroReal}, temos o número ${sucessor}.`)
        }
    }
}