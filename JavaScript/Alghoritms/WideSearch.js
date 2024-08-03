//найти продавца манго

var friends = {
    "I": ["alice", "bob", "claire"],
    "bob": ["anuj", "peggy"],
    "alice": ["peggy"],
    "claire": ["thom", "jonny"],
    "anuj": [],
    "thom": ["karen"],
    "jonny": [],
    "peggy": []
};

function search(name){ // Предроложем продавец это джони, но вместо его может быть кто и что угодно!
   
    var turn=[];
    var check=[];

    for(var i=0; i<name[Object.keys(name)[0]].length; i++)  turn.push(name[Object.keys(name)[0]][i]);  // add friends[i] elemenent to turn 

    for(var t=0; t>-1; t++){
        
        for(var m; m<check.length; m++) if(check[m]==turn[0]) turn.shift();
  
        if(turn[0]=="karen") return (t+1);
        else if(turn==0) return "Haven't"
        else{
            for(var i=0; i<name[turn[0]].length; i++) turn.push(name[turn[0]][i]);
            check.push(turn[0]);
            turn.shift();
            }
        }  
    
    return turn;
}

  alert(search(friends));

