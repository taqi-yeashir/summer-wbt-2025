<?php
// Inverted star triangle
echo "Pattern 1:<br>";
for ($i = 5; $i >= 1; $i--) {
    for ($j = 1; $j <= $i; $j++) {
        echo "*";
    }
    echo "<br>";
}

echo "<br>";

//Number triangle
echo "Pattern 2:<br>";
for ($i = 1; $i <= 4; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo $j . " ";
    }
    echo "<br>";
}

echo "<br>";

//Alphabet triangle
echo "Pattern 3:<br>";
$char = 'A';
for ($i = 1; $i <= 4; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo $char . " ";
    }
    echo "<br>";
    $char++;
}
?>
