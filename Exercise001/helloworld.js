// msg = "Hello World!"
// console.log(msg)

// f1(999);
// function f1(n){
//     return n;
// }

// function createIncrementor(start) {
//   return function () {
//     return start++;
//   };
// }

// var inc = createIncrementor(5);

// document.write("<h1>This is a heading</h1>");
// document.write("<p>This is a paragraph.</p>");

// function changeContent()
// {
// x=document.getElementById("demo");  // 找到元素
// x.innerHTML="Hello JavaScript!";    // 改变内容
// }

// function changeImage()
// {
// element=document.getElementById('myimage')
// if (element.src.match("eg_bulbon"))
//   {
//   element.src="eg_bulboff.gif";
//   }
// else
//   {
//   element.src="eg_bulbon.gif";
//   }
// }

// function changeStyle()
// {
// x=document.getElementById("demo") // 找到元素
// x.style.color="#ff0000";          // 改变样式
// }

// function isNumber()
// {
// var x=document.getElementById("input0").value;
// if(x==""||isNaN(x))
// 	{
// 	alert("Not Numeric");
//   }
// }

//  alert(inc())
//  alert(inc())
//  alert(inc())


var text = 'hello'
// console.log(text.search('o'))
// console.log(text.toUpperCase())

// var k = new Array(4,5,6)
// for(i in k){
//   // if(i==2)continue;
//   console.log('i=',i)
//   console.log(k[i]);
// }

// cars=["BMW","Volvo","Saab","Ford"];
// list:
// {
//   console.log(cars[0] + "<br>");
//   console.log(cars[1] + "<br>");
//   console.log(cars[2] + "<br>");
//   break list;
//   console.log(cars[3] + "<br>");
//   console.log(cars[4] + "<br>");
//   console.log(cars[5] + "<br>");
// }


try
  {
  adddlert("Welcome guest!");
  }
catch(err)
  {
  txt="There was an error on this page.\n\n";
  txt+="Error description: " + err.message + "\n\n";
  txt+="Click OK to continue.\n\n";
  console.log(txt);
  }