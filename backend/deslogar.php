<?php

session_start();

unset($_SESSION['UsuarioID']);

header('location: ../index.php');