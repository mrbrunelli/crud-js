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

// ALTERNAR ENTRE OS CADS
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
    } else {
        document.querySelector('#certo').style.display = 'none'
        document.querySelector('#errado').style.display = 'inline'
    }
}