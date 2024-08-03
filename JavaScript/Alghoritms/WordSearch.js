var words = ["fish", "ford", "tigo"];

document.write('<strong> New words for base: </strong> <input value="" id="NewWords">');
document.write(' <button type="button" onclick=AddWord()> Add </button> <br>  <br>')
document.write('<input value="fosh" id="find"> ');
document.write('<button type="button" onclick=FindWord()> Find </button> <br>  <br>')
document.write(" <strong  >Words base </strong>  <p id='words'>" + words.join(", ")  + "</p>"+ "<br>");

document.write("<strong>  Similar: </strong>  <p id='same'></p>")

function FindWord(){ 
    document.getElementById("same").innerHTML=document.getElementById("find").value + " - " + WordSearch(document.getElementById("find").value, words);
}

function WordSearch(word, words){
    var WordLetters = word.split("");
    var letters=[];
    var comparison=[];
    var SameLetters={};
    for(var i = 0; i<words.length; i++){
        comparison[i]=[];
        letters[i]=words[i].split("");
        for(var l1 = 0; l1<WordLetters.length; l1++){
            comparison[i][l1]=[];
            for(l2=0; l2<letters[i].length; l2++){
                if(WordLetters[l1]==letters[i][l2]){
                    if(l1==0 || l2==0) comparison[i][l1][l2]=1;
                    else comparison[i][l1][l2]=comparison[i][l1-1][l2-1]+1;
                }else{
                    if(l1==0 || l2==0){
                        if(l1==0 && l2==0) comparison[i][l1][l2]=0;
                        else if(l1==0) comparison[i][l1][l2] = comparison[i][l1][l2-1];
                        else comparison[i][l1][l2] = comparison[i][l1-1][l2];
                    } 
                    else comparison[i][l1][l2]=Math.max(comparison[i][l1-1][l2], comparison[i][l1][l2-1]);
                }  
            }
        }
        SameLetters[comparison[i][comparison[i].length-1][comparison[i][comparison[i].length-1].length-1]]=words[i];
    }
    return SameLetters[Math.max(... Object.keys(SameLetters))];
}

function AddWord(){
    document.getElementById("words").innerHTML+=", " + document.getElementById("NewWords").value 
    words=document.getElementById("words").innerHTML.split(", ");
}

