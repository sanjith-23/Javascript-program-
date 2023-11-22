let a=document.querySelectorAll("#press");
let result1=document.querySelector(".colorname");
let result2=document.querySelector(".hexcode");
let color;

a.forEach(button=>button.addEventListener("mouseover",()=>{
    color=button.textContent.toUpperCase();
    result1.textContent=color;
    result2.textContent=c(color);
    result1.style.color=c(color);
    
}));
a.forEach(button=>button.addEventListener("mouseout",()=>{
    result1.textContent="";
    result2.textContent="";
}));
function c(color){
    if(color=="RED"){
        return "#FF0000";
    }
    else if(color=="GREEN"){
        return "#00FF00";
    }
    else if(color=="BLUE"){
        return "#0000FF";
    }
    else if(color=="INDIGO"){
        return "#4B0082";
    }
    else if(color=="ORANGE"){
        return "#FFA500";
    }
    else if(color=="YELLOW"){
        return "#FFFF00";
    }
    else if(color=="VIOLET"){
        return "#8F00FF";
    }
    else if(color=="BLACK"){
        return "#000000";
    }
    else if(color=="MAROON"){
        return "#800000";
    }
    else if(color=="GRAY"){
        return "#808080";
    }
    else if(color=="OLIVE"){
        return "#808000";
    }
    else if(color=="PINK"){
        return "#FFC0CB";
    }
    else if(color=="TEAL"){
        return "#008080";
    }
    else if(color=="WHITE"){
        return "#FFFFFF";
    }
    
}












