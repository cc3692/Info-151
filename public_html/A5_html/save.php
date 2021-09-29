<?php
error_reporting(E_ALL);
ini_set('display_errors','On');

echo "<link rel='stylesheet' type='text/css' href='styles.css'>";

$name = $_POST["name"];
$email = $_POST["email"];
$college = $_POST["college"];
$korma = isset($_POST["korma"]);
$rossc = isset($_POST["rossc"]);
$gerri = isset($_POST["gerri"]);
$hager = isset($_POST["hager"]);
$pearl = isset($_POST["pearl"]);
$colab = isset($_POST["colab"]);

echo "Name: $name <br>\n";
echo "Email: $email <br>\n";
echo "College: $college <br>\n";
echo "Korman Center: $korma <br>\n";
echo "Ross Commons: $rossc <br>\n";
echo "Gerri C. Lebow Hall: $gerri <br>\n";
echo "Hagerty Library: $hager <br>\n";
echo "Pearlstein Building Patio: $pearl <br>\n";
echo "Collaboration Rooms in Lebow College: $colab <br>\n";

$forder = fopen("../data/survey.txt", "a");
fwrite($forder, "$name, $email, $college, $korma, $rossc, $gerri, $hager, $pearl, $colab\n");
fclose($forder);

echo "Your response has been submitted!";

?>