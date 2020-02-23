<?php

try {
    $servidor = 'localhost';
    $usuario = 'root';
    $senha = '';
    $banco = 'crud-js';

    $pdo = new PDO("mysql:host=$servidor;dbname=$banco;", $usuario, $senha);
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
    exit;
}
