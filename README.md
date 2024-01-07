Backend TypeScript| Polimorfismo

Sistema Bancário

Implemente um sistema, utilizando o paradigma de orientação a objetos, que simule algumas funcionalidades de um sistema bancário, conforme as regras abaixo. 

1- Implemente uma classe "Cliente" de acordo com as informações: 

 *Atributos
  -nome
  -email
  -cpf
  -dataCadasatro(esse atributo deve ser um formato de data válido)
  -enderecos (esse atributo deve ser uma lista de endereços com as propriedades a seguir)
    - cep
    -rua 
    -bairro
    -cidade

com exeção dos atributos dataCatastro e enderecos, os demais são obrigatórios ao instanciar a classe

O atributo adataCadastro deverá receber a data atual no momento em que a classe é instanciada. 

A classe deverá implementar um método adiconarEndereco que recebe o endereço de acordo os atributos acima e adicone na lista de endereços. 

2- implemente uma classe "ContaBancaria" que receberá, obrigatoriamente, os atributos a seguir: 

   * Atributos
      - Saldo(esse atributo só deve ser acessado pela própria classe ou por subclasse que possa estende-la, jamais publicamente)
      - Numero 
      - Agencia
      - Senha (esse atributo só deve ser acessado pela própria classe ou por subclasse que possa estende-la, jamais publicamente)
      -Cliente(esse atributo deve receber um objeto, instacia da classe "Cliente")

  O saldo infomrado obrigatoriamente representa o saldo inicial da conta do cliente. 

  A classe deverá implmentar um método "consultarSaldo", que receba a senha e retornará o saldo no formato "Saldo: R$ 123,45" ou a mensagem de "senha invalida".Para que o saldo seja retornado, a senha passada como argumento deve ser extamente a mesma cadastrada para o cliente. 

  A classe deverá exigir que dois métodos sejam implementados em subclasse que possa estende-la.
  "depositar" que recebe um valor a ser depositado e "sacar" que recebe o valor a ser sacado e uma senha. 
  Não é necessário implementar os métodos na classe "ContaBancaria", pois ela nunca poderá ser instanciada. Ambas terá o slado retornado da seguinte forma: "Saldo: R$ 123,45"

3- implemente uma classe "ContaCorrente" que herda as características e funcionalidades da classe "ContaBancaria", com as seguintes particularidades: 

Deverá existir um atributo chamado "Limite" que deverá receber o valor de R$ 1000,00 convertidos para centavos, ao criar um objeto. Esse atributo deverá ser exclusivo da classe ContaCorrete e não óderá ser acessado publicamente. 

Deverá impelmentar os métodos obrigatórios da superclasse, seguindo as seguntes regras: 
 
a) o método "depositar" deverá incrementar o valor recebido como argumento ao saldo do cliente e retornar o saldo conforme solicitado anterirormente. 

b) o método sacar deverá seguir as seguintes obrigatoriedades:

- Validar se a senha recebida como argumento é extamente a mmesma cadastrada para o cliente. 
- Verificar se o valor a ser sacado está disponível. O valor disponível na conta corrente dever se a soma do limite com o slado do cliente. 
- Subtrair o valor recebido como argumento do saldo do usuário, caso as regras anteriores estejam validadas e retornar o saldo  conforme solicitado anteriormente. 

4 - implemente uma classe "ContaPoupanca" que herda as características e funcionalidades da classe "ContaBancaria", com as seguintes particularidades: 

Deverá existir um atributo chamando "taxaRendimento" que deverá receber o valor de 0.05  que representará 5% de taxa de rendimento, ao criar um objeto. Esse atributo deverá ser exclusivo da classe "ContaPoupanca" e não poderá ser acessado publicamente. 

a) o método depositar deverá incrementar o valor recebido como arguento no saldo do cliente, acrescido do valor da taxa de rendimento com abase no valor depositado e retornar o saldo conforme solicitado anteriormente. 

b) o método "sacar" deverá ser implementado conforme a classe "ContaCorrente", com exceção do limite que não existirá na classe "ContaPoupanca"

Teste do sistema. 

Crie ao menos dois clientes e cadastre uma conta bancária para cada um deles, sendo uma poupana e uma corrente. 



