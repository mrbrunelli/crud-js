<?php

if ($_POST) {
    if (isset($_POST['login']) && isset($_POST['senha']) && isset($_POST['nome'])) {
        include './conexao.php';

        $nome = trim($_POST['nome']);
        $login = trim($_POST['login']);
        $senha = md5($_POST['senha']);

        $insert = $pdo->prepare("INSERT INTO usuario (nome, login, senha) VALUES ('$nome', '$login', '$senha')");

        if ($insert->execute()) {
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
