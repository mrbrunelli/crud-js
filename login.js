// FUNCAO QUE VERIFICA LOGIN NO BACKEND
function login() {
    let login = document.querySelector('#login').value
    let senha = document.querySelector('#senha').value
    document.querySelector('#loading').style.display = 'block'

    setTimeout(() => {
        if (login.trim() != '' && senha.trim() != '') {
            $.ajax({
                url: './backend/login.php',
                type: 'post',
                async: true,
                data: {
                    login,
                    senha
                },
                success: function (result) {
                    if (result == 1) {
                        window.location.href = './app/pages/'
                    } else {
                        Swal.fire('Erro!', 'Login ou senha incorretos!', 'error')
                        console.log(result)
                    }
                },
                error: function (result) {
                    console.log(result)
                }
            })
        } else {
            Swal.fire('Erro!', 'Digite um login válido!', 'error')
        }
        document.querySelector('#loading').style.display = 'none'
    }, 1000)
}

// FUNÇÃO PARA LOGAR COM ENTER
const enterLogin = document.querySelector('#senha')
enterLogin.addEventListener('keyup', (e) => {
    let tecla = e.which || e.keycode
    if (tecla == 13) {
        login()
    }
})

// FUNCÃO QUE VERIFICA SE O USUARIO JÁ ESTA CADASTRADO
function verificarUsuario(login) {
    $.ajax({
        url: './backend/verificarUsuario.php',
        type: 'post',
        async: true,
        data: {
            login
        },
        success: (resultado) => {
            if (resultado == 1) {
                fnValidar(`login2`, `is-invalid`, `is-valid`)
            } else {
                fnValidar(`login2`, `is-valid`, `is-invalid`)
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
    let senha = document.querySelector('#senha2').value
    if (senha == p) {
        fnValidar(`confirmaSenha`, `is-valid`, `is-invalid`)
        document.querySelector('#btnCadastrar').disabled = false
    } else {
        fnValidar(`confirmaSenha`, `is-invalid`, `is-valid`)
        document.querySelector('#btnCadastrar').disabled = true
    }
}

// ALTERNAR ENTRE OS CARDS LOGIN X CADASTRAR
function fnToggle(mostrar, esconder) {
    document.querySelector(`#${mostrar}`).style.display = 'block'
    document.querySelector(`#${esconder}`).style.display = 'none'
}

// VALIDAR SENHA DO INPUT DE CADASTRO
// function validaSenha(senha) {
//     let senha2 = document.querySelector('#senha2').value
//     if (senha == senha2) {
//         document.querySelector('#certo').style.display = 'inline'
//         document.querySelector('#errado').style.display = 'none'
//         document.querySelector('#btnCadastrar').disabled = false
//     } else {
//         document.querySelector('#certo').style.display = 'none'
//         document.querySelector('#errado').style.display = 'inline'
//         document.querySelector('#btnCadastrar').disabled = true

//     }
// }

// FUNÇÃO QUE CADASTRA NOVO USUÁRIO
function cadastrar() {
    let nome = document.querySelector('#nome').value
    let login = document.querySelector('#login2').value
    let senha = document.querySelector('#senha2').value
    let confirmaSenha = document.querySelector('#confirmaSenha').value

    if (senha == confirmaSenha) {

        if (login.trim() != '' && senha.trim() != '') {
            $.ajax({
                url: './backend/cadastrar.php',
                type: 'post',
                async: true,
                data: {
                    nome,
                    login,
                    senha
                },
                success: function (result) {
                    console.log(result)
                    if (result == 1) {
                        Swal.fire('Sucesso!', 'Usuário cadastrado com sucesso!', 'success')
                        setTimeout(function () {
                            window.location.href = './index.php'
                        }, 3000)
                    } else {
                        Swal.fire('Erro!', 'Esse usuário já existe!', 'error')
                        setTimeout(function () {
                            window.location.href = './index.php'
                        }, 3000)
                    }
                },
                error: function (result) {
                    console.log(result)
                    Swal.fire('Erro', 'Usuário não cadastrado!', 'error')
                }
            })
        } else {
            Swal.fire('Erro!', 'Preencha com um login válido!', 'error')
        }
    } else {
        Swal.fire('Erro!', 'As senhas não conferem!', 'error')
    }
}