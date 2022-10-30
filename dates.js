// var date = new Date();
    //alert(date.getDate());

    //alert(date.getDay());

    var date = new Date('10/20/2022');

    var date2 = new Date('10/25/2022');

    var diferenca = (date2.getTime() - date.getTime()) / (1000 * 3600 * 24);
    
    alert(diferenca);