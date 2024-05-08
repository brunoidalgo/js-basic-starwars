function exibeNome(id, name) {
    document.getElementById(id).innerHTML = name
}

let personagens = ['Mestre Yoda', 'C3PO', 'Princesa Leia', 'Luke Skywalker', 'Chewbacca', 'Hansolo', 'R2D2', 'Dart Vader', 'Bruno Empke']


exibeNome('c3po', personagens[1])
exibeNome('leia', personagens[2])
exibeNome('luke', personagens[3])
exibeNome('chewbacca', personagens[4])
exibeNome('hansolo', personagens[5])
exibeNome('r2d2', personagens[6])
exibeNome('vader', personagens[7])
exibeNome('yoda', personagens[0])
exibeNome('user', personagens[8])


for (let i = 0; i < personagens.length; i++) {
    console.log(personagens[i]);
}