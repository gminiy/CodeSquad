- 클로저에 대해서 설명해보세요.

  - Inner function 이 종료되어 삭제된 outer function 의 variables를 사용할 수 있도록 만들어진 javascript의 장치다. Outer function 이 실행되면 inner function 을 위한 closure를 만들어 inner function을 위한 environment를 저장한다. Outer function 이 실행될때마다 closure는 생성되며 각 closure는 독립적으로 존재한다.

- let과 const의 차이에 대해서 설명해보세요.

  - let과 const 모두 block scope 을 갖는 변수를 선언할 때 사용되며 재선언이 불가하다. let은 변수의 변경이 가능하지만 const는 변경이 불가하다는 차이가 있다. const는 변경이 불가하지만 참조변수(array, object)로 사용될 때 참조된 값의 변경은 가능하다. 즉, array, object의 value는 변경이 가능하다.

- 비동기 코드에서 콜백큐와 콜스택에 관계에 대해서 설명해보세요.

  - 비동기가 실행되면 API에 해당 함수를 넣는다. API는 event가 발생하게 되면 eventQueue(callback Queue)에 해당 함수를 쌓는다. Event loop가 callstack을 지켜보다가 callstack이 비어지면 해당 함수를 stack에 쌓고 함수가 실행된다.

- prototype chain은 무엇인가요? 

  - 함수가 만들어지면서 constructor를 갖는 prototype property가 생성된다.  해당 함수로 생성된 객체는 proto property가 만들어지며 부모 함수의 prototype에 link된다. javascript는 객체에서 사용된 변수를 찾을때 먼저 해당 객체에서 찾고 없으면 proto link를 참조하여 부모객체의 prototype에 접근해서 찾는다. 부모 객체 역시 proto 를 갖고 있으며 최종적으로 Object의 prototype까지 연결되어 있다. javascript는 이 링크를 따라가면서 각 prototype에 접근하여 변수, 메소드 등을 찾는다. prototype 객체에 필요한 메서드나 변수를 넣을 수 있고 prototype은 하나의 메모리 공간을 가지고 있고 생성된 객체들은 이 prototype을 공유하므로 memory 를 절약할 수 있다는 장점이 있다.

- constructor 는 무엇인가요? 

  - 함수로써 new Function() 과 같은 syntax로 실행되고 객체를 리턴한다. constructor는 parameter를 이용하여 생성되는 각 객체가 다른 초기값을 갖게 만들 수 있다. 객체 리터럴이 사용되면 자바스크립트는 built-in constructor를 사용하여 객체를 생성한다.

- this키워드의 상황별 동작에 대해서 설명해보세요.

  - this는 excution context에 따라 가리키는 object가 달라진다. 기본적인 정책은 this는 global object를 가리킨다. new 키워드를 통해 생성자 함수가 실행되어 객체가 생성되면 this는 생성되는 객체를 가리키게 된다. 함수의 call이나 bind 메소드를 사용하여 this가 가리키는 object를 cutomize할 수 있다. ES6부터 쓸 수 있는 arrow function은 this가 global을 보는 것이 아니라 바로 바깥쪽 object를 본다. 때문에 arrow function은 callback function으로 쓰면 유용하다.

- Node.js에서 require 를 통한 모듈관리 방법의 원리는 무엇인가요? 

  - Node.js 에서 module은 exports 혹은 module.exports를 통해 해당 module을 외부에 노출시킬 수 있다. 이렇게 노출된 module은 require를 통해 사용할 수 있다. 

- bind는 무엇을 할때 쓰는 것인가요? 동작방식에 대해서 설명해보세요.

  - bind는 this를 customize하기 위해 사용하는 method로 argument로 받은 object를 this로 사용하는 새로운 메서드를 리턴한다.

- destructuring 예시코드를 작성해보세요.

- ~~~javascript
  let name = ["yeon", "jimin"];
  let [lastName, firstName] = name;
  
  let name = "Yeon Jimin";
  let [lastName, firstName] = name.split(" ");
  
  let [one, two] = "12";
  ~~~

- arrow function과 일반 function의 차이에 대해서 설명하세요.

  - Arrow function에서의 this는 outer object를 가리킨다.