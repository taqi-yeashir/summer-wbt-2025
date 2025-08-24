<?php
$amount = 1000;
$vat = ($amount * 15) / 100;
$total = $amount + $vat;


echo "Amount: " . $amount . "<br>";
echo "VAT (15%): " . $vat . "<br>";
echo "Total Amount (with VAT): " . $total;
?>
