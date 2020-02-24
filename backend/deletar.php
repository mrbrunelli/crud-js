<?php

if ($_POST) {
    if (isset($_POST['idusuario'])) {
        include './conexao.php';

        $idusuario = $_POST['idusuario'];

        $sql = $pdo->prepare("delete from usuario where idusuario = $idusuario");

        if ($sql->execute()) {
          if ($sql->rowCount() > 0) {
              echo 1;
              exit;
          } else {
              echo 0;
              exit;
          }
        } else {
            echo "Erro, sql não executado!";
        }
    }
} else {
    header('location: ../index.php');
}
