#!/bin/bash

AVERAGE=5
MESSAGE="Failed"

if [ "$AVERAGE" = 5 ]; then
  MESSAGE="Approved"
fi

echo "$MESSAGE"
