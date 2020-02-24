<?php

if ($_POST) {
    if (isset($_POST['login']) && isset($_POST['senha'])) {
        include './conexao.php';

        $login = trim($_POST['login']);
        $senha = md5($_POST['senha']);

        $consulta = $pdo->query("SELECT * FROM usuario WHERE login = '$login' and senha = '$senha' limit 1");

        if ($consulta) {
            session_start();
            while ($row = $consulta->fetch(PDO::FETCH_ASSOC)) {
                $_SESSION['UsuarioID'] = $row['idusuario'];
                $_SESSION['UsuarioLogin'] = $row['login'];
                $_SESSION['UsuarioNome'] = $row['nome'];
                $_SESSION['UsuarioSenha'] = $row['senha'];
            }
            if (isset($_SESSION['UsuarioLogin']) && $_SESSION['UsuarioLogin'] == $login && $_SESSION['UsuarioSenha'] == $senha) {
                echo 1;
                exit;
            } else {
                echo 0;
                exit;
            }
        } else {
            echo 'Usuário não encontrado!';
        }
    }
} else {
    header('location: ../index.php');
}
