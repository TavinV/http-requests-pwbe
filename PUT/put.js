const idInput = document.getElementById('identificador')
const nomeInput = document.getElementById('nome-atualizado')
const idadeInput = document.getElementById('idade-atualizada')

function buscarDados(){
    const id = idInput.value.trim()
    fetch(`http://localhost:3000/pessoas/`)
    .then(resposta => resposta.json())
    .then(dados => {
        try {
            document.querySelector('error').innerHTML = ""

            const {nome, idade} = dados.find(pessoa => pessoa.id === id)

            nomeInput.value = nome
            idadeInput.value = idade
        } catch (error) {
            document.querySelector('error').innerHTML = "Não encontrei esse usuário"
        }

    })
}

function atualizarDados(){
    const nome = nomeInput.value
    const idade = idadeInput.value
    const id = idInput.value.trim()
        
    fetch(`http://localhost:3000/pessoas/${id}`, {
        method: 'PUT', //Metodo PUT HTTP
        headers: {
            'Content-Type': 'application/json' //Tipo de conteudo enviado JSON
        },
        body: JSON.stringify({nome: nome, idade: idade}) //Dados a serem enviados e convertidos
    })
    .then(resposta => resposta.JSON) //Converte a resposta para JSON
}