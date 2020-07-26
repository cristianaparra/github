// Antes de ES6

function newFunction(name,age,country) {
    var name = name || 'oscar';
    var age = name || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}
 // es6

 function newFunction2(name = 'oscar', age = 32, country = 'MX') {
     console.log(name, age, country);
 }
  //para llamar la funcion hay dos formas:
 // para el primer caso, hay funciones que toman los atributos por si mismos, entonces se pueden dejar vacias

 newFunction2();
 newFunction2( 'Ricardo', '32', 'CO');

// concatencaiones antes es6

 let hello = "hello";
 let world = "world";
 let epicPhrase = hello + ' ' + world; 
 console.log(epicPhrase);

 //ahora, con los templates se hjace mas facil concatenar, es necesario ubicar  las comillas francesas que son estas ``
 // `${}` este valor nos trae la variable a la concatenacion
 let epicPhrase2 =  `${hello} ${world}`;
 console.log(epicPhrase2);

 // antes de sc6
 let hola = "antigua forma d ejuntar 2 textos \n" + "esta es el segundo texto";


 //en sc6 funciona mucho mejor ya que se da un enter y comillas francesas
 let hola2 = `esta es una frase, pero le falta otra
 esta es la otra frase`;

 console.log(hola);
 console.log(hola2);

 // Destructuración de elementos:

//Antes los objetos podía ser creados así:

let person ={
    'name':'Alejandro',
    'nick':'Etrx',
    'num':'12314125'
};

//Si queríamos llamar  lo que componía ese objeto utilizabamos:
console.log(person.name, person.nick, person.num);

//Ahora con la destrucción de elementos, sucede una especie de resumen, donde se extrae un factor común del nombre del objeto, así:
let {name, nick, num} = person;

//Si queremos llamar  lo que compone este objeto utilizamos en ES6:
console.log(name, nick);

//Operador de prolongación: Permite expandir varios elementos. Tenemos varios elementos en arreglos que queremos unir en un solo elemento para presentarlos.

let conjunto1= ['a','b','c'];
let conjunto2= ['x','y','z'];

let conjunto_union=['l', 'm', 'n', ...conjunto1, ...conjunto2]
console.log(conjunto_union);

//Asiganciones mediante let se pueden inicilizar variables  cuyo scope está solo en el bloque de código en el que está llamada, en otras palabras, solo puede existir las variables let dentro de las llaves en que se llaman. Var se seguirá usando para variables globales y locales.