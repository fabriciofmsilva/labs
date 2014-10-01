<?php
$array = array(
  0 => array(1,2,3,4),
  1 => array(5,6,7,8)
);

// echo $array[0][0];

for($i = 0; $i < count($array); $i++) {
  for($j = 0; $j < count($array[$i]); $j++) {
    echo $array[$i][$j];
    echo "\n";
  }
}
?>
