function generateNumbers() {
    const lower = parseInt(document.getElementById("value1").value);
    const upper = parseInt(document.getElementById("value2").value);

    var text = '<div class="parent">';
    text = '<div class="flex-container">';
    for (let i = lower; i <= upper; i++) {
      text += '<div class="flex-child" id="child'+i+'"><p>' + i + "</p></div>";
    }
    // text += '</div><div class="buttonClass"><button onClick="even()">Even</button><button onClick="odd()">Odd</button><button onClick="sieve()">Prime</button><button onClick="reset()">Reset</button></div>';
    
    text += '</div><div class="buttonClass"><button Onclick="sieve()">Prime</button><button onClick="reset()">Reset</button></div>'
    document.getElementById("demo").innerHTML = text;
  }
function even(){
    const lower = parseInt(document.getElementById("value1").value);
    const upper = parseInt(document.getElementById("value2").value);
    for(let i=lower; i<=upper; i++){
        if(i%2 == 0){
            var value="child"+i;
            document.getElementById(value).style.background="orange";
        }
    }
}
function odd(){
    const lower = parseInt(document.getElementById("value1").value);
    const upper = parseInt(document.getElementById("value2").value);
    for(let i=lower; i<=upper; i++){
        if(i%2 != 0){
            var value="child"+i;
            document.getElementById(value).style.background="yellow";
        }
    }
}
function reset(){
    const lower = parseInt(document.getElementById("value1").value);
    const upper = parseInt(document.getElementById("value2").value);
    document.getElementById("message").style.display = "none";
    for(let i=lower; i<=upper; i++){
        var value="child"+i;
        document.getElementById(value).style.background="wheat";
    }
}
function sieve(){
    const lower = parseInt(document.getElementById("value1").value);
    const upper = parseInt(document.getElementById("value2").value);
    for(let i=2; i<=(upper/4); i++){
        var value1 = i*i;
        var inc = value1/i;
        while(value1 <= upper){
            var result = "child" + value1;
            document.getElementById(result).style.background ="orange";
            inc += 1;
            value1 = i*inc;
        }
    document.getElementById("message").style.display = "block";
    }
}
  