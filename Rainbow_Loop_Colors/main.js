
const list = document.getElementsByTagName("div");
const colors = ["#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"];
let counter = 0;

changeColor(reverseColor);
setInterval(()=>{
  changeColor(reverseColor);
}, 2800);


function changeColor (callback){  

  for(let i = 0; i < list.length; i++){
    (function (index) {
      setTimeout(() => {
        list[index].style.backgroundColor = colors[index];
        list[index].style.height = "103px";
        counter++;
        if(counter === list.length)
        callback();
      },200 * (i + 1));
    })(i);
  }
}

function reverseColor(){
  console.log("reverse...");
  for (let i = list.length - 1; i >= 0; i--){
    (function (index) {
      setTimeout(() => {
        list[index].style.backgroundColor = "initial";
      }, 200 * (list.length - i));
    })(i);
  }
  counter = 0;
}

