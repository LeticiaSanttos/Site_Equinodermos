function modal(nome){
    console.log('funciona')
    var img = document.getElementById('image');
    if(nome === 'aste'){
        document.getElementById('staticBackdropLabel').innerHTML="Arteroidea";
        //img.setAttribute('src','https://image.freepik.com/vetores-gratis/desenho-de-aranha-engracado_49499-172.jpg')
        document.getElementById('content-modal').innerHTML="as estrela-do-mar tem cinco braços, porém algumas espécies podem ter até 40. Possuem grande capacidade de generação, através de um único braço, por exemplo, as estrelas são capazes de regenerar todo seu corpo desde que a parte do disco central esteja ligada a esse braço.";
    }
    else if(nome == 'ophi'){
        document.getElementById('staticBackdropLabel').innerHTML="Ophiuroidea";
        //img.setAttribute('src','https://st3.depositphotos.com/6633222/15252/v/450/depositphotos_152522110-stock-illustration-cute-blue-bird-cartoon-flying.jpg')
        document.getElementById('content-modal').innerHTML="Possuem um disco central de onde partem braços longos e flexíveis. Sua movimentação acontece através da ação dos seus braços, que fazem movimentos como uma serpente.";
    
    }
    else if(nome == 'echi'){
        document.getElementById('staticBackdropLabel').innerHTML="Echinoidea";
        //img.setAttribute('src','https://st3.depositphotos.com/6633222/15252/v/450/depositphotos_152522110-stock-illustration-cute-blue-bird-cartoon-flying.jpg')
        document.getElementById('content-modal').innerHTML="Nesse grupo encontram-se membros de corpo arredondado (ouriço-do-mar) e de corpo achatado (bolachas-da-praia). Não possuem braços, como os outros equinodermos. Os pés ambulacrais(pequenos túbulos com ventosas que funcionam como um  sistema de locomoção dos equinodermes.) estão organizados em cinco fileiras que permitem a movimentação lenta desses animais. Uma característica marcante nesse grupo é a chamada lanterna de Aristóteles, um aparelho raspador presente em ouriços-do-mar que se caracteriza pela presença de cinco placas calcárias. "
    }
    else if(nome == 'holo'){
        document.getElementById('staticBackdropLabel').innerHTML="Holothuroidea";
        //img.setAttribute('src','https://st3.depositphotos.com/6633222/15252/v/450/depositphotos_152522110-stock-illustration-cute-blue-bird-cartoon-flying.jpg')
        document.getElementById('content-modal').innerHTML="É um dos grupos mais distintos de equinodermos. Nesses animais o endoesqueleto é reduzido e seu corpo é alongado. Possuem cinco fileiras de pés ambulacrais, e algumas dessas estruturas estão modificadas como tentáculos ao redor da boca, ajudando esses animais em sua alimentação."
    }
    else{
        document.getElementById('staticBackdropLabel').innerHTML="Crinodea";
        //img.setAttribute('src','https://st3.depositphotos.com/6633222/15252/v/450/depositphotos_152522110-stock-illustration-cute-blue-bird-cartoon-flying.jpg')
        document.getElementById('content-modal').innerHTML="São equinodermos que lembram pequenas plantas. Alguns representantes desse grupo vivem aderidos ao substrato (lírios-do-mar), enquanto outros conseguem rastejar-se utilizando seus braços (penas-do-mar). A boca dos crinoides é voltada para cima, para uma região longe do substrato. Essa classe destaca-se por seus representantes possuírem uma morfologia que pouco mudou ao longo do tempo. Muitos fósseis, de cerca de 500 milhões de anos atrás, mostram a similaridade desses indivíduos com as espécies que viveram no passado."
    }
}