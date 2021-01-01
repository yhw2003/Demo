function Panel(){
    context.fillStyle = "#a18458";
    context.fillRect(0,0,600,600    );
    for(let i = 30; i < 600; i=i+30){
        context.moveTo(i,0);
        context.lineTo(i,600);
        context.stroke();
    }
    for(let i = 30; i < 600; i=i+30){
        context.moveTo(0,i);
        context.lineTo(600,i);
        context.stroke();
    }
    this.down=()=>{

    }
}