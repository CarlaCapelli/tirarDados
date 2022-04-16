let dado = document.getElementById("tirar");
let d1 = document.getElementById("uno");
let d2 = document.getElementById("dos");
let cSiete = document.getElementById("cantSiete");
let totalSuma = document.getElementById("total");
let igual = document.getElementById("igu");
let suma: number = 0;
let sumaT: number = 0;
let siete: number = 0;
let iguales: number = 0;
function tirarDados(): void {
  for (let i: number = 0; i < 1000; i++) {
    let dado1: number = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    let dado2: number = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    d1.innerHTML = dado1;
    d2.innerHTML = dado2;

    suma = dado1 + dado2;
    if (suma === 7) {
      siete++;
    }
    sumaT = sumaT + suma;

    if (dado1 === dado2) {
      iguales++;
    }
  }

  igual.innerHTML = "La cantidad de veces que salieron iguales es  " + iguales;
  totalSuma.innerHTML = "La suma total es de " + sumaT;
  cSiete.innerHTML = "La cantidad de veces que salio siete es " + siete;
}
dado.addEventListener("click", tirarDados);
