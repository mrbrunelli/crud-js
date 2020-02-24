<?php

include './conexao.php';

$sql = $pdo->query("select * from usuario");

$sql->execute();

$fetch = $sql->fetchAll();

$json = json_encode($fetch);

echo $json;
