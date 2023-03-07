function intervaloDeNumeroAleatorio(a,b) {
    return Math.floor(Math.random () * (b - a + 1)) + a
}

console.log(intervaloDeNumeroAleatorio(0, 10))
console.log(intervaloDeNumeroAleatorio(555, 1111))
console.log(intervaloDeNumeroAleatorio(89, 431))