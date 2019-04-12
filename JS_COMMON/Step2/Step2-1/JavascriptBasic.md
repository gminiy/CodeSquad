# Javascript Programming

## 변수(Variable)

### var/let/const

- var는 function-scoped, let/const는 block-scoped(중괄호{})

- ```javascript
  function test() { 
      var i = 3;
      console.log(i);
  }
  test(); //정상작동
  
  console.log(i);//i is not defined.
  ```

- ```javascript
  let t = 0;
  let k = 0;
  if(t === 0) {
      t = 1;
      let k = 1;
      console.log(k); // 1 출력
  }
  
  console.log(k); // 0 출력
  ```

  ```javascript
  var t = 0;
  var k = 0;
  if(t === 0) {
      t = 1;
      var k = 1;
      console.log(k); //0 출력
  }
  
  console.log(k); //0 출력
  ```

- let은 변수 재할당 가능, const는 불가능

  

## 연산자

- 삼항 연산자

  if의 축약형. 아래와 같이 간단한 값 할당에 자주 쓰인다.

  ```javascript
  function getFee(isMember) {
    return (isMember ? "$2.00" : "$10.00");
  }
  ```

## Type

- Typeof 는 좀 이상하다. Array 도 object, regExp도 object, null도 object로 나온다.

- ```javascript
  typeof []; // object
  typeof {}; // object
  typeof ''; // string
  typeof new Date() // object
  typeof 1; // number
  typeof function () {}; // function
  typeof /test/i; // object
  typeof true; // boolean
  typeof null; // object
  typeof undefined; // undefined
  ```

- Object.prototype.toString.call() 을 쓰자.

- ```javascript
  Object.prototype.toString.call([]); // [object Array]
  Object.prototype.toString.call({}); // [object Object]
  Object.prototype.toString.call(''); // [object String]
  Object.prototype.toString.call(new Date()); // [object Date]
  Object.prototype.toString.call(1); // [object Number]
  Object.prototype.toString.call(function () {}); // [object Function]
  Object.prototype.toString.call(/test/i); // [object RegExp]
  Object.prototype.toString.call(true); // [object Boolean]
  Object.prototype.toString.call(null); // [object Null]
  Object.prototype.toString.call(); // [object Undefined]
  ```

- 아래와 같은 방식으로 사용할 수 있다.

- ```javascript
  var getType = function (elem) {
    return Object.prototype.toString.call(elem).slice(8, -1);
  };
  var isObject = function (elem) {
    return getType(elem) === 'Object';
  };
  if (isObject(person)) {
    person.getName();
  }
  ```

- 필요한 것들을 모듈로 생성하여 사용하면 효과적이다.

- ```javascript
  axis.isArray([]); // true
  axis.isObject({}); // true
  axis.isString(''); // true
  axis.isDate(new Date()); // true
  axis.isRegExp(/test/i); // true
  axis.isFunction(function () {}); // true
  axis.isBoolean(true); // true
  axis.isNumber(1); // true
  axis.isNull(null); // true
  axis.isUndefined(); // true
  ```

### forEach/for-of

- [forEach 사용법](https://github.com/gminiy/CodeSquad/blob/master/JS_COMMON/Step1/Step1_2/JS_forEach.md)

- for-of/for-in

  for-of 와 for-in 모두 list를 탐색(iterate)하지만 for-in은 list의 key를 리턴하고 for-of 는 list의 value를 리턴한다.

  ```javascript
  let list = [4, 5, 6];
  
  for (let i in list) {
     console.log(i); // "0", "1", "2",
  }
  
  for (let i of list) {
     console.log(i); // "4", "5", "6"
  }
  ```

### reduce method

- 배열의 메소드로 배열의 요소에 대해 callback 함수를 실행하면서 accumulator(누적값)을 받는다.

- callback function은 네가지 인수를 받는다.

- ```javascript
  function(accumulator, currentValue, currentIndex, array)
  ```

- callback 의 최초 호출 시 accumulator의 초기값을 설정해두지 않으면 accumulator의 초기값은 array[0]이 되고 currentValue는 array[1], currentIndex는 1이 된다.

  accumulator의 초기값을 설정해놓으면 currentValue의 초기값은 array[0], currentIndex는 0이 된다.

- 

- ```javascript
  [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
  });
  ```

  | `callback` | `accumulator` | `currentValue` | `currentIndex` | `array`           | 반환 값 |
  | :--------- | :------------ | :------------- | :------------- | :---------------- | :------ |
  | 1번째 호출 | `0`           | `1`            | `1`            | `[0, 1, 2, 3, 4]` | `1`     |
  | 2번째 호출 | `1`           | `2`            | `2`            | `[0, 1, 2, 3, 4]` | `3`     |
  | 3번째 호출 | `3`           | `3`            | `3`            | `[0, 1, 2, 3, 4]` | `6`     |
  | 4번째 호출 | `6`           | `4`            | `4`            | `[0, 1, 2, 3, 4]` | `10`    |

- 중첩 배열 펼치기

- ```javascript
  var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function(accumulator, currentValue) {
      return accumulator.concat(currentValue);
    },
    []
  );
  // 펼친 결과: [0, 1, 2, 3, 4, 5]
  ```

- 추가학습 : <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce>

### 문자열 처리

- javascript string method
  - length
  - indexOf(), lastIndexOf()
  - search()
  - slice(), substring() : array로 리턴
  - replace()
  - toUpperCase(), toLowerCase()
  - concat()
  - trim()
  - charAt()
  - charCodeAt()

### Expression과 Statement

- Expression은 value를 만들고 Statement 는 action을 한다.

- function expression / function statement

  - function statement (action을 한다)

  - ```javascript
    function statementWay() {
      console.log("statement");
    }
    ```

  - Function expression (value를 만든다)

  - ```javascript
    var expressionWay = function() {
      return "expressionWay"
    }
    ```

    expressionWay에 함수를 "value"로 assign하였다.

  - function expression을 사용하는 방법은 선언 순서의 영향을 받는다.

    ```javascript
    function statementWay() {
      console.log(expressionWay());
      var expressionWay = function() {
        return "expressionWay"
      }
    } //expressionWay is not a function;
    ```

    var는 hoisting을 하기 때문에 expressionWay는 실행시 선언이 된다. 하지만 함수가 "value"로 할당되지 않았기 때문에 expressionWay is not a function이라는 error 가 발생하게 된다. let/const를 사용하게 되면 expressionWay is not defined라는 error message가 발생한다. 그러므로 let/const를 사용할 것을 권장한다.

  ### function return

  function에 return이 없으면 undefined를 returngksek.

  ### Function arguments variable

  javascript function에는 arguments 는 함수 실행시 받은 모든 arguments를 받는다. arguments는 배열이 아니기 때문에 배열 method를 사용할 수 없다. 

  ```javascript
  const sumAllArgs = function() {
      let sum = 0;
      for(let i = 0; i <= (arguments.length - 1); i++) {
          sum += arguments[i];
      }
      return sum;
  }
  
  console.log(sumAllArgs(1, 2, 3, 4, 5, 6, 7, 8));
  ```

  ### Scope Chain

  변수를 찾기위해 지역 스코프부터 전역 스코프까지 올라가면서 변수를 찾는다. 하지만 require로 선언된 module 객체안의 변수는 다른 전역 스코프를 가지기 때문에 Chain안에 들어가지 못한다.

## Rest Parameter vs Arguments

### Rest Parameter

- Syntax

- ```javascript
  function (a, b, c, ...args)
  ```

- Description

  선언된 parameter 외의 parameter가 전달되면 standard array로 받는다.

  ```javascript
  function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a); 
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs); 
  }
  
  myFun("one", "two", "three", "four", "five", "six");
  
  // Console Output:
  // a, one
  // b, two
  // manyMoreArgs, [three, four, five, six]
  ```

- Destructring rest parameter

  Rest parameter는 destruct 될 수 있다.

  ```javascript
  function f(...[a, b, c]) {
    return a + b + c;
  }
  
  f(1)          // NaN (b and c are undefined)
  f(1, 2, 3)    // 6
  f(1, 2, 3, 4) // 6 (the fourth parameter is not destructured)
  ```

  

### Arguments와 차이점

- arguments 는 function에 전달된 모든 arguments를 갖고 rest parameter는 parameter로 선언된(이름을 갖는)것 외에 전달된 arguments를 갖는다.
- arguments는 실제 array가 아니라서 array method를 사용할수 없지만 rest parameter는 standard array기 때문에 array method를 사용할 수 있다.
