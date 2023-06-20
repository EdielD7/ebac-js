let f = document.getElementById('fcompare')
f.addEventListener('submit', submeter)

let tnum1 = document.getElementById('txtnum1')
let tnum2 = document.getElementById('txtnum2')
let n1 = parseInt(tnum1)
let n2 = parseInt(tnum2)
function validar() {
    let valido = document.getElementById('validador')
    if (n1 < n2) {
        valido.innerHTML = '<p style="display:flex; text-align: center;">É VÁLIDO!</p>'
        valido.style.display='block'
    }
}