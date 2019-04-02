#! /bin/bash

echo "Which times table do you want?"
read INPUT
for i in `seq 1 9`
do
echo $INPUT '*' $i '=' `expr $INPUT \* $i`
done
