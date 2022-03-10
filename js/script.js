function buscaCep() {
    const inputCep = document.querySelector('.campo-cep')
    const cep = inputCep.value.replace('-', '')

    const url = `http://viacep.com.br/ws/${cep}/json`

    fetch(url)
        .then(dados => dados.json())
        .then(d => preencheTabela(d))
        .catch(e => console.log(e))
}

function preencheTabela(json) {
    document.querySelector('.td-logradouro').innerHTML = json.logradouro
    document.querySelector('.td-bairro').innerHTML = json.bairro
    document.querySelector('.td-cidade').innerHTML = json.localidade
    document.querySelector('.td-uf').innerHTML = json.uf
}

const botaoBuscar = document.querySelector('.botao-buscar')

botaoBuscar.onclick = e => {
    e.preventDefault()
    buscaCep()
}