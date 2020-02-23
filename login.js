// FUNCAO QUE VERIFICA LOGIN NO BACKEND
async function login() {
    let login = document.querySelector('#login').value
    let senha = document.querySelector('#senha').value

    // alert(`${login} ${senha}`)
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
}

// ALTERNAR ENTRE OS CARDS LOGIN X CADASTRAR
function fnToggle(mostrar, esconder) {
    document.querySelector(`#${mostrar}`).style.display = 'block'
    document.querySelector(`#${esconder}`).style.display = 'none'
}

// VALIDAR SENHA DO INPUT DE CADASTRO
function validaSenha(senha) {
    let senha2 = document.querySelector('#senha2').value
    if (senha == senha2) {
        document.querySelector('#certo').style.display = 'inline'
        document.querySelector('#errado').style.display = 'none'
        document.querySelector('#btnCadastrar').disabled = false
    } else {
        document.querySelector('#certo').style.display = 'none'
        document.querySelector('#errado').style.display = 'inline'
        document.querySelector('#btnCadastrar').disabled = true

    }
}

// FUNÇÃO QUE CADASTRA NOVO USUÁRIO
function cadastrar() {
    let nome = document.querySelector('#nome').value
    let login = document.querySelector('#login2').value
    let senha = document.querySelector('#senha2').value

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
}