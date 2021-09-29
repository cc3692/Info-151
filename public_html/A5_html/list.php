<?php
error_reporting(E_ALL);
ini_set('display_errors','On');
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Survey Results</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="styles.css" media="all">
    </head>
    <body>
        <h1>Survey Reponse List</h2>
        <table>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>College</td>
                <td>Korman Center</td>
                <td>Ross Commons</td>
                <td>Gerri C. Lebow Hall</td>
                <td>Hagerty Library</td>
                <td>Pearlstein Building Patio</td>
                <td>Collaboration Rooms in Lebow College</td>
            </tr>
        <?php
        $fdata = fopen("../data/survey.txt", "r") or die("File is invalid");
        while(!feof($fdata)){
        $line = fgets($fdata);
        // echo "<p>$line</p>";
            if($line != ""){
                list($name, $email, $college, $korma, $rossc, $gerri, $hager, $pearl, $colab) = explode(",", $line);
                echo "<tr>"; 
                echo "<td>".$name."</td>";
                echo "<td>".$email."</td>";
                echo "<td>".$college."</td>";
                echo "<td>".$korma."</td>";
                echo "<td>".$rossc."</td>";
                echo "<td>".$gerri."</td>";
                echo "<td>".$hager."</td>";
                echo "<td>".$pearl."</td>";
                echo "<td>".$colab."</td>";
                echo "</tr>";
            }
        }
        ?>
        </table>
    </body>

</html>