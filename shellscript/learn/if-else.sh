#!/bin/bash

AVERAGE=5

if [ "$AVERAGE" = 5 ]; then
  MESSAGE="Approved"
else
  MESSAGE="Failed"
fi

echo "$MESSAGE"
