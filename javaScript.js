    function Pessoa(){
        this.nome = "willian";
    }

    var pessoa = new Pessoa();
    var pessoa2 = new Pessoa();

    pessoa.nome = "João";

    alert(pessoa2.nome);