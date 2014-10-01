<?php
$array = array(
  'code' => 1,
  'age' => 28,
  'cpf' => 12312312312
);

echo $array['code'];
echo "\n";
echo $array['age'];
echo "\n";
echo $array['cpf'];
echo "\n";
echo count($array);

foreach($array as $v) {
  echo $v;
  echo "\n";
}
?>
