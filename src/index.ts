import { Cliente } from "./Cliente";
import { ContaBancaria } from "./ContaBancaria";
import { ContaCorrente } from "./ContaCorrente";

const tauam = new Cliente({
    nome: "Tauam igor",
    email: 'tauamigor@gmail.com',
    cpf: '1234567800'
})


const kimberly = new Cliente({
    nome: "kimberly dias",
    email: 'kimdias@gmail.com',
    cpf: '1234567801'
})


const tauamContaCorrente = new ContaCorrente({
        saldo: 50000, 
        numero: '123', 
        agencia: 1234 ,
        senha: '12345',
        cliente: tauam
})




console.log(tauamContaCorrente.depositar(30000))
console.log(tauamContaCorrente.sacar(25000 , '12345'));







