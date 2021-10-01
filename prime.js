//creating variable 
var i,num,f=0;

//creating function to check and store the input value from text box
function prime(){
    num = Number(document.getElementById("PrimeNumber").value);
    for(i=2;i<num/2;i++){
        if(num% i==0){
            f=1;
        }
    }
    if(f==1){
    window.alert(num + " IS NOT A PRIME NUNBER");
    }else{
        window.alert(num + " IS A PRIME NUMBER");
    }
}