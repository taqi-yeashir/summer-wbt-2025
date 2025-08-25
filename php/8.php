<?php
$principal = 1000;   
$rate = 10;          //   Rate (%)
$time = 2;           // Time (years)

$simple_interest = ($principal * $rate * $time) / 100;

echo "Principal is :$principal /-<br>";
echo "Rate is : $rate %<br>";
echo "Time is : $time years<br>";
echo "Simple Interest is $simple_interest";
?>
