const idInput = document.getElementById('identificador')
const nomeInput = document.getElementById('nome')
const idadeInput = document.getElementById('idade')

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

function deletarUsuario(){
    const id = idInput.value.trim()
        
    fetch(`http://localhost:3000/pessoas/${id}`, {
        method: 'DELETE', //Metodo PUT HTTP
    })
    .then(resposta => resposta.JSON) //Converte a resposta para JSON
}