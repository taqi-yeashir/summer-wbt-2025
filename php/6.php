<?php
$numbers = array(10, 25, 35, 42, 56, 78, 89);
$search = 42;
$found = false;

for ($i = 0; $i < count($numbers); $i++) {
    if ($numbers[$i] == $search) {
        echo " $search found at index $i";
        $found = true;
        break;
    }
}

if (!$found) {
    echo " $search not found in the array.";
}
?>
