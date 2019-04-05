# Node.Js와 개발환경

## 배경지식

### Compiled와 interpreted의 차이점, Script Language.

- Compiled Language

  Compiled Language로 작성된 source code는 전체가 기계어로 compile 된 후에 실행된다. Compiled language는 CPU 의존성이 강해서 여러 종류의 프로세서에서 구동될 수 없다. 즉 각 cpu마다 따로 compile을 해주어야 한다. 또한 한번에 전체가 compile되고 실행되기 때문에 source code 수정 후 재실행하기 위해서는 compile 과정을 다시 거쳐야 하므로 디버깅 시간이 더 소요되는 단점이 있다.

- Interpreted Language

  한번에 compile 한 후에 실행되는 것이 아니라 프로그램 한줄마다 interprete하고 실행된다. debuging할 때 recompile할 필요가 없기 때문에 디버깅에서 효율적이다. 또한 interpreted Language는 적절한 interpreter만 있다면 프로세서와 상관없이 구동될 수 있다. 즉, 크로스플랫폼이 가능하다.

- Script Language

  다른 응용프로그램에 삽입되어 동작하는 언어다. 비스크립터 언어인 C, C++, JAVA 등은 독립적으로 작동하느는 완전한 프로그램을 만들지만 자바스크립트, 제이쿼리, JSP, 파이썬 등의 스크립트 언어는 다른 응용 프로그램 안에 삽입되어 해석되는 방식이다.

## Node.JS

초기 JAVASCRIPT는 동적인 WEB을 위해 존재했다. 이 후 Google에서 Gmail과 GMap을 순수 웹언어(HTML, JAVASCRIPT..)로만 만들어낸다. 그리고 2008년 chrome의 성능 향상을 위해 v8이라는 JAVASCRIPT Engine을 개발한다. 그리고 V8을 오픈소스로 공개해버린다. 2009년 Ryan Dal이 JAVASCRIPT로 구현된 서버 사이드 언어인 Node.JS를 내보낸다. 즉, JAVASCRIPT를 WEB이 아닌 서버에서도 사용할수 있도록 만들어진 언어이다. 때문에 NODE.JS를 사용하게 되면 브라우저와 서버에서 동일한 언어를 사용할 수 있게 되는 것이다.

 Node.Js는 ECMAScript(ES) 문법에 따라 구현가능하다. ECMAScript는 JAVASCRIPT의 core 언어이다. JAVASCRIPT는 Core, BOM(Browser Object Model), DOM(Document Object Model)로 구성되어 있다. Core(ES)는 JAVASCRIPT의 기본적인 표준 문법에 해당한다. BOM은 웹 브라우저와 관련된 객체이다. 웹 브라우저를 제어하기 위해 사용된다. DOM은 웹 문서를 조작할때 사용된다. 여기서 Core가 ECMAScript이다.

## IDE?

IDE란 Intergrated Development Environment의 약자로 통합 개발 환경을 뜻한다. JAVASCRIPT의 IDE는 여러가지가 있지만 2018 Stack Overflow Survey에 따르면 JS의 IDE는 Visual Studio Code를 가장 많이 사용하는 것으로 나타났다. 그 외에도 Web Storm, Sublime Text, Atom, Vim 등을 많이 사용한다.

## DEBUGGING

### JSON file

debugging configuration information을 저장하는 file로 .vscode안에 있다.

### Debug Action

![Debug Actions](https://code.visualstudio.com/assets/docs/editor/debugging/toolbar.png)

- Continue / Pause F5
- Step Over F10
- Step Into F11
- Step Out ⇧F11
- Restart ⇧⌘F5
- Stop ⇧F5

### Breakpoint

Breakpoint는 F9 혹은 라인 옆에 빈공간을 클릭해서 만들 수 있으며 enable상태면 빨간색, disable상태면 회색이다. 

### Call Stack

Function Call을 기록하는 Data structure

![img](https://cdn-images-1.medium.com/max/1600/1*JctnBGRAYmQQPeMsgXUi0A.png)

### Data inspection

Variables는 Variables에 나타난다.  watch에 추적하고 싶은 변수를 설정해놓을 수 있다. Step over는 다음 줄에 나오는 명령을 실행하고 다음 줄로 점프한다. step into 는 다음 줄에 함수 호출이 포함되어 있다면 해당 함수로 들어간다.

## Node.JS Modular Programming

### Module 이란?

JAVASCRIPT는 Module 기능이 없었다. Node.JS에서  commonJS의 module 시스템을 채택하여 사용하고 있다. Node.js는 모듈단위로 기능을 분할하여 사용할 수 있다. 하나의 모듈은 자신만의 실행영역을 가지고 있으므로 클라이언트와의 전역변수문제가 발생하지 않는다. 

모듈은 module.exports 혹은 exports 객채를 통해  외부로 공개한다. 공개된 모듈은 require 함수를 사용해 임포트한다.

### exports

모듈을 파일로 작성하고 외부에 공개할 대상을 exports 객체의 프로퍼티 또는 메소드를 정의한다. 

```javascript
// circle.js
const { PI } = Math;

exports.area = (r) => PI * r * r;

exports.circumference = (r) => 2 * PI * r;
```

여기서 변수 PI는 circle 모듈에서만 유효한 private 변수가 되고 area와 circumference는 외부에 공개되는 메소드가 된다.

Require 함수를 사용하여 임의의 이름으로 circle 모듈을 import한다. 

```javascript
// app.js
const circle = require('./circle.js'); // == require('./circle')

console.log(`지름이 4인 원의 면적: ${circle.area(4)}`);
console.log(`지름이 4인 원의 둘레: ${circle.circumference(4)}`);
```

이때 circle 모듈은 객체로 반환되므로 circle.area()와 같은 형식으로 공개된 모듈을 참조한다. 

#### module.exports

module.exports는 하나의 값(함수, 객체, 원시 타입)을 할당할 수 있다.

```javascript
// circle.js
const { PI } = Math;

module.exports = function (r) {
  return {
    area() { return PI * r * r; },
    circumference() { return 2 * PI * r}
  };
```

module.exports에 하나의 함수를 할당하였다. 

```javascript
// app.js
const circle = require('./circle');
const myCircle = circle(4);

console.log(`지름이 4인 원의 면적: ${myCircle.area()}`);
console.log(`지름이 4인 원의 둘레: ${myCircle.circumference()}`);
```

Require 함수를 통해 circle모듈을 임포트하여 circle 변수에 할당하였다. 

| 구분           | 모듈 정의 방식                                               | require 함수의 호출 결과                                     |
| :------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| exports        | **exports 객체에는 값을 할당할 수 없고 공개할 대상을 exports 객체에 프로퍼티 또는 메소드로 추가한다.** | exports 객체에 추가한 프로퍼티와 메소드가 담긴 객체가 전달된다. |
| module.exports | **module.exports 객체에 하나의 값(원시 타입, 함수, 객체)만을 할당한다.** | module.exports 객체에 할당한 값이 전달된다.                  |

```javascript
// foo.js
module.exports = {
  add (v1, v2) { return v1 + v2 },
  minus (v1, v2) { return v1 - v2 }
};
```

```javascript
// app.js
const calc = require('./foo');

const result1 = calc.add(1, 2);
console.log(result1); // => 3

const result2 = calc.minus(1, 2);
console.log(result2); // => -1
```

#### require

require함수의 인수에는 파일뿐만 아니라 디렉토리를 지정할 수도 있다. 

```code
project/
├── app.js
└── module/
    ├── index.js
    ├── calc.js
    └── print.js
```

다음과 같은 디렉토리 구조를 가지고 있을때 아래와 같이 모듈을 명시하지 않고 디렉토리를 명시하며 require를 하면 index.js를 불러온다.

```javascript
const myModule = require('./module');
```

로드되는 index.js에서 calc.js 와 print.js를 require하면 된다.

```javascript
// module/index.js
module.exports = {
  calc: require('./calc'),
  print: require('./print')
};
```

