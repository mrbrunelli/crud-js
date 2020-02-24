// AO CARREGAR A PÁGINA O JAVASCRIPT CONSULTA OS USUARIOS CADASTRADOS
window.document.onload = listarUsuarios()

// FUNÇÃO PARA LISTAR USUARIOS CADASTRADOS
function listarUsuarios() {
    const lista = document.querySelector('#lista')
    lista.innerHTML = ''
    fetch('../../backend/listar.php', {
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain;charset=UTF-8'
        },
    }).then(response => {
        return response.json()
    }).then(resultado => {
        resultado.map((f) => {
            let dados = `
                <td><p>${f.idusuario}</p></td>
                <td><p>${f.nome}</p></td>
                <td><p>${f.login}</p></td>
                <td><i class="fas fa-user-edit text-success pointer" title="Editar" onclick="editarUsuario(${f.idusuario})"></i></td>
                <td><i class="fas fa-trash text-danger pointer" title="Excluir" onclick="excluirUsuario(${f.idusuario})"></i></td>
            `
            lista.innerHTML += dados
        })
    })
}

// FUNCÃO QUE VERIFICA SE O USUARIO JÁ ESTA CADASTRADO
function verificarUsuario(login) {
    $.ajax({
        url: '../../backend/verificarUsuario.php',
        type: 'post',
        async: true,
        data: {
            login
        },
        success: (resultado) => {
            if (resultado == 1) {
                fnValidar(`login`, `is-invalid`, `is-valid`)
            } else {
                fnValidar(`login`, `is-valid`, `is-invalid`)
            }
        },
        error: (resultado) => {
            console.log(resultado)
        }
    })
}

function fnValidar(id, add, remove) {
    document.querySelector(`#${id}`).classList.add(`${add}`)
    document.querySelector(`#${id}`).classList.remove(`${remove}`)
}


function verificarSenha(p) {
    let senha = document.querySelector('#senha').value
    if (senha == p) {
        fnValidar(`confirmaSenha`, `is-valid`, `is-invalid`)
    } else {
        fnValidar(`confirmaSenha`, `is-invalid`, `is-valid`)
    }
}

