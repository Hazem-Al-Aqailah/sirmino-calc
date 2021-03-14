let runningTotal=0;
let buffer= "0";
let previousOpertator = null;
const screen= document.querySelector(".screen");

document
.querySelector(".calc-buttons")
.addEventListener("click", function(event){
buttonClick(event.target.innerText);
});

function buttonClick(value){

    if (isNaN(parseInt(value))){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    rerender();

}

function handleNumber(value){
    if (buffer==="0"){
        buffer=value;
    }else{
        buffer += value;
    }
}
function handleSymbol(value){
    switch (value){
        case 'C':
            buffer='0';
            runningTotal=0;
            previousOpertator=== null;
        case '=':
            if (previousOpertator=== null){
                return;
            }
            flushOperration(parseInt(buffer));
            previousOpertator= null;
            buffer="" + runningTotal
            runningTotal=0;
            break;
        case "←":
            if (buffer.length=== 1){
                buffer="0";
            }else{
                buffer=buffer.substring(0,buffer.length-1)
            }
            break;
        default:
            handleMath(value);
            break;    
    }
}
function handleMath(value){
    const intBuffer=parseInt(buffer);
    if (runningTotal===0){
        runningTotal=intBuffer
    }else{
        flushOperration(intBuffer)
    }
    previousOpertator= value;
    buffer='0';
}

function flushOperration(intBuffer){
    if (previousOpertator==="+"){
        runningTotal+= intBuffer
    }else if(previousOpertator==="-"){
        runningTotal-= intBuffer
    }else if(previousOpertator==="*"){
            runningTotal*= intBuffer
    }else if(previousOpertator==="/"){
        runningTotal/= intBuffer    
}}
function rerender(){
    screen.innerText=buffer;
}
