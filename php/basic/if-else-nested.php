<?php
$average = 5;

if ($average >= 5) {
    if ($average > 7) {
      $message = 'Approved';
    }
    else {
      $message = 'Make another test';
    }
}
else {
  $message = 'Failed';
}

echo $message;
?>
