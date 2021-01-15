function Panel(){
    context.fillStyle = "#a18458";
    context.fillRect(0,0,600,600    );
    for(let ii = 30; ii < 600; ii=ii+30){
        context.moveTo(ii,0);
        context.lineTo(ii,600);
        context.stroke();
    }
    for(let ii = 30; ii < 600; ii=ii+30){
        context.moveTo(0,ii);
        context.lineTo(600,ii);
        context.stroke();
    }
    this.dplayer = "black";
    // for(let i=1;i<=21;i++){
    //     for(let j = 1; j <= 21 ; j++) {
    //         this[i][j]=false;
    //     }
    // }
    this.down=()=>{
        if (this.dplayer==="black"){
            this.dplayer="white";
        }else if (this.dplayer==="white"){
            this.dplayer="black";
        }else alert("Unknown error");
    }
}