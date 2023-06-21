let f = document.getElementById('fcompare')
f.addEventListener('submit', function(e) {
    e.preventDefault();
    let tnum1 = document.getElementById('txtnum1')
    let tnum2 = document.getElementById('txtnum2')
    let n1 = parseInt(tnum1.value)
    let n2 = parseInt(tnum2.value)
    let msg = document.getElementById('validador')
    if (n1 < n2) {
        msg.innerHTML = `Correto! O número ${n1} é menor que ${n2}.`;
        msg.style.display='block';
        msg.classList.remove('error');
        msg.classList.add('sucess')
    } else {
        msg.innerHTML = `O número ${n1} não é menor que ${n2}. Tente novamente!`
        msg.style.display = 'block';
        msg.classList.remove('sucess')
        msg.classList.add('error')
    }
})