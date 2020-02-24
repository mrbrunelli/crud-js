// AO CARREGAR A PÁGINA O JAVASCRIPT CONSULTA OS USUARIOS CADASTRADOS
window.document.onload = listarUsuarios()
window.document.onload = document.querySelector('#btnAtualizar').disabled = true

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
                <td><i class="fas fa-user-edit text-success pointer" title="Editar" onclick="listarUsuarioInput(${f.idusuario})"></i></td>
                <td><i class="fas fa-trash text-danger pointer" title="Excluir" onclick="deletarUsuario(${f.idusuario})"></i></td>
            `
            lista.innerHTML += dados
        })
    })
}

// FUNÇÃO PARA LOGAR COM ENTER
const enterLogin = document.querySelector('#confirmaSenha')
enterLogin.addEventListener('keyup', (e) => {
    let tecla = e.which || e.keycode
    if (tecla == 13) {
        atualizarUsuario()
    }
})

// FUNCÃO PARA DAR UPDATE NOS USUARIOS
function atualizarUsuario() {
    let idusuario = document.querySelector('#id').value
    let nome = document.querySelector('#nome').value
    let login = document.querySelector('#login').value
    let senha = document.querySelector('#senha').value
    let confirmaSenha = document.querySelector('#confirmaSenha').value

    if (senha == confirmaSenha) {
        $.ajax({
            url: '../../backend/editar.php',
            type: 'post',
            async: true,
            data: {
                idusuario,
                nome,
                login,
                senha
            },
            success: (resultado) => {
                if (resultado == 1) {
                    Swal.fire('Sucesso!', 'Usuário atualizado!', 'success')
                } else {
                    Swal.fire('Erro!', 'Erro ao atualizar usuário!', 'error')
                }
            },
            error: (resultado) => {
                console.log(resultado)
            }
        })
        limparFormulario()
        listarUsuarios()
    } else {
        Swal.fire('Erro!', 'As senhas não conferem!', 'error')
    }
}

// FUNÇÃO QUE BUSCA USUARIO E CHAMA FUNÇÃO PARA JOGAR NO INPUT
function listarUsuarioInput(idusuario) {
    $.ajax({
        url: '../../backend/listarUsuarioInput.php',
        type: 'post',
        async: true,
        data: {
            idusuario
        },
        success: (resultado) => {
            // SEMPRE QUE FOR ARRAY EU PRECISO DAR UM JSON.PARSE PARA CONVERTER PARA O JAVASCRIPT
            if (resultado) {
                let json = JSON.parse(resultado)
                jogarUsurioInput(json)
            } else {
                Swal.fire('Erro', 'Usuário não encontrado!', 'error')
            }
        },
        error: (resultado) => {
            console.log(resultado)
        }
    })
}

// PEGA O RESULTADO DA FUNÇÃO listarUsuarioInput() E FAZ UM MAP E CARREGA NO INPUT
function jogarUsurioInput(json) {
    json.map((f) => {
        document.querySelector('#id').value = f.idusuario
        document.querySelector('#nome').value = f.nome
        document.querySelector('#login').value = f.login
    })

}

// FUNÇÃO QUE DELETA USUARIOS
function deletarUsuario(idusuario) {
    $.ajax({
        url: '../../backend/deletar.php',
        type: 'post',
        async: true,
        data: {
            idusuario
        },
        success: (resultado) => {
            if (resultado == 1) {
                Swal.fire('Sucesso!', 'Usuário deletado com sucesso!', 'success')
            } else {
                Swal.fire('Erro!', 'Falha ao deletar usuário!', 'error')
            }
        },
        error: (resultado) => {
            console.log(resultado)
        }
    })
    listarUsuarios()
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

// FUNÇÃO PARA VALIDAR CAMPOS
function fnValidar(id, add, remove) {
    document.querySelector(`#${id}`).classList.add(`${add}`)
    document.querySelector(`#${id}`).classList.remove(`${remove}`)
}

// FUNÇÃO PARA VALIDAR SENHA
function verificarSenha(p) {
    let senha = document.querySelector('#senha').value
    if (senha == p) {
        fnValidar(`confirmaSenha`, `is-valid`, `is-invalid`)
        document.querySelector('#btnAtualizar').disabled = false
    } else {
        fnValidar(`confirmaSenha`, `is-invalid`, `is-valid`)
        document.querySelector('#btnAtualizar').disabled = true
    }
}

function limparFormulario() {
    document.querySelector('#id').value = ''
    document.querySelector('#nome').value = ''
    document.querySelector('#login').value = ''
    document.querySelector('#senha').value = ''
    document.querySelector('#confirmaSenha').value = ''
}

