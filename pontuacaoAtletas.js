let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];


    let nomesAtletas = 0;
    let atletasMedia = 0;
    let notasObtidas = 0;

    nomesAtletas = atletas.map(function(nomes){
        return nomes.nome;
    })
    console.log(nomesAtletas);
    
    notasObtidas = atletas.map(function(notas){
       let total = notas.notas;
       total.sort(function(a,b){
        return a - b;
       })
       return total;
    })
    /*
    notasObtidas = atletas.map(function(nota){
        return nota.notas;
    })
    */
    console.log(notasObtidas);

    for (let i = 0; i < atletas.length; i++){
        switch(i){
            case i:
                console.log(`Atleta: ${nomesAtletas[i]}`);
                console.log(`Notas Obtidas: ${notasObtidas[i]}`);
                let notasAtleta = notasObtidas[i].slice(1, notasObtidas[i].length - 1)
                let soma = notasAtleta.reduce(function(total,atual){
                    return total + atual;
                })
                let atletasMedia = soma / notasAtleta.length
                console.log(`Média Válida: ${atletasMedia.toFixed(2)}`);
                console.log();
                break
            default:
            }
    }

