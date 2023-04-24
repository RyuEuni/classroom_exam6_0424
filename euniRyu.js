let baiscData = {
  header: {
    id : "header",
    type : "div",
    children : null
  },
  main: {
    id : "main",
    type : "div",
    children : null
  },
  footer: {
    id : "footer",
    type : "div",
    children : null
  }
}

let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];

function exampleOne(object, array) {
  let value = '';


  for(let key in object){
    if(object[key].children === null){

      object[key].children = [];

      for(let i = 0; i < array.length; i++){
        object[key].children.push(`<p>${array[i]}</p>`);
      }
    }
    console.log("child", object[key].children)
  }
  
  for(let key in object){
    value += `<${object[key].type} id="${object[key].id}">${object[key].children.join('')}</${object[key].type}>`;
  }

  return value;
}

console.log(exampleOne(baiscData, elementData));

const root = document.getElementById('root');
let child;
child = exampleOne(baiscData, elementData)
root.innerHTML = child;