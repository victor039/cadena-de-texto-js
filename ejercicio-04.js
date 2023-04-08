let nombre = "Victor";
let apellido = "Vergara";
let estudiante =`estudiante ${nombre} ${apellido}` 
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let cantLetras = estudiante.length; 
let primeraLetra = nombre.charAt(0);
let ultimaLetraApellido = apellido.charAt(apellido.length -1);
let estudianteSinEspacios = estudiante.replace(/\s+/g, "");
let nombreEnEstudiante = estudiante.includes(nombre);

console.log(nombreEnEstudiante);