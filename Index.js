/*Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada*/



                                 // PRIMEIRO CÓDIGO USADO

  /*class Heroi{
    constructor(Nome, Tipo, Ataque){
        this.Nome = Nome
        this.Tipo = Tipo
        this.Ataque = Ataque
    }
    idade = 25

    atacar(){
        console.log("O Herói " + (this.Nome) + " da classe " + (this.Tipo) + " Atacou usanda a " + (this.Ataque))
    }

  }

  let Hero = new Heroi("Dolan", "Guerreiro", "Espada")

  Hero.atacar()*/






                                      //SEGUNDO CÓDIGO USADO


  let Heroi = {
    nome: "Dolan",
    idade: 25,
    tipo: "Guerreiro",
    ataque: "Espada"
  }


  class Hero{
    atacar(){
        console.log(`O Herói ${Heroi.nome} da classe ${Heroi.tipo} atacou usanda a ${Heroi.ataque}`)
    }
  }

  let saitama = new Hero()

  saitama.atacar()
