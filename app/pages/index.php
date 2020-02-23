<?php
session_start();

if (!isset($_SESSION['UsuarioID'])) {
    header('location: ../../index.php');
}
include '../../includes/header.php';
?>

<nav class="navbar sticky-top navbar-dark bg-dark">
    <div class="container">
        <a href="#" class="nav-brand">CRUD JS</a>
        <ul class="nav">
            <li class="nav-item">Sair</li>
        </ul>
    </div>
</nav>

<?php
include '../../includes/footer.php';
?>