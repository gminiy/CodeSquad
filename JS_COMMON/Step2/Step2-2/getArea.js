const printStack = [];
function getArea(...index) {
   let result = 0;
   switch (index[0]) {

       case "circle" :
           circle(index);
           break;
       case "rect" :
           rectangle(index);
           break;
       case "trapezoid" :
           trapezoid(index);
           break;
       default:
           console.log("Wrong Parameter!!");
           return;
   }
}

function printExecutionSequence() {
   console.log(printStack);
}


function circle(circleIndex) {
   if(circleIndex.length == 2) {
       result = parseInt(circleIndex[1]*circleIndex[1]*Math.PI);
       printStack.push([circleIndex[0], result]);
       return result;
   } else if (circleIndex.length == 3) {
       let sum = 0;
       for(let i = circleIndex[1]; i <= circleIndex[2]; i++) {
           sum += getArea('circle', i);
       }
       return parseInt(sum);
   }
}

function rectangle(rectangleIndex) {
   result = parseInt(rectangleIndex[1]*rectangleIndex[2]);
   printStack.push(([rectangleIndex[0], result]));
   return result;
}

function trapezoid(trapezoidIndex) {
   result = parseInt(((trapezoidIndex[1]+trapezoidIndex[2])*trapezoidIndex[3])/2);
   printStack.push(([trapezoidIndex[0], result]));
   return result;
}


getArea('circle', 3);
getArea('rect', 3, 5);
getArea('trapezoid', 3, 5, 5);
getArea('circle', 3, 5);

printExecutionSequence();
