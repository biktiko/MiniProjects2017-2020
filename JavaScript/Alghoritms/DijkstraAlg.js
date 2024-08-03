var graph ={
    "start":{        //соседные (соеденные) узли (направлённые)
        "a":1,
        "b":2
    },
    "a":{             //соседные (соеденные) узли (направлённые)
        "d":2,
        "fin":9
    } , 
    "b":{            //соседные (соеденные) узли (направлённые)
        "a":6,
        "fin":5,
    },
    "d":{
        "fin":3
    },
    "fin":{         //соседные (соеденные) узли (направлённые)

    }
};

var costs = {
    "a":1,
    "b":2,
    "d":Infinity,
    "fin":Infinity,
};

var parents = {
    "a":"start",
    "b":"start",
    "d": NaN,
    "fin": NaN
};

function DijkstraAlg(graph, costs, parents){
    
    var neighbor;
    var processed = [];
    var minCostKey;
    var minCost=costs[Object.keys(costs)[0]];

    while(true){

        var processed_list = new Set(processed);
       
        for(var i = 0; i<=Object.keys(costs).length; i++){
            if(!processed_list.has(Object.keys(costs)[i])){
                minCost = costs[Object.keys(costs)[i]];
                minCostKey=Object.keys(costs)[i];
                i=Object.keys(costs).length+1;
            }
        }
       
        for(var i = 1; i<Object.keys(costs).length; i++){             //ищем самый дешевый путь
            
            if(minCost > Math.min(minCost, costs[Object.keys(costs)[i]]) ){
                if(processed.length>0){
                    for(n=0; n<=processed.length; n++){
                        if(Object.keys(costs)[i]==processed[n]){ 
                            n=processed.length+1;
                            i++;
                        }
                    }
                    if(n==processed.length){
                        minCost = Math.min(minCost, costs[Object.keys(costs)[i]]);
                        minCostKey = Object.keys(costs)[i];
                    }
                }
                else{
                    minCost = Math.min(minCost, costs[Object.keys(costs)[i]]);
                    minCostKey = Object.keys(costs)[i];
                }
            }
        }
    
     for(var i=0; i<Object.keys(graph[minCostKey]).length; i++){                //цены соседей по узлам
            neighbor = graph[minCostKey][Object.keys(graph[minCostKey])[i]];
            if(minCost+neighbor<costs[Object.keys(graph[minCostKey])[i]]){
                costs[Object.keys(graph[minCostKey])[i]]=minCost+neighbor;        //обновляем цены
                parents[Object.keys(graph[minCostKey])[i]]=minCostKey;            //обновляем родитилей (путь через определенные узли)
                
            };
        };

        processed.push(minCostKey);    // добавляем текущий узел в список обработанных!
        
        if(processed.length==Object.keys(costs).length){
            var node = parents["fin"];
            var way = " : fin - " + node;
          
            for(var i=0; i<Object.keys(parents).length-1; i++){
                node = parents[node];
                if(node!=undefined)  way+=" - " + node;
            }
            return costs["fin"] + way;
        } 
        // if(processed.length==Object.keys(costs).length){
        //     //var node = parents["start"];
        //     var way = " : start - ";
        //     var nodes=[];
        //     nodes.push(parents["fin"]);
        //     console.log(nodes)
        //     for(var i=0; i<Object.keys(parents).length-1; i++) nodes.push(parents[nodes[nodes.length-1]]);
        //     console.log(nodes[nodes.length-1]);
        //     for(var i=nodes.length; i>0; i--) way+=nodes[i];
               
            
        //     return costs["fin"] + way;
        //} 
    }
}

document.write((DijkstraAlg(graph, costs, parents)));


graph["a"][Object.keys(graph["a"])[0]]

