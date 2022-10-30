 /*   function Pessoa(){
        this.nome = "willian";
    }

    var pessoa = new Pessoa();
    var pessoa2 = new Pessoa();

    pessoa.nome = "João";

    alert(pessoa2.nome); */

    function Animal(nome,peso){
        if(nome == undefined){
            nome = 'Cachorro';
        }

        if(peso == undefined){
            peso = '5KG';
        }
        this.nome = nome;
        this.peso = peso;
    }

    animal = new Animal('gato');

    alert(animal.nome);