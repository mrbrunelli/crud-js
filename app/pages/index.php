<?php
session_start();

if (!isset($_SESSION['UsuarioID'])) {
    header('location: ../../index.php');
}
include '../../includes/header.php';
?>

<nav class="navbar sticky-top navbar-dark bg-dark shadow">
    <div class="container">
        <a href="https://github.com/mrbrunelli" target="__blank" class="nav-brand"><i class="fab fa-js fa-3x text-warning"></i></a>
        <ul class="nav">
            <li class="nav-item">
                <div class="dropdown">
                    <a href="#" class="dropdown-toggle nav-link text-light" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-user-ninja"></i> <?= $_SESSION['UsuarioNome'] ?>
                    </a>
                    <div class="dropdown-menu shadow text-center" aria-labelledby="dropdown">
                        <a href="../../backend/deslogar.php" class="dropdown-item"><i class="fas fa-sign-out-alt"></i> Sair</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</nav>

<div class="container mt-5">
    <div class="row">
        <div class="col-md-4">
            <div class="form-group">
                <label for="id">ID</label>
                <input type="text" class="form-control" name="id" id="id" disabled>
            </div>
        </div>
    </div>
</div>

<?php
include '../../includes/footer.php';
?>