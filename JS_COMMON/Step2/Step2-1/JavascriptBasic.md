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
