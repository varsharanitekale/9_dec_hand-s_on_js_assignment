
let btn=document.querySelector("button").addEventListener('click', function(){
    let input_value_1=document.getElementById("tet").value;
    // alert(input_value_1);
    let input_value_2=document.getElementById("tet1").value;
    let input_value_3=document.getElementById("tet2").value;
    // alert(input_value_3);
    let result= multiplication(input_value_1)(input_value_2)(input_value_3);
            console.log(result);
            let h1 = document.createElement('h1');
        
  

    
            h1.innerText="result :"+ result;
            
  
            
            let div=document.getElementById('result');
            div.appendChild(h1);
                      
            // document.getElementById('output').style.display="flex";

  



});
let multiplication=function (x){
    return  function (y){
          return  function(z){
               return x*y*z;
           }
       }
   }

