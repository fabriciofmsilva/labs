#!/usr/bin/perl

$average = 5;
$message;

if ($average >= 5) {
  if ($average > 7) {
    $message = 'Approved';
  } else {
    $message = 'Make another test';
  }
} else {
  $message = 'Failed';
}

print $message;
