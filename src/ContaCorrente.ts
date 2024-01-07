import { ContaBancaria, tipoConta } from "./ContaBancaria";


export class ContaCorrente extends ContaBancaria {

    protected limite: number

    constructor(contabancaria: tipoConta) {
        super(contabancaria)
        this.limite = 100000
    }

    depositar(valor: number): string {
        this.saldo += valor
        return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}`

    }

    sacar(valor: number, senha: string): string {

        if (this.senha !== senha) {
            return 'Senha invalida'

        }

        if (valor > this.limite + this.saldo) {
            return 'saldo insuficiente'
        }

        // for (let index = 0; index < array.length; index++) {
        //     const element = array[index];

        // }

        this.saldo -= valor
        return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}`

    }
}
