function tabuada() {
    let num = document.getElementById('numero');
    let tab = document.getElementById('tabela');   
        
    if (num.value.length == 0) {
        window.alert('Digite um número válido!');
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = ''; // Apaga o conteudo dentro da tabela antes de efetuar novo cálculo.

        while (c <= 10) {
            let item = document.createElement('option');  // Cria novo item HMTL que no caso é option.
            item.text = `${n} x ${c} = ${n*c}`;           // Cria o texto que será mostrado.     
            tab.appendChild(item);                        // Faz com que o item apareça sendo elemento filho de tab.                         
            c++
        }
    }
}

// Nesse exemplo foi possível aprender criar um novo item para o select.
   