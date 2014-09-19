#!/usr/bin/perl

#Don't work

$val = 1;
$message;

#########################################
# if (op == 1) {
#   $message = 'One';
# }
# if (op == 2) {
#   $message = 'Two';
# }
# if (op == 3) {
#   $message = 'Three';
# }
#########################################

switch ($val) {
  case 1 {
    $message = 'One';
  }
  case 2 {
    $message = 'Two';
  }
  case 3 {
    $message = 'Three';
  }
  default {
    $message = 'Another value';
  }
}

print $message;
