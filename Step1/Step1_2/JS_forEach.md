# forEach Method
## Syntex
  ~~~
  array.forEach(function(currentValue, index, arr), thisValue)
  ~~~
## Description
* The forEach method executes a privided function once for each array element.
## Example
  ~~~javascript
  array1.forEach(function(element, index, arr) {
    console.log(element);
    console.log(index);
    console.log(arr);
  });
  ~~~
  ~~~
  //Result
  > "a"
> 0
> Array ["a", "b", "c"]
> "b"
> 1
> Array ["a", "b", "c"]
> "c"
> 2
> Array ["a", "b", "c"]
~~~
