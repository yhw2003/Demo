function ChessMan(x,y,type){
    x=30*(x-1)+15;
    y=30*(y-1)+15;
    context.beginPath();
    context.arc(x,y,12,0,2*Math.PI);
    context.fillStyle=type;
    context.fill();
    context.stroke();
    context.closePath();
}