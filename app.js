//Prueba de enlace JS
alert("¡Si enlaza!");
//Conseguir la palabra desde HTML para declararla y convertirla a Mayúsculas
const offset = document.getElementById("key");
console.log(offset);
//Función para Encriptar
function encriptarPalabra(encriptarPalabra) {
let codexPalabra ="";
let codex=document.getElementById("encriptar").nodeValue.toUpperCase();
//Paso 1: Condicionar el bucle para obtener  la posición de la palabra introducida==> Tip: charCodeAt
for (let posicionA=0; posicionA<codex.length; posicionA++){
//Paso 2: Obtener de acuerdo a la posición obtenida, la nueva posición Ascii
let palabra = codex.charCodeAt(posicionA);
/*Paso 3: Aplicar la fórmula ((((x-65) + n) % 26) + 65) en donde:*/
/*x es la posición ASCII y n el "key" para codificar*/
let enCodex = ((((palabra-65)+ offset)%26)+65);
//Paso 4: Con la posición ASCII obtenida, devolver cadena obtenida ==> Tip: fromCharCode
let enCodexResultado = String.fromCharCode(enCodex);
//Paso 5: Imprime resultado en input de codificado
let imprimeResultadoCodex = document.getElementById("resultado").innerHTML = enCodexResultado;

}
};