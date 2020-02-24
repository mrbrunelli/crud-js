<?php

if ($_POST) {
    if (isset($_POST['login'])) {
        include './conexao.php';
        $login = trim($_POST['login']);

        $sql = $pdo->query("select * from usuario where login = '$login'");

        if ($sql->execute()) {
            // VERIFICA SE RETORNOU RESULTADO CONTANDO AS LINHAS
            if ($sql->rowCount() > 0) {
                echo 1;
                exit;
            } else {
                echo 0;
                exit;
            }
        } else {
            echo 'Erro, sql não executou';
        }
    }
} else {
    header('location: ../index.php');
}
