let element=document.querySelector('h1');
let size=1;
let s;
setInterval(a,3);
function a (){
s=40-size;
s=s/40;
size+=s;
element.style["font-size"]=size+"px";
element.style["margin"]=40-size+"px 0px ";
}
