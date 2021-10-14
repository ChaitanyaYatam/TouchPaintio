canvas = document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
color="blue"
var wid = screen.width
var nwid= screen.width-70
var hei = screen.height
var nhei= screen.height-300
var lp_x,lp_y
var wol=1

if(wid<992){
document.getElementById("mycanvas").width=nwid
document.getElementById("mycanvas").height=nhei
document.body.style.overflow="hidden"
}

canvas.addEventListener("touchstart",my_touchstart)

function my_touchstart(e){
    color=document.getElementById("color").value 
    wol=document.getElementById("num").value
    lp_x=e.touches[0].clientX-canvas.offsetLeft
    lp_y=e.touches[0].clientY-canvas.offsetTop

}



canvas.addEventListener("touchmove",my_touchmove)

function my_touchmove(e){
    cpotx=e.touches[0].clientX-canvas.offsetLeft
    cpotx=e.touches[0].clientY-canvas.offsetTop

    
        ctx.beginPath();
        ctx.strokeStyle=color
        ctx.lineWidth=wol

        console.log("last positon of X and Y coordinates = ")
        console.log("x= " + lp_x + "y= " + lp_y )
        ctx.moveTo(lp_x,lp_y)
        
        console.log("current positon of X and Y coordinates = ")
        console.log("x= " + cpotx + "y= " + cpoty )

        ctx.lineTo(cpotx,cpoty)
        ctx.stroke()
    

    lp_x=cpotx
    lp_y=cpoty
}




function clea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)

}