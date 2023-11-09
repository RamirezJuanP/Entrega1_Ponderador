// PROMEDIO CURSO DE MATEMATICAS
let totalNota = 0;
let totalPorcentaje = 0;
let continuar;

do{
    var NOTA_SUMA = parseFloat(prompt("ingresar nota: "));
    const PORCENTAJE_SUMA = parseInt(prompt("ingrese el pocentaje de la nota: "));
    
    if(!isNaN(NOTA_SUMA) || !isNaN(PORCENTAJE_SUMA)){
        totalNota += NOTA_SUMA * (PORCENTAJE_SUMA / 100);
        totalPorcentaje += PORCENTAJE_SUMA;
        continuar = prompt("desea continuar, ingresar un 'SI' o 'NO' dependiendo del caso").toLocaleLowerCase();
        if(totalPorcentaje > 100 || NOTA_SUMA > 5.0){
            break;
        }
    }else{
        alert("ingrese valores validos");
        continuar = "si";
    }
} while (continuar === "si")
if(totalPorcentaje > 100 || NOTA_SUMA > 5.0){
    alert("HAY UN ERROR EN LOS DATOS INGRESADOS");
}else {
    console.log("en el " + totalPorcentaje + "% de la materia, tienes una nota de " + totalNota)
}



