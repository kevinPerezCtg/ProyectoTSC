function dimensiones(medidas) {
    var area = medidas.ancho * medidas.largo;
    if (medidas.alto) {
        return "El area de tu casa es " + area + " y de alto " + medidas.alto;
    }
    else {
        return "El area de tu casa es " + area;
    }
}
console.log(dimensiones({ ancho: 10, largo: 12, alto: 3 }));
console.log(dimensiones({ ancho: 15, largo: 14 }));
