f1(999);
function f1(n){
    return n;
}

function createIncrementor(start) {
  return function () {
    return start++;
  };
}

var inc = createIncrementor(5);

alert(inc()) // 5
alert(inc()) // 6
alert(inc()) // 7