import { ContaBancaria, tipoConta } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {
    
        protected taxaRendimento: number

        constructor(contabancaria:tipoConta ){
            super(contabancaria)
            this.taxaRendimento = 0.05
        }
    
    depositar(valor: number): string {

        this.saldo += valor + (valor * this.taxaRendimento)

        return `Saldo: R$ ${(this.saldo /100).toFixed(2)}`

    }


    sacar(valor: number, senha: string): string {

        if(this.senha !== senha){
            return 'senha invalida'
        }

        if(valor > this.saldo) {
             return 'saldo insuficiente'
        }

        this.saldo -= valor 

        return`Saldo: R$ ${(this.saldo /100).toFixed(2)}`

    }

}