<?php
include './includes/header.php';
?>

<style>
    .login {
        position: absolute;
        top: 20%;
        left: 30%;
    }
</style>

<div class="card mb-3 shadow login" style="max-width: 540px;">
    <div class="row no-gutters">
        <div class="col-md-4 align-self-center">
            <img src="./app/storage/js.png" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">CRUD JS</h5>
                <form>
                    <div class="row">
                        <div class="col-md-12 form-group">
                            <label for="login"><small>Login</small></label>
                            <input type="text" class="form-control" name="login" required placeholder="Digite seu login">
                        </div>
                        <div class="col-md-12 form-group">
                            <label for="senha"><small>Senha</small></label>
                            <input type="password" class="form-control" name="senha" required placeholder="Digite sua senha">
                        </div>
                        <div class="ml-3 col-md-12 form-group form-check">
                            <input type="checkbox" class="form-check-input">
                            <label for="check" class="form-check-label"><small>Lembrar-me</small></label>
                        </div>
                        <div class="col-md-12 form-group">
                            <button class="btn btn-primary btn-block">Entrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<?php
include './includes/footer.php';
?>