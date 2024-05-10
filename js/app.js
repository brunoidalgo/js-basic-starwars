const LIST = [
    {
        id: 1,
        nome: 'C3PO',
        avatar: 'images/c3po.png'
    },
    {
        id: 2,
        nome: 'Princesa Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 3,
        nome: 'Luke Skywalker',
        avatar: 'images/luke.png'
    },
    {
        id: 4,
        nome: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 5,
        nome: 'Hansolo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 6,
        nome: 'R2D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 7,
        nome: 'Dart Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 8,
        nome: 'Mestre Yoda',
        avatar: 'images/yoda.png'
    }
]


const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Bruno Empke',
        characters: LIST,
        searchName:''
    },
    methods: {
        like(name) {
            alert(`O Personagem ${name} recebeu um like!`)
        },

        remove(id) {
            const list = this.characters;

           const result = list.filter(item => {
                return item.id !== id;
            })

            this.characters = result;
        },
        search() {


            if (this.searchName == '') {
              return alert('Campo de busca é obrigatório.')  
            }

            const list = this.characters = LIST

            const result = list.filter(item => {
                return item.nome === this.searchName
            })

                if (result.lenght <= 0) {
                    alert("Nenhum registro encontrado");
                } else {
                    this.characters = result
                }
        }
    }
})