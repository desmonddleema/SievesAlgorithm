function generateNumbers() {
    const lower = parseInt(document.getElementById("value1").value);
    const upper = parseInt(document.getElementById("value2").value);
    var number = parseInt(document.getElementById("value3").value);
    const theme = document.getElementById("value4").value;
    
    document.getElementById("message").style.display = "none";    
    var text = '<div class="parent">';
    text = '<div class="flex-container" id="change">';
    for (let i = lower; i <= upper; i++) {
        text += '<div class="flex-child" id="child'+i+'"><p>' + i + "</p></div>";
    }
    // text += '</div><div class="buttonClass"><button onClick="even()">Even</button><button onClick="odd()">Odd</button><button onClick="sieve()">Prime</button><button onClick="reset()">Reset</button></div>';
    
    text += '</div><div class="buttonClass"><button Onclick="sieve()">Prime</button><button Onclick="generateNumbers()">Factors</button><button onClick="reset()">Reset</button></div>'
    document.getElementById("demo").innerHTML = text;

    if(theme == "Dark"){
        document.getElementById("value1").style.background = "grey";
        document.getElementById("value2").style.background = "grey";
        document.getElementById("value3").style.background = "grey";
        document.getElementById("value4").style.background = "grey";
        document.getElementById("change").style.background = "rgb(40,40,40)";
        document.getElementById("body").style.background = "rgb(20,20,20)";
        document.getElementById("dark").style.color = "aliceblue";
        for(let i=lower; i<=upper; i++){
            document.getElementById("child"+i).style.background = "grey";
        }
    }else{
        document.getElementById("value1").style.background = "white";
        document.getElementById("value2").style.background = "white";
        document.getElementById("value3").style.background = "white";
        document.getElementById("value4").style.background = "white";
        document.getElementById("change").style.background = "indianred";
        document.getElementById("body").style.background = "white";
        document.getElementById("dark").style.color = "black";
        for(let i=lower; i<=upper; i++){
            document.getElementById("child"+i).style.background = "wheat";
        }
    }

    if(number != 0){
        var spf = [0]
        for(let i=lower; i<=number; i++){
            spf.push(i);
        }
        for(let i=2; i<=number; i++){
            if(spf[i] == i){
                for(let j=i*i; j<=number; j+=i){
                    if(spf[j] == j){
                        spf[j] = i;
                    }
                }
            }
        }
    // for(let i=0; i<spf.length; i++) console.log(spf[i]);
        while(number != 1){
            var temp = "child" + spf[number];
            number = number/spf[number];
            document.getElementById(temp).style.background = "yellow";
        }
    }
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
    const theme = document.getElementById("value4").value;

    if(theme == "Dark"){
        document.getElementById("value1").style.background = "grey";
        document.getElementById("value2").style.background = "grey";
        document.getElementById("value3").style.background = "grey";
        document.getElementById("value4").style.background = "grey";
        document.getElementById("change").style.background = "rgb(40,40,40)";
        document.getElementById("body").style.background = "rgb(20,20,20)";
        document.getElementById("dark").style.color = "aliceblue";
        for(let i=lower; i<=upper; i++){
            document.getElementById("child"+i).style.background = "grey";
        }
    }else{
        document.getElementById("value1").style.background = "white";
        document.getElementById("value2").style.background = "white";
        document.getElementById("value3").style.background = "white";
        document.getElementById("value4").style.background = "white";
        document.getElementById("change").style.background = "indianred";
        document.getElementById("body").style.background = "white";
        document.getElementById("dark").style.color = "black";
        for(let i=lower; i<=upper; i++){
            document.getElementById("child"+i).style.background = "wheat";
        }
    }
    
    document.getElementById("message").style.display = "none";
    for(let i=lower; i<=upper; i++){
        var value="child"+i;
        if(theme == "Dark"){
            document.getElementById(value).style.background="grey";
        }else{
            document.getElementById(value).style.background="wheat";
        }
    }

}
function sieve(){
    const lower = parseInt(document.getElementById("value1").value);
    const upper = parseInt(document.getElementById("value2").value);
    const theme = document.getElementById("value4").value;

    if(theme == "Dark"){
        document.getElementById("change").style.background = "rgb(40,40,40)";
        document.getElementById("body").style.background = "rgb(20,20,20)";
        document.getElementById("dark").style.color = "aliceblue";
        for(let i=lower; i<=upper; i++){
            document.getElementById("child"+i).style.background = "grey";
        }
    }else{
        document.getElementById("value1").style.background = "white";
        document.getElementById("value2").style.background = "white";
        document.getElementById("value3").style.background = "white";
        document.getElementById("value4").style.background = "white";
        document.getElementById("change").style.background = "indianred";
        document.getElementById("body").style.background = "white";
        document.getElementById("dark").style.color = "black";
        for(let i=lower; i<=upper; i++){
            document.getElementById("child"+i).style.background = "wheat";
        }
    }

    for(let i=lower; i<=upper; i++){
        var value="child"+i;
        if(theme == "Dark"){
            document.getElementById(value).style.background="grey";
        }else{
            document.getElementById(value).style.background="wheat";
        }
    }
    for(let i=2; i<=(upper/4); i++){
        var value1 = i*i;
        var inc = value1/i;
        while(value1 <= upper){
            var result = "child" + value1;
            if(theme == "Dark"){
                document.getElementById(result).style.background ="aqua";
            }
            else{
                document.getElementById(result).style.background ="orange";
            }
            inc += 1;
            value1 = i*inc;
        }
        if(theme == "Dark"){
            document.getElementById("message").style.background = "grey";
            document.getElementById("message").style.display = "block";
        }else{
            document.getElementById("message").style.background = "wheat";
            document.getElementById("message").style.display = "block";
        }
    }
}
  