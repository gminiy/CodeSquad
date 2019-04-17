# Object

## Syntax

```javascript
// Object initialiser or literal
{ [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }

// Called as a constructor
new Object([value])
```

### Parameters

- `nameValuePair1, nameValuePair2, ... nameValuePair*N*`

  colon으로 구분된 name과 value의 짝을 갖는다.(name: value)

## Description

Object constructor 는 주어진 값의 object wrapper를 만든다. 만약 주어진 값이 null이거나 undefined이면 빈 object를 만든다.

Object constructor는 주어진 value의 type object를 return한다.

```javascript
console.log(new Object(3));
//Number {[[PrimitiveValue]]: 3}
```

만약 value가 이 미 object라면 Object consturctor는 value를 리턴한다.

```javascript
obj = new Object(3);
console.log(new Object(obj));
//Number {[[PrimitiveValue]]: 3}
```

## 객체 탐색 방법

- for in

  - 객체의 property를 탐색하는 기능이다.

  - syntax

    - ```javascript
      for (var in object) {
        code block to be executed
      }
      ```

- for of

  - 객체의 value를 탐색하는 기능이다.

  - syntax

  - ```javascript
    for (variable of iterable) {
      statement
    }
    ```

# 배열

객체와는 다르게 순서를 가지는 요소의 집합이다.

## Method

### forEach

 배열의 각 element에 전달 받은 함수(callback function)를 실행한다.

- Syntax

- ```javascript
  arr.forEach(function callback(currentValue [, index [, array]]) {
      //your iterator
  }[, thisArg]);
  
  ```

### map

- Syntax

- ```javascript
  var new_array = arr.map(function callback(currentValue[, index[, array]]) {
      // Return element for new_array
  }[, thisArg])
  ```

- Example

- ```javascript
  var array1 = [1, 4, 9, 16];
  
  // pass a function to map
  const map1 = array1.map(x => x * 2);
  
  console.log(map1);
  // expected output: Array [2, 8, 18, 32]
  ```

### filter

- Syntax

- ```javascript
  var new_array = arr.map(function callback(currentValue[, index[, array]]) {
      // Return element for new_array
  }[, thisArg])
  ```

- Example

  ```javascript
  var array1 = [1, 4, 9, 16];
  
  // pass a function to map
  const map1 = array1.map(x => x * 2);
  
  console.log(map1);
  // expected output: Array [2, 8, 18, 32]
  ```

  

### every

- Description

  callback function이 모든 element에 대해 truthy value를 return 하면 true, 아니면 false를 리턴한다.

- Syntax

- ```javascript
  arr.every(callback[, thisArg])
  ```

- Examaple

- ```javascript
  function isBelowThreshold(currentValue) {
    return currentValue < 40;
  }
  
  var array1 = [1, 30, 39, 29, 10, 13];
  
  console.log(array1.every(isBelowThreshold));
  // expected output: true
  
  ```

### some

- callback function이 어느 하나라도 element에 대해 truthy value를 return 하면 true, 아니면 false를 리턴한다

- Syntax

- ```javascript
  arr.some(callback(element[, index[, array]])[, thisArg])
  ```

- Example

- ```javascript
  var array = [1, 2, 3, 4, 5];
  
  var even = function(element) {
    // checks whether an element is even
    return element % 2 === 0;
  };
  
  console.log(array.some(even));
  // expected output: true
  
  ```

### reduce

- callback function을 각 element에 대해 수행하고 result를 하나의 single value로 return한다.

- Callback function, initialValue(optional)을 parameter로 갖는다

- callback function은 accumulator, currentValue, currentIndex, sourceArray를 parameter로 갖는다.

- initialValue가 설정되면 accumulator는 initialValue, currentValue는 sourceArray의 첫번째 element로 메소드 수행을 시작한다.

- initialValue가 설정이 안되면 accumulator는 sourceArray의 첫번째 element, currentValue는 두번째 element로 메소드 수행을 시작한다.

- Syntax

- ```javascript
  arr.reduce(callback[, initialValue])
  ```

- Example

- ```javascript
  var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
  var maxCallback2 = ( max, cur ) => Math.max( max, cur );
  
  // reduce() without initialValue
  [ { x: 22 }, { x: 42 } ].reduce( maxCallback ); // 42
  [ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
  [                      ].reduce( maxCallback ); // TypeError
  
  // map/reduce; better solution, also works for empty or larger arrays
  [ { x: 22 }, { x: 42 } ].map( el => el.x )
                          .reduce( maxCallback2, -Infinity );
  ```

  ```javascript
  var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  // sum is 6
  ```

  ![array-methods](/Users/gmin/Downloads/array-methods.jpg)
