//declarar matrices perfectas
const cont = 10;
const array = new Array(cont);
for (let i = 0; i < cont; i++) {
   array[i] = new Array(cont).fill(null);
}

let signo="@@";
//letra J
array[0][2] = signo;
array[0][3] = signo;
array[0][4] = signo;
array[1][2] = signo;
array[1][3] = signo;
array[1][4] = signo;
array[2][3] = signo;
array[3][3] = signo;
array[4][3] = signo;
array[5][3] = signo;
array[6][3] = signo;
array[7][3] = signo;
array[8][1] = signo;
array[8][2] = signo;
array[8][3] = signo;
array[9][1] = signo;
array[9][2] = signo;
array[9][3] = signo;

//letra S
array[0][6] = signo;
array[0][7] = signo;
array[0][8] = signo;

array[1][6] = signo;
array[1][7] = signo;
array[1][8] = signo;
array[2][6] = signo;
array[3][6] = signo;
array[4][6] = signo;
array[4][7] = signo;
array[4][8] = signo;

array[5][6] = signo;
array[5][7] = signo;
array[5][8] = signo;
array[6][8] = signo;
array[7][8] = signo;
array[8][6] = signo;
array[8][7] = signo;
array[8][8] = signo;

array[9][6] = signo;
array[9][7] = signo;
array[9][8] = signo;

console.log(array);


//Libreria matematica
let raiz_cuadrada = Math.sqrt(25);
console.log("raiz cuadrada de 25 "+raiz_cuadrada);

let raiz_cubica = Math.cbrt(27);
console.log("raiz cubica de 27 "+raiz_cubica);

let numero_mayor = Math.max(0,52,83,1000,53400,5,9);
console.log("numero mayor "+numero_mayor);

let numero_menor = Math.min(9,5,8,100,500,5,9);
console.log("numero menor "+numero_menor);

for (let i = 0; i < 10; i++) {
    let aleatorio = Math.random()*100;
    document.write(Math.trunc(aleatorio)+"<br>");
}

let aleatorio = Math.random()*100;
document.write(" Numero aleatorio <br>"+aleatorio.toString());
document.write("<br> Redondear despues de 5<br>"+Math.round(aleatorio));
document.write("<br> Redondear antesde de 5<br>"+Math.floor(aleatorio));
document.write("<br> Tomar el numero entero<br>"+Math.trunc(aleatorio));


console.log("Math.PI");
console.log(Math.PI);
console.log("Math.SQRT1_2");
console.log(Math.SQRT1_2);
console.log("Math.SQRT2");
console.log(Math.SQRT2);
console.log("Math.E");
console.log(Math.E);
console.log("Math.LN2");
console.log(Math.LN2);
console.log("Math.LN10");
console.log(Math.LN10);
console.log("Math.LOG2E");
console.log(Math.LOG2E);
console.log("Math.LOG10E");
console.log(Math.LOG10E);
console.log("Math.pow");
console.log(Math.pow(5, 2));






// Metodo de relleno con lista

// let array = new Array(5).fill(()=>{return `USUARIO NO ENVIO NADA`;});

// array.fill("miguel",1,4);

// let id = 3;

// if(typeof(array[id])!="function"){
//     console.log(array[id]);
// }else{
//     console.log(array[id]());
// }














