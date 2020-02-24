<?php

if ($_POST) {
    if (isset($_POST['idusuario'])) {
        include './conexao.php';

        $idusuario = $_POST['idusuario'];

        $sql = $pdo->query("select * from usuario where idusuario = $idusuario limit 1");

        $sql->execute();

        $fetch = $sql->fetchAll(PDO::FETCH_ASSOC);

        $json = json_encode($fetch);

        echo $json;
    }
} else {
    header('location: ../index.php');
}
