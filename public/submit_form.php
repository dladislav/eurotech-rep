
<?php
$servername = "localhost";
$username = "u438548212_panoramka";
$password = "Panoramo_check2024!";
$dbname = "u438548212_panoramo_check";

$name = $_POST['name'];
$phone = $_POST['phone'];


try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $sql = "INSERT INTO contacts (name, phone) VALUES (:name, :phone)";
    
    $stmt = $conn->prepare($sql);
    
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':phone', $phone);
    
    $stmt->execute();
    
    echo "Дані успішно вставлено в базу даних";
} catch(PDOException $e) {
    echo "Помилка: " . $e->getMessage();
}

$conn = null;