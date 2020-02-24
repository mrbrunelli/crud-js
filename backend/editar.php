<?php

if ($_POST) {
    if (isset($_POST['idusuario']) && isset($_POST['nome']) && isset($_POST['login']) && isset($_POST['senha'])) {
        include './conexao.php';

        $idusuario = $_POST['idusuario'];
        $nome = trim($_POST['nome']);
        $login = trim($_POST['login']);
        $senha = md5($_POST['senha']);

        $sql = $pdo->prepare("update usuario set nome = '$nome', login = '$login', senha = '$senha' where idusuario = $idusuario");

        if ($sql->execute()) {
            echo 1;
            exit;
        } else {
            echo 0;
            exit;
        }
    }
} else {
    header('location: ../index.php');
}
