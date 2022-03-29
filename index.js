const {edGalho, edFolha} = require('./arrays');
function juntaListas(Lista1, Lista2) {
    let listaFinal = [];
    let actpos1 = 0;
    let actpos2 = 0;
    
    while (actpos1 < Lista1.length && actpos2 < Lista2.length) {
        let actprod1 = Lista1[actpos1];
        let actprod2 = Lista2[actpos2];

        if (actprod1.preco < actprod2.preco) {
            listaFinal.push(actprod1);
            actpos1++;
            
            
        } else {
            listaFinal.push(actprod2);
            actpos2++;
           
        }
    }    

        if(actpos1 < Lista1.length) {
           let resLista1 = Lista1.slice(actpos1);
           listaFinal = listaFinal.concat(resLista1);
           
        } 
        if(actpos2 < Lista2.length) {
            let resLista2 = Lista2.slice(actpos2);
            listaFinal = listaFinal.concat(resLista2);
            
         } 
        
return listaFinal;   
}

console.log(juntaListas(edFolha, edGalho))