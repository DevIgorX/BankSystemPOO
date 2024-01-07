export type Endereco = {
    cep: string, 
    rua: string, 
    bairro: string, 
    cidade: string
}

export type TipoCliente = {
    nome: string, 
    email: string,
    cpf: string
}


export class Cliente {
    nome: string
    email: string   
    cpf: string
    dataCadastro: Date
    endereco: Endereco[]

    constructor(cliente: TipoCliente){
        this.nome = cliente.nome
        this.email = cliente.email
        this.cpf = cliente.cpf
        this.dataCadastro = new Date()
        this.endereco = []
    }


    adicionarEndereco(endereco: Endereco):void {
        this.endereco.push(endereco)
    }

}