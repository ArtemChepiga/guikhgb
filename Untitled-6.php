<?php
// Приклад коду для аутентифікації (перевірка логіну/пароля)

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Перевірка логіну та пароля (
