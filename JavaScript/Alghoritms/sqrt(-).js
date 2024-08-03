function sqrt(n){
    m=n;
    x=1; 
    for(var i =0; i<30; i++){
        console.log(m);
        
        x=(m+x)/n;
        m=2/x;
    }
    alert("Корень из " +  n + "="  + m);
}

// function sqrt3(n){
//     m=n;
//     x=1; 
//     for(var i =0; i<30; i++){
//         x=(m+x)/2;
//         m=2/x;
//     }
//     alert("Корень из " +  n + "="  + m);
// }

sqrt(16);