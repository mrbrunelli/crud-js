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

window.document.onload = listarUsuarios()
