function exibeNome(id, name) {
    document.getElementById(id).innerHTML = name
}

// let personagens = ['Mestre Yoda', 'C3PO', 'Princesa Leia', 'Luke Skywalker', 'Chewbacca', 'Hansolo', 'R2D2', 'Dart Vader', 'Bruno Empke']

let personagens = {
    Yoda: {
        nome: "Mestre Yoda",
        idade: 250,
        jedi: true
    },
    C3PO: {
        nome: "C3PO",
        idade: 80,
        jedi: false
    },
    Leia: {
        nome: "Princesa Leia",
        idade: 28,
        jedi: false
    },
    Luke: {
        nome: "Luke Skywalker",
        idade: 30,
        jedi: true
    },
    Chewbacca: {
        nome: "Chewbacca",
        idade: 200,
        jedi: false
    },
    Hansolo: {
        nome: "Hansolo",
        idade: 40,
        jedi: true
    },
    R2D2: {
        nome: "R2D2",
        idade: 40,
        jedi: false
    },
    Vader: {
        nome: "Dart Vader",
        idade: 60,
        jedi: false
    },


    mostraIdade: function () {
        console.log(`A idade do ${this.Yoda.nome} é: ${this.Yoda.idade}`)
    }
}

let users = {
    Admin: {
        "nome": "Bruno Empke"
    }
}

personagens.mostraIdade()

exibeNome('user', users.Admin.nome)
exibeNome('c3po', personagens.C3PO.nome)
exibeNome('leia', personagens.Leia.nome)
exibeNome('luke', personagens.Luke.nome)
exibeNome('chewbacca', personagens.Chewbacca.nome)
exibeNome('hansolo', personagens.Hansolo.nome)
exibeNome('r2d2', personagens.R2D2.nome)
exibeNome('vader', personagens.Vader.nome)
exibeNome('yoda', personagens.Yoda.nome)


// for (let i = 0; i < personagens.length; i++) {
//     console.log(personagens[i]);
// }