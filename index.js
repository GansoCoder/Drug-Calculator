const input = document.getElementById('valor')
const label = document.getElementById('valor-calculado')

input.addEventListener('input', () => {
    label.textContent = "Valor de venda: " + (input.value * 1.6) + "$"
})