let duracionTrabajo = parseInt(prompt("cuantos minutos deseas trabajar"));
let duracionDescanso = parseInt(prompt("cuantos minutos deseas descansar"));
let numeroDePomodoros = parseInt(prompt("¿cual va ser tu meta? Dime el numero de pomodoros que vas a cumplir")); //PROXIMAMENTE
    
function pomodoro(duracionTrabajo, duracionDescanso){
    console.log("se inicio el pomodoro")

    const TRABAJO_MINUTOS = duracionTrabajo * 1000;
    const DESCANSO_MINUTOS = duracionDescanso *1000;

    for (let i = 1; i <= 3; i=(i+1)) {
        if (i === 1){
            console.log("Ciclo #" + i + " comenzado.");
            console.log("Ciclo #" + i + ": Trabajando...");
            setTimeout(function() {
                console.log("¡tu tiempo de trabajar culmino! Descansa unos minutos.");
            }, TRABAJO_MINUTOS)
            
            console.log("Ciclo #" + i + ": Descansando...");
            setTimeout(function() {
                console.log("¡Tu descanso se termino! Regresemos al trabajo.");
            }, DESCANSO_MINUTOS)
            console.log("Bien hecho, lograste compoletar tu pomodoro #" + i);
        }
        else if (i === 2){
            console.log("Ciclo #" + i + " comenzado.");
            console.log("Ciclo #" + i + ": Trabajando...");
            setTimeout(function() {
                console.log("¡tu tiempo de trabajar culmino! Descansa unos minutos.");
            }, TRABAJO_MINUTOS)
            
            console.log("Ciclo #" + i + ": Descansando...");
            setTimeout(function() {
                console.log("¡Tu descanso se termino! Regresemos al trabajo.");
            }, DESCANSO_MINUTOS)
            console.log("Bien hecho, lograste compoletar tu pomodoro #" + i);
        }
        else if (i === 3){
            console.log("Ciclo #" + i + " comenzado.");
            console.log("Ciclo #" + i + ": Trabajando...");
            setTimeout(function() {
                console.log("¡tu tiempo de trabajar culmino! Descansa unos minutos.");
            }, TRABAJO_MINUTOS)
            
            console.log("Ciclo #" + i + ": Descansando...");
            setTimeout(function() {
                console.log("¡Tu descanso se termino! Regresemos al trabajo.");
            }, DESCANSO_MINUTOS)
            console.log("Bien hecho, lograste compoletar tu tercer pomodoro !GENIAL¡");
        }
    }
}
pomodoro(duracionTrabajo, duracionDescanso);


/*
let duracionTrabajo = parseInt(prompt("cuantos minutos deseas trabajar"));
let duracionDescanso = parseInt(prompt("cuantos minutos deseas descansar"));
//let numeroDePomodoros = parseInt(prompt("¿cual va ser tu meta? Dime el numero de pomodoros que vas a cumplir"));
    
function pomodoro(duracionTrabajo, duracionDescanso){
    const TRABAJO_MINUTOS = duracionTrabajo * 1000;
    const DESCANSO_MINUTOS = duracionDescanso *1000;

    console.log("se inicio el pomodoro" + i)
    console.log("Ciclo #" + i + ": Trabajando...");
    setTimeout(function() {
        console.log("¡tu tiempo de trabajar culmino! Descansa unos minutos.");
    }, TRABAJO_MINUTOS)
    
    console.log("Ciclo #" + i + ": Descansando...");
    setTimeout(function() {
        console.log("¡Tu descanso se termino! Regresemos al trabajo.");
    }, DESCANSO_MINUTOS)
    console.log("Bien hecho, lograste compoletar tu pomodoro #" + i);

    for (let i = 1; i <= 3; i=(i+1)) {
        if (i === 1){
            pomodoro(duracionTrabajo, duracionDescanso);
        }


        else if (i === 2){
            pomodoro(duracionTrabajo, duracionDescanso);
        }


        else if (i === 3){
            pomodoro(duracionTrabajo, duracionDescanso);
            console.log("Bien hecho, lograste compoletar tu tercer pomodoro !GENIAL¡");
        }
    }
}
*/