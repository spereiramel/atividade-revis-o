function somar(event) {
    event.preventDefault()

    const numero1 = document.querySelector("#numero-1").valueAsNumber
    const numero2 = document.querySelector("#numero-2").valueAsNumber

    const soma = numero1 + numero2

    const paragrafoResultado = document.querySelector("#resultado")
    paragrafoResultado.innerHTML = `Soma: ${soma}`
}

