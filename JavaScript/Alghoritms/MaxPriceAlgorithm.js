var goods={ //first argument - weight, second - price
    "water": [3, 10],
    "book": [1, 3],
    "jacket": [2, 5],
    "food": [2, 9],
    "camera": [1, 6]
}

function MaxPrice(goods, MaxWeight){
    
    var table=[];
    var prices=[];

    var product=Object.keys(goods);

    for(var x = 0; x<product.length; x++){
   
        table[x] = [];
        prices[x] = [];

        for(var y=1; y<=MaxWeight; y++){
    
            table[x][y-1] = [];       // таблица товаров
            prices[x][y-1] = goods[product[x]][1];        // цена товара 
            
            if(goods[product[x]][0]>y){
                if(x>0){
                    table[x][y-1] = table[x-1][y-1]; //если вес меньше, сразу предедущий
                    prices[x][y-1] = prices[x-1][y-1]; 
                } 
            }else{
               if(x>0 && table[x-1][y-1]!=""){
                    var weight = y-goods[product[x]][0];  // остаток веса
                    if(weight>0){
                        for(var i = x; i>=1; i--){
                            if(table[i-1][weight-1]!=""){
                                prices[x][y-1] += prices[i-1][weight-1];
                                i=0;
                            }
                        }
                    }
                    if(prices[x][y-1]>prices[x-1][y-1]){
                        table[x][y-1] = product[x];          //если цена товара дороже, чем предедущая, ставим новый това
                        for(var i = x; i>=1; i--){
                            if(table[i-1][weight-1]!="" && table[i-1][weight-1]!=undefined){
                                table[x][y-1]+=", " + table[i-1][weight-1];
                                i=0;
                            }
                        }
                    }else{
                        table[x][y-1] = table[x-1][y-1];       //иначе оставлаяем предедущую 
                        prices[x][y-1] = prices[x-1][y-1]
                    }
                }else table[x][y-1]=product[x];
                
            }
            if(table[x][y-1]=="") prices[x][y-1]=0;
        }
    }
    console.log(table);
    console.log(prices);
    
    return table[product.length-1][MaxWeight-1];

    // y - нынешный вес
    // x - индекс продукта 
    // product[x] - название продукта
    // goods[product[x]][0] - вес продукта
    // goods[product[x]][1] - цена продукта
    // goods[table[x][y-1]][0] - вес первого элемента 
    // table[x][y-1] - нынешная клетка
}

console.log(goods);
alert(MaxPrice(goods, 6));


