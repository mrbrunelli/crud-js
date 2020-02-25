<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login CRUD JS</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
    <link rel="stylesheet" href="./login.css">


</head>

<body>
    <!-- CARD DE LOGIN -->
    <div class="text-center pt-5">
        <a href="https://github.com/mrbrunelli" target="__blank" class="nav-link"><code><i class="fab fa-github-alt"></i> Desenvolvido por Matheus R. Brunelli</code></a>
    </div>
    <div class="row justify-content-center">
        <div>
            <div class="card mb-3 shadow login" id="cardLogin" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4 align-self-center d-none d-md-block">
                        <img src="./app/storage/js.png" class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">CRUD JS - Login</h5>
                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <label for="login"><small>Login</small></label>
                                    <input type="text" class="form-control" name="login" id="login" required placeholder="Digite seu login">
                                </div>
                                <div class="col-md-12 form-group">
                                    <label for="senha"><small>Senha</small></label>
                                    <input type="password" class="form-control" name="senha" id="senha" required placeholder="Digite sua senha">
                                </div>
                                <div class="ml-3 col-md-12 form-group form-check">
                                    <input type="checkbox" class="form-check-input">
                                    <label for="check" class="form-check-label"><small>Lembrar-me</small></label>
                                </div>
                                <div class="col-md-12">
                                    <button type="button" class="btn btn-primary btn-block" onclick="login()">Entrar</button>
                                </div>
                                <div class="col-md-3 mt-3 text-center">
                                    <div class="spinner-grow text-primary" id="loading" role="status">
                                        <span class="sr-only">Carregando...</span>
                                    </div>
                                </div>
                                <div class="col-md-9 mt-4">
                                    <a href="#" onclick="fnToggle('cardCadastro', 'cardLogin')">Não tenho uma conta</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CARD DE CADASTRO -->
            <div class="card mb-3 shadow login" id="cardCadastro" style="max-width: 540px; display: none">
                <div class="row no-gutters">
                    <div class="col-md-4 align-self-center d-none d-md-block">
                        <img src="./app/storage/js.png" class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">CRUD JS - Cadastro</h5>
                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <label for="nome">Nome</label>
                                    <input type="text" class="form-control" name="nome" id="nome" placeholder="Digite seu nome">
                                </div>
                                <div class="col-md-12 form-group">
                                    <label for="login2"><small>Login</small></label>
                                    <input type="text" class="form-control" name="login2" id="login2" placeholder="Digite seu login" onblur="verificarUsuario(this.value)">
                                </div>
                                <div class="col-md-12 form-group">
                                    <label for="senha2"><small>Senha</small></label>
                                    <input type="password" class="form-control" name="senha2" id="senha2" placeholder="Digite sua senha">
                                </div>
                                <div class="col-md-12 form-group">
                                    <label for="confirmaSenha"><small>Confirma Senha <i id="certo" class="fas fa-check text-success"></i><i id="errado" class="fas fa-times text-danger"></i></small></label>
                                    <input type="password" class="form-control" name="confirmaSenha" id="confirmaSenha" placeholder="Confirme sua senha" onkeyup="verificarSenha(this.value)">
                                </div>
                                <div class="col-5 my-2">
                                    <button type="button" class="btn btn-danger btn-block" onclick="fnToggle('cardLogin', 'cardCadastro')">Cancelar</button>
                                </div>
                                <div class="col-7 my-2">
                                    <button id="btnCadastrar" type="button" class="btn btn-primary btn-block" onclick="cadastrar()" disabled>Cadastrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>


    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <script src="https://kit.fontawesome.com/5ae85dff3f.js" crossorigin="anonymous"></script>
    <script src="./login.js"></script>

</body>

</html>