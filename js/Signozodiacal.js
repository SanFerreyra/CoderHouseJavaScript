function traerSigno(dia, mes) {
    //aries desde Marzo 21	-hasta Abril 19
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        return "Aries";
    //tauro desde Abril 20-hasta Mayo 20
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        return "Tauro";
    //geminis desde Mayo 21-hasta Junio 20
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        return "Géminis";
    //cancer desde Junio 21-hasta Julio 22
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        return "Cáncer";
    //leo desde Julio 23-hasta Agosto 22 
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        return "Leo";
    //virgo desde Agosto 23-hasta Septiembre 22
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        return "Virgo";
    //libra desde Septiembre 23-hasta Octubre 22
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        return "Libra";
    //escorpio desde Octubre 23-hasta Noviembre 21
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        return "Escorpio";
    //sagitario  desde Noviembre 22-hasta Diciembre 21 
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        return "Sagitario";
    //capricornio desde Diciembre 22-hasta Enero 19
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        return "Capricornio";
     //acuario desde Enero 20- hasta	Febrero 18
    } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        return "Acuario";
     //piscis desde Febrero 19 -hasta Marzo 20
    } else {
        return "Piscis";
    }
  }
  
  // dia y mes de nacimiento
  let diaNacimiento = parseInt(prompt("Ingrese el día de nacimiento (1-31):"));
  let mesNacimiento = parseInt(prompt("Ingrese el mes de nacimiento (1-12):"));
  
  // llama a la funcion y muestra el signo correspondiente
  let signo = traerSigno(diaNacimiento, mesNacimiento);
  alert(`Bienvenido!!!Tu signo zodiacal es ${signo}`);
  