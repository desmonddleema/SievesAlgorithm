function generateNumbers() {
    const lower = parseInt(document.getElementById("value1").value);
    const upper = parseInt(document.getElementById("value2").value);

    var text = '<div class="parent">';
    text = '<div class="flex-container">';
    for (let i = lower; i <= upper; i++) {
      text += '<div class="flex-child" id="child'+i+'"><p>' + i + "</p></div>";
    }
    text += '</div><div class="buttonClass"><button onClick="even()">Even</button><button onClick="odd()">Odd</button><button onClick="reset()">Reset</button></div>';
    document.getElementById("demo").innerHTML = text;
  }
function even(){
    const lower = parseInt(document.getElementById("value1").value);
    const upper = parseInt(document.getElementById("value2").value);
    for(let i=lower; i<=upper; i++){
        if(i%2 == 0){
            var value="child"+i;
            document.getElementById(value).style.background="blue";
        }
    }
}
function odd(){
    const lower = parseInt(document.getElementById("value1").value);
    const upper = parseInt(document.getElementById("value2").value);
    for(let i=lower; i<=upper; i++){
        if(i%2 != 0){
            var value="child"+i;
            document.getElementById(value).style.background="green";
        }
    }
}
function reset(){
    const lower = parseInt(document.getElementById("value1").value);
    const upper = parseInt(document.getElementById("value2").value);
    for(let i=lower; i<=upper; i++){
          var value="child"+i;
         // console.log(value);
        document.getElementById(value).style.background="wheat";
    }
}

  