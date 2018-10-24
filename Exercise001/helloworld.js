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

document.write("<h1>This is a heading</h1>");
document.write("<p>This is a paragraph.</p>");

function changeContent()
{
x=document.getElementById("demo");  // 找到元素
x.innerHTML="Hello JavaScript!";    // 改变内容
}

function changeImage()
{
element=document.getElementById('myimage')
if (element.src.match("eg_bulbon"))
  {
  element.src="/JS-Learning/Exercise001/eg_bulboff.gif";
  }
else
  {
  element.src="/JS-Learning/Exercise001/eg_bulbon.gif";
  }
}

function changeStyle()
{
x=document.getElementById("demo") // 找到元素
x.style.color="#ff0000";          // 改变样式
}

function isNumber()
{
var x=document.getElementById("input0").value;
if(x==""||isNaN(x))
	{
	alert("Not Numeric");
  }
}

//  alert(inc())
//  alert(inc())
//  alert(inc())