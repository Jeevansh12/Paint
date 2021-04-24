var mouseEvent="empty";
var last_position_of_x;
var last_position_of_y;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color ="blue";
width_of_line =6;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent ="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mousex =e.clientX -canvas.offsetLeft;
    current_position_of_mousey =e.clientY -canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth= width_of_line;
        console.log("last position of x and y = ");
        console.log("x= "+ last_position_of_x + "y= "+ last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);
console.log("current position of x and y = ");
console.log("x= "+ current_position_of_mousex + "y= "+ current_position_of_mousey);
ctx.lineTo(current_position_of_mousex,current_position_of_mousey);
ctx.stroke();
    }
    last_position_of_x = current_position_of_mousex;
    last_position_of_y = current_position_of_mousey;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}
canvas =document.getElementsById("myCanvas");
color ="red";
ctx =canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2* Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
mouse_x=e.clientX - canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
console.log("x=" + mouse_x + " y= " + mouse_y);
circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2* Math.PI);
    ctx.stroke();  
}