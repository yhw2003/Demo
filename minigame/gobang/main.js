
let i = 0;

let global = {
    length:length = 0,
};
let canvas = document.getElementById("mainCanvas");
console.dir(canvas);
let context = canvas.getContext("2d");
let gamePanel = new Panel();//when doing

function ifPutTed(inputX,inputY){
    let test = [inputX,inputY]
    for(let ii=0;ii<=global.length-1;ii++){
        if (global[ii][0]===test[0] && global[ii][1]===test[1]){
            return false
        }
    }
    return true
}

canvas.onclick=(that)=>{ //Put the chessman when clicked
    that.x=that.x-10;
    that.y=that.y-10;
    for(let ix=0;ix<=20;ix++){
        for(let iy=0;iy<=20;iy++){
            if (that.x>30*(ix-1) && that.x<30*ix && that.y>30*(iy-1) && that.y<30*iy && ifPutTed(ix,iy)){
                ChessMan(ix,iy,gamePanel.dplayer);
                console.dir([ix,iy]);
            }
        }
    }
}