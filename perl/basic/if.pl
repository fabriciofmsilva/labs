#!/usr/bin/perl

$average = 5;
$message = 'Failed';

if ($average >= 5) {
  $message = 'Approved';
}

print $message;
