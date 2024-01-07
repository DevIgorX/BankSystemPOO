import { Cliente } from "./Cliente"

export type tipoConta = {
     saldo: number,
    numero: string,
     agencia: number,
     senha: string,
     cliente: Cliente
}


export abstract class ContaBancaria {

    protected saldo: number
    public numero: string
    public agencia: number
    protected senha: string
    public cliente: Cliente

constructor(contabancaria: tipoConta){
   this.saldo = contabancaria.saldo
   this.numero = contabancaria.numero
   this.agencia = contabancaria.agencia
   this.senha = contabancaria.senha
   this.cliente = contabancaria.cliente
   


    // Object.assign(this,contabancaria) //primeiro objeto de destino, segundo objeto de origem - ele pega todos os valores das propriedades do objeto de origem e transfere para as propriedades do objeto de destino que sejam equivalentes
}

consultarSaldo(senha: string):string{
    if(this.senha === senha){
        return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}` //retorna o valor em centavos com duas casas decimais
    }

    return 'Senha inválida'
}

abstract depositar(valor:number): string
abstract sacar(valor:number , senha: string): string


}