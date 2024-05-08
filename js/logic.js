// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixa eletrônicos
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito.



// CT001: Saque com sucesso

// Dado que meu saldo é de R$1000
// Quando faco um saque de R$500
// Então o valor do saque deve ser deduzido do meu saldo


// CT002: Saque com valor superior ao saldo

// Dado que meu saldo é de R$1000
// Quando faco um saque de R$1100
// Então não deve deduzir no meu saldo
// Deve demonstrar uma mensagem de alerta informando que o valor é superior ao saldo


// CT003: Saque com valor limite

// Dado que meu saldo é de R$1000
// E o valor limite por operacao é de R$700
// Quando faco um saque de R$710
// Então não deve deduzir do meu saldo
// Deve demonstrar uma mensagem de alerta informando que o valor é superior ao limite permitido para saque.

let saldo = 600
let limite = 700

function saque(valor) {
    if (valor <= limite) {
        if (valor <= saldo) {
            saldo -= valor
            saldoAtual = saldo
            return `Você sacou: ${valor} e seu saldo agora é: ${saldoAtual}.`
        }
        else {
            return `O valor desejado: R$${valor} é maior do que o saldo atual que é: R$${saldo}.`
        }
    }
    else {
        return `O valor desejado: R$${valor} é maior do que o limite de saque permitido que é: R$${limite}.`
    }
}

console.log(saque(699))